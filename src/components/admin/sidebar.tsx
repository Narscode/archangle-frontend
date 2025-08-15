import { useIsMobile } from "@/hook/useMobile";
import { AdminMenus, ContentSidebarProps, SidebarContent } from "@/type/ui";
import { Box, ChevronDown, ChevronRight, LayoutDashboard, PanelsLeftBottomIcon, Search } from "lucide-react";
import React from "react";

export const Menus: {
    section: string;
    content: SidebarContent[];
}[] = [
        {
            section: 'Fitur',
            content: [
                {
                    name: 'Dashboard',
                    menu: AdminMenus.Dashboard,
                    icon: LayoutDashboard,
                    slash: '/',
                    submenu: [],
                },
                {
                    name: 'Hydra Guard',
                    menu: AdminMenus.Hydraguard,
                    slash: '/',
                    icon: Box,
                    submenu: [],
                },
                {
                    name: 'Sentinel',
                    menu: AdminMenus.Sentinel,
                    slash: '/',
                    icon: Box,
                    submenu: [],
                },
                {
                    name: 'Cerberus',
                    menu: AdminMenus.Cerberus,
                    slash: '/',
                    icon: Box,
                    submenu: [],
                },
                {
                    name: 'Vanguard',
                    menu: AdminMenus.VanGuard,
                    slash: '/',
                    icon: Box,
                    submenu: [],
                },
            ]
        },
        {
            section: 'Pengawasan',
            content: [
                {
                    name: 'Investigasi Aktif',
                    menu: AdminMenus.InvestigasiAktif,
                    slash: '/',
                    icon: Box,
                    submenu: [],
                },
                {
                    name: 'Laporan dan Bukti',
                    menu: AdminMenus.LaporanDanBukti,
                    slash: '/',
                    icon: Box,
                    submenu: [],
                },
            ]
        }
    ];

export function SidebarApp(
    { isSidebarOpen, setIsSidebarOpen, children }:
        { isSidebarOpen: boolean; setIsSidebarOpen: (d: boolean) => void; children: React.ReactNode; }
) {
    const isMobile = useIsMobile();
    if (!isSidebarOpen) return null;

    return (
        <div
            className={`
                        ${isMobile
                    ? "absolute top-0 left-0 w-1/2 h-full z-20 transform transition-transform duration-300 ease-in-out"
                    : "relative w-[40%] md:w-[25%] transform transition-all duration-300 ease-in-out"
                } 
                        flex items-start justify-center
                      `}
        >
            <div className="bg-white w-full h-full rounded-l-md rounded-b-md shadow-lg border border-gray-300 p-2">
                {isMobile &&
                    <div
                        className="border-b border-gray-300 pb-2 cursor-pointer w-full flex justify-start"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <PanelsLeftBottomIcon />
                    </div>
                }
                <div>{children}</div>
            </div>
        </div>
    );
}

export function SidebarItem({
    selectedMenu,
    setSelectedMenu,
    content,
}: {
    selectedMenu: AdminMenus;
    setSelectedMenu: (d: AdminMenus) => void;
    content: SidebarContent;
}) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleMainClick = () => {
        if (content.submenu.length > 0) {
            setIsOpen(!isOpen);
        } else {
            setSelectedMenu(content.menu ?? selectedMenu);
        }
    };

    return (
        <div className="cursor-pointer space-y-2 rounded-md text-sm">
            <div
                onClick={handleMainClick}
                className={`w-full flex items-center justify-between hover:bg-gray-100 p-2 rounded-md ${selectedMenu === content.menu ? "bg-gray-200" : ""
                    }`}
            >
                <div className="flex items-center space-x-1">
                    {content.icon && <content.icon size={15} />}
                    <p>{content.name}</p>
                </div>
                {content.submenu.length > 0 && (
                    <span className="transition-transform duration-200">
                        {isOpen ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                    </span>
                )}
            </div>

            {isOpen && content.submenu.length > 0 && (
                <div className="transition-all duration-200 space-y-1 pl-6">
                    {content.submenu.map((sub, idx) => (
                        <div
                            key={idx}
                            className={`flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 ${selectedMenu === sub.menu ? "bg-gray-200" : ""
                                }`}
                            onClick={() => setSelectedMenu(sub.menu)}
                        >
                            {sub.icon && <sub.icon size={15} />}
                            <p>{sub.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export function SidebarHeader() {
    return (
        <div className="space-y-3">
            <div className="flex items-center space-x-2">
                <div className="w-[15%] aspect-square bg-blue-700 rounded-md"></div>
                <div className="">
                    <h1 className="font-bold text-[0.8vw]">ARCHANGEL</h1>
                    <p className="text-[0.7vw] w-[80%]">One-Stop Intelligence System for Anti-Gambling & Fraud</p>
                </div>
            </div>
            <div>
                <div className="flex items-center space-x-2 border border-gray-300 py-1 px-3 rounded-md">
                    <Search size={20} />
                    <input type="text" name="search" id="search" className="font-medium p-1" placeholder="search..." />
                </div>
            </div>
        </div>
    );
}

export function ContentSidebar(
    { isSidebarOpen, setIsSidebarOpen, listContent, selectedMenu }:
        { isSidebarOpen: boolean; setIsSidebarOpen: (d: boolean) => void; listContent: ContentSidebarProps[], selectedMenu: AdminMenus }
) {
    const isMobile = useIsMobile();

    return (
        <div
            className={`
              ${isMobile
                    ? "w-full relative z-10"
                    : !isSidebarOpen
                        ? "w-full"
                        : "w-[60%] md:w-[75%]"
                } 
            `}
        >
            <div className="bg-gray-50 w-full h-full shadow-lg border border-gray-300 p-2 overflow-y-scroll hide-scrollbar">
                <div
                    className={`border-b border-gray-300 pb-2 cursor-pointer w-full`}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <PanelsLeftBottomIcon />
                </div>
                <div className="pt-4">
                    {/* conditional rendering biar satu aja yang dirender yang pilih aja wok */}
                    {/* biar ga berat berat amat */}
                    {listContent.find(c => c.name === selectedMenu)?.children}
                </div>
            </div>
        </div>
    );
}