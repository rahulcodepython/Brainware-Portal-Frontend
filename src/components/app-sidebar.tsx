"use client"
import * as React from "react"
import {
    BookOpen,
    Bot,
    Calculator,
    Command,
    File,
    Files,
    IndianRupee,
    LayoutDashboard,
    LogOut,
    Settings2,
    SquareTerminal,
    Table,
    User,
} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-menu"
import Link from "next/link"

const student_url_header = "/student/dashboard"

const navMain = [
    {
        title: "Dashboard",
        url: `${student_url_header}`,
        icon: LayoutDashboard,
        isActive: true,
    },
    {
        title: "Profile",
        url: `${student_url_header}/profile`,
        icon: User,
    },
    {
        title: "Marks",
        url: "#",
        icon: Calculator,
    },
    {
        title: "Lecture Plan",
        url: "#",
        icon: Table,
    },
    {
        title: "Academic Resources",
        url: "#",
        icon: File,
    },
    {
        title: "Money Receipt",
        url: "#",
        icon: IndianRupee,
    },
    {
        title: "Admission Documents",
        url: "#",
        icon: Files,
    },
    // {
    // title: "Playground",
    // url: "#",
    // icon: SquareTerminal,
    // isActive: true,
    // items: [
    //     {
    //         title: "History",
    //         url: "#",
    //     }
    // ],
    // },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="#">
                                <div className="flex aspect-square items-center justify-center rounded-full w-8 h-8">
                                    <img className="w-full h-full" src="/logo.png" alt="logo" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">Brainware University</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={navMain} />
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="text-red-500 hover:text-red-600">
                            <Link href="#">
                                <LogOut />
                                <span>Logout</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
