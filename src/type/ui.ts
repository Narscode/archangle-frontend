import { LucideIcon } from "lucide-react";
import React from "react";

export interface User {
    username: string;
    role: string;
}

export interface authcontextprops {
    user: User | null;
    address: string;
    isLoggedIn: boolean;
}

export enum AdminMenus {
    // fitur
    Dashboard = "Dashboard",
    Hydraguard = "Hydraguard",
    Sentinel = "Sentinel",
    Cerberus = "Cerberus",
    VanGuard = "Van Guard",
    // Pengawasan
    InvestigasiAktif = "Investigasi Aktif",
    LaporanDanBukti = "Laporan Dan Bukti",
}

interface SidebarSubContent{
    name: string;
    menu: AdminMenus;
    icon?: LucideIcon;
    slash: string;
    submenu? : []
}

export interface SidebarContent{
    name: string;
    menu: AdminMenus;
    icon?: LucideIcon;
    slash: string;
    submenu : SidebarSubContent[]
}

export interface ContentSidebarProps{
    name: AdminMenus;
    children: React.ReactNode;
}