import React, { HTMLAttributes } from 'react'
import { cn } from "@/lib/utils"

const Main = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLElement> & {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <main className={cn('h-screen flex items-center justify-center w-full bg-cover bg-center', className)} style={{ backgroundImage: "url('/Brainware-university.jpg')" }} {...props}>
            {children}
        </main>
    )
}

export default Main