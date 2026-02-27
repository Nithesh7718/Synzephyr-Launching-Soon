"use client";

import dynamic from "next/dynamic";

const StoreLocator = dynamic(
    () => import("./store-locator").then((mod) => mod.StoreLocator),
    {
        ssr: false,
        loading: () => <div className="h-[500px] w-full bg-muted animate-pulse rounded-xl" />,
    }
);

export function StoreLocatorWrapper() {
    return <StoreLocator />;
}
