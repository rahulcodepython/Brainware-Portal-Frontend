"use client"
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const UrlBreadcrumbParser = () => {
    const [breadcrumbLists, setBreadcrumbLists] = React.useState<{ name: string, url: string }[] | null>(null)
    const pathname = usePathname()

    React.useEffect(() => {
        const segments = pathname.split('/').filter(Boolean);
        const breadcrumbData = segments.map((segment, index) => {
            const url = '/' + segments.slice(0, index + 1).join('/');
            const name = segment.charAt(0).toUpperCase() + segment.slice(1);
            return { name, url };
        });
        setBreadcrumbLists(breadcrumbData.slice(1));
    }, [pathname])

    return (
        breadcrumbLists && <Breadcrumb>
            <BreadcrumbList>
                {
                    breadcrumbLists.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <BreadcrumbItem className="">
                                    <BreadcrumbLink href={item.url} asChild>
                                        <Link href={item.url}>
                                            {item.name}
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                {breadcrumbLists.length !== index + 1 && <BreadcrumbSeparator className="" />}
                            </React.Fragment>
                        )
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default UrlBreadcrumbParser