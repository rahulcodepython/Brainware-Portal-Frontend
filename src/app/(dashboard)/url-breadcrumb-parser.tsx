"use client";
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const UrlBreadcrumbParser = () => {
    const pathname = usePathname();
    const [breadcrumbLists, setBreadcrumbLists] = React.useState<{ name: string, url: string }[] | null>(null);

    React.useEffect(() => {
        setBreadcrumbLists([
            {
                name: "Dashboard",
                url: "/student/dashboard",
            },
        ]);
    }, [pathname]);

    return (
        breadcrumbLists && (
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbLists.map((item, index) => (
                        <React.Fragment key={item.url}>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href={item.url}>{item.name}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {breadcrumbLists.length !== index + 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        )
    );
};

export default UrlBreadcrumbParser;
