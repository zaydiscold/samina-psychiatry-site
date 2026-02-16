import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    alternate?: boolean;
}

export default function SectionWrapper({
    children,
    className,
    id,
    alternate = false,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn(
                "px-6 py-14 md:py-20",
                alternate ? "bg-stone" : "bg-white",
                className
            )}
        >
            <div className="mx-auto max-w-4xl">{children}</div>
        </section>
    );
}
