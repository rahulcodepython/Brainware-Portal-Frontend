"use client"
import * as React from "react"
import {
    Calculator,
    File,
    Files,
    IndianRupee,
    LayoutDashboard,
    LogOut,
    Table,
    User,
    CalendarCheck
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
import { student_url_header } from "@/constraints"

const navMain = [
    {
        title: "Dashboard",
        url: `${student_url_header}/dashboard`,
        icon: LayoutDashboard,
        isActive: true,
    },
    {
        title: "Profile",
        url: `${student_url_header}/profile`,
        icon: User,
    },
    {
        title: "Attendance",
        url: `${student_url_header}/attendance`,
        icon: CalendarCheck,
    },
    {
        title: "Marks",
        url: `${student_url_header}/marks`,
        icon: Calculator,
    },
    {
        title: "Lecture Plan",
        url: `${student_url_header}/lecture_plan`,
        icon: Table,
    },
    {
        title: "Academic Resources",
        url: `${student_url_header}/academic_resource`,
        icon: File,
    },
    {
        title: "Money Receipt",
        url: "#",
        icon: IndianRupee,
    },
    {
        title: "Admission Documents",
        url: `${student_url_header}/admission_documents`,
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
