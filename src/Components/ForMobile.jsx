import React from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { portfolioData } from "../data/portfolioData";

const ForMobile = ({ cross, handleclick, handleremove }) => {
  return (
    <div className="for-mobile w-screen flex items-center h-[88px] px-3">
      <div className="w-screen flex justify-between items-center p-3 rounded-xl" style={{ background: "var(--surface-elevated)", border: "1px solid var(--border-subtle)", boxShadow: "var(--outline-glow)" }}>
        <h1 className="text-2xl font-bold" style={{ color: "var(--color-accent)" }}>
          {portfolioData.identity.navbarTitle}
        </h1>

        <div className="w-10 h-10 text-white flex justify-center items-center rounded-full p-2 lg:hidden sm:block" style={{ background: "var(--color-accent)" }}>
          {cross ? <RxCross1 onClick={handleremove} className="text-2xl" /> : <LuMenu className="text-2xl" onClick={handleclick} />}
        </div>
      </div>
    </div>
  );
};

export default ForMobile;

