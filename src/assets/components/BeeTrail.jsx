// src/assets/components/BeeTrail.jsx
import { useEffect, useState, useRef } from "react"

export default function BeeTrail() {
    const [progress, setProgress] = useState(0)
    const ref = useRef(null)

    // ✅ Efter — brug requestAnimationFrame + throttling
useEffect(() => {
    let ticking = false

    function handleScroll() {
        if (ticking) return
        ticking = true

        requestAnimationFrame(() => {
            if (!ref.current) return
            const rect = ref.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const start = windowHeight
            const end = -rect.height
            const current = rect.top
            const p = 1 - (current - end) / (start - end)
            setProgress(Math.min(1, Math.max(0, p)))
            ticking = false
        })
    }

    window.addEventListener("scroll", handleScroll, { passive: true }) // ← passive: true er vigtigt!
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
}, [])

    /*useEffect(() => {
        function handleScroll() {
            if (!ref.current) return
            const rect = ref.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Start animating when the component enters the viewport
            // and finish when it leaves
            const start = windowHeight
            const end = -rect.height
            const current = rect.top
            const p = 1 - (current - end) / (start - end)
            setProgress(Math.min(1, Math.max(0, p)))
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])*/

    const width = 1200
    const height = 120

    // Bee flies right to left
    const beeX = width * (1 - progress)
    const beeY = height / 2 + Math.sin(progress * Math.PI * 4) * 20

// Generate organic wavy path
const generatePath = () => {
    const points = []
    const steps = 60
    for (let i = 0; i <= steps; i++) {
        const t = i / steps
        if (t > progress) break
        const x = width * (1 - t)
        const y = height / 2 + Math.sin(t * Math.PI * 4) * 20
        points.push(`${x},${y}`)
    }
    if (points.length < 2) return ""
    return `M ${points.join(" L ")}`
}

    return (
        <div ref={ref} className="w-full overflow-hidden py-4" style={{ height: `${height + 40}px` }}>
            <svg
                viewBox={`0 0 ${width} ${height}`}
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full"
            >
                <defs>
                    <linearGradient id="trailFade" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                        <stop offset="95%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <mask id="fadeMask">
                        <rect x="0" y="0" width={width} height={height} fill="url(#trailFade)" />
                    </mask>
                </defs>

                {/* Organic trail with fade */}
                <path
                    d={generatePath()}
                    fill="none"
                    stroke="#FFB300"
                    strokeWidth="2.5"
                    strokeDasharray="8 5"
                    strokeLinecap="round"
                    mask="url(#fadeMask)"
                />

                {/* Bee */}
                {progress > 0 && progress < 1.1 && (
                    <image
                        href="/src/assets/icons/bee.svg"
                        x={beeX - 25}
                        y={beeY - 25}
                        width="50"
                        height="50"
                    />
                )}
            </svg>
        </div>
    )
}