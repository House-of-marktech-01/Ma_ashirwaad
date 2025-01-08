import React from "react";
import SidebarDash from "./SidebarDash";
import { Outlet } from "react-router-dom";
import SidebarDashNavbar from "./SidebarDashnavbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* SidebarDash visible only on lg and above screens */}
      <div className="hidden lg:block">
        <SidebarDash />
      </div>

      <main className="flex-1 overflow-x-hidden">
        {/* SidebarDashNavbar visible only on screens smaller than lg */}
        <div className="block lg:hidden">
          <SidebarDashNavbar />
        </div>

        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
