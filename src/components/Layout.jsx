import React from "react";
import { Outlet } from "react-router";
import TopBar from "./TopBar"; // <-- Import it here

export default function Layout() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-6">
        
        {/* Add the TopBar here */}
        <TopBar />
        
        <main>
          <Outlet />
        </main>

      </div>
    </div>
  );
}