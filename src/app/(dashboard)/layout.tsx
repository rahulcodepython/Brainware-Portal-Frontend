import { AppSidebar } from "@/components/app-sidebar"

import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import UrlBreadcrumbParser from "./breadcrumb"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="cursor-pointer size-9" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <UrlBreadcrumbParser />
                    </div>
                </header>
                <main className="p-6 pt-0 grid grid-cols-1">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
