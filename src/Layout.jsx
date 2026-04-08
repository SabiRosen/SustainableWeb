import { Outlet } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

export default function Layout() {
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