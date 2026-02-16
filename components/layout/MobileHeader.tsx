"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Bio & Credentials" },
    { href: "/services", label: "Clinical Services" },
    { href: "/conditions", label: "Specialties" },
    { href: "/contact", label: "Patient Information" },
];

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header className="lg:hidden border-b border-silver sticky top-0 bg-white z-50">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Brand */}
                <div>
                    <Link href="/" className="block">
                        <span className="font-heading text-lg font-bold text-navy">
                            Samina Khan, MD
                        </span>
                    </Link>
                </div>

                {/* Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 -mr-2 text-navy focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <nav className="border-t border-silver bg-white absolute w-full shadow-lg h-screen pb-20 overflow-y-auto">
                    <ul className="flex flex-col p-6 space-y-4 list-none m-0">
                        {navLinks.map((link) => (
                            <li key={link.href} className="m-0 border-b border-silver/50 pb-3 last:border-0">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "block text-lg font-medium",
                                        pathname === link.href ? "text-navy" : "text-graphite"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4 mt-2">
                            <a
                                href="tel:408-568-8628"
                                className="block text-navy font-semibold text-lg"
                            >
                                Call (408) 568-8628
                            </a>
                            <p className="text-sm text-slate mt-1">
                                2500 Hospital Drive, Suite 3A
                                <br />
                                Mountain View, CA 94040
                            </p>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
