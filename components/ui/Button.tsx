import Link from "next/link";
import { cn } from "@/lib/cn";

interface ButtonProps {
    href?: string;
    variant?: "primary" | "outline";
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit";
    disabled?: boolean;
    onClick?: () => void;
}

export default function Button({
    href,
    variant = "primary",
    children,
    className,
    type = "button",
    disabled = false,
    onClick,
}: ButtonProps) {
    const classes = cn(
        "inline-block px-5 py-2.5 text-sm font-medium no-underline transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40 focus-visible:ring-offset-2",
        variant === "primary"
            ? "bg-navy text-white hover:bg-steel"
            : "border border-navy text-navy hover:bg-navy hover:text-white",
        disabled && "opacity-50 cursor-not-allowed",
        className
    );

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
