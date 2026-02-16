"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/conditions", label: "Conditions" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header className="bg-white border-b border-border sticky top-0 z-50">
            <div className="content-container flex items-center justify-between py-4">
                {/* Brand */}
                <Link href="/" className="no-underline group">
                    <span className="font-heading text-xl font-semibold text-navy group-hover:text-navy-light transition-colors">
                        Samina Khan, MD
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Main">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium no-underline transition-colors",
                                pathname === link.href
                                    ? "text-navy"
                                    : "text-graphite hover:text-navy"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="tel:408-568-8628"
                        className="text-sm font-semibold text-navy no-underline bg-linen px-4 py-2 hover:bg-stone transition-colors"
                    >
                        (408) 568-8628
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 -mr-2 text-navy"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden border-t border-border bg-white" aria-label="Mobile">
                    <div className="content-container py-4 space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "block text-base no-underline py-2 border-b border-cream",
                                    pathname === link.href
                                        ? "text-navy font-semibold"
                                        : "text-graphite"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="tel:408-568-8628"
                            className="block text-base font-semibold text-navy no-underline pt-2"
                        >
                            Call (408) 568-8628
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}
