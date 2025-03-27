import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import "./globals.css";
import DebugTools from "@/components/debug-tools";

export const metadata: Metadata = {
    title: "Brainware University",
    description: "This is a demo student portal for Brainware University",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased scroll-smooth`}>
                {/* <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                > */}
                {children}
                <DebugTools />
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
