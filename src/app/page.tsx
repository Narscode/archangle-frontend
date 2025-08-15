'use client'

import React from "react";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "@/context/auth-context";
import { AdminMenus } from "@/type/ui";
import { ContentSidebar, Menus, SidebarApp, SidebarItem } from "@/components/admin/sidebar";
import { Cerberus } from "@/components/admin/cerberus-section";
import { Sentinel } from "@/components/admin/sentinel-section";
import { Dashboard } from "@/components/admin/dashboard-section";
import { Hydra } from "@/components/admin/hydra-section";
import { VanGuard } from "@/components/admin/vanguard-section";
import { Investigasi } from "@/components/admin/inestigasi-section";
import { Pelaporan } from "@/components/admin/pelaporan-section";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = React.useState<AdminMenus>(AdminMenus.Dashboard);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <SessionProvider>
      <AuthProvider>
        <div className="w-full flex justify-center items-center relative">
          <div className="flex w-full min-h-screen relative">
            <SidebarApp
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            >
              {/* masih jelek nanti aja */}
              {/* <SidebarHeader /> */}
              {/* masih jelek nanti aja */}

              <div className="space-y-4 mt-5">
                {Menus.map((menu, idx) =>
                  <div key={idx} className="space-y-2">
                    <p className="text-sm font-bold">{menu.section}</p>
                    {menu.content.map((content, contentId) =>
                      <SidebarItem
                        key={contentId}
                        content={content}
                        selectedMenu={selectedMenu}
                        setSelectedMenu={setSelectedMenu}
                      />
                    )}
                  </div>
                )}
              </div>

            </SidebarApp>
            <ContentSidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              selectedMenu={selectedMenu}
              listContent={[
                {name: AdminMenus.Cerberus, children: <Cerberus />},
                {name: AdminMenus.Sentinel, children: <Sentinel />},
                {name: AdminMenus.Dashboard, children: <Dashboard />},
                {name: AdminMenus.Hydraguard, children: <Hydra />},
                {name: AdminMenus.VanGuard, children: <VanGuard />},
                {name: AdminMenus.InvestigasiAktif, children: <Investigasi />},
                {name: AdminMenus.LaporanDanBukti, children: <Pelaporan />},
              ]}
            />
          </div>
        </div>
      </AuthProvider>
    </SessionProvider>
  );
}
