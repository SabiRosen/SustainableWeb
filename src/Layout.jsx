import { Outlet, useLocation } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import { useEffect } from "react";

export default function Layout() {
const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-secondary to-primary">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}