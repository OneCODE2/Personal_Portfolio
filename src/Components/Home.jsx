import React, { useEffect, useRef } from "react";
import Profile from "./Profile";
import { Outlet, useLocation } from "react-router-dom";
import "../App.css";
import { portfolioData } from "../data/portfolioData";
import Navbar from "./Navbar";

const Home = ({ show, setShow, cross, setCross, handleclick, handleremove }) => {
  const contentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div className="w-full h-screen overflow-hidden px-4 py-4 md:px-8">
      <div className="hidden lg:block fixed top-4 right-24 z-50">
        <Navbar />
      </div>

      <div className="max-w-[1400px] mx-auto h-full grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-4">
        <aside className="hidden lg:block h-full">
          <div className="sticky top-4">
            <Profile mode="desktop" show={show} setShow={setShow} cross={cross} setCross={setCross} handleclick={handleclick} handleremove={handleremove} />
          </div>
        </aside>

        <main
          ref={contentRef}
          className="h-full overflow-y-auto rounded-2xl p-4 md:p-6"
          style={{ background: "var(--surface-elevated)", border: "1px solid var(--border-subtle)", boxShadow: "var(--outline-glow)" }}
        >
          <div className="lg:hidden mb-4">
            <Profile mode="mobile" />
          </div>

          <div className="mt-2">
            <Outlet />
          </div>

          <footer className="py-6 px-2 text-center text-sm" style={{ color: "var(--color-text)" }}>
            {portfolioData.identity.footerStatement} - {portfolioData.identity.footerYear}
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Home;
