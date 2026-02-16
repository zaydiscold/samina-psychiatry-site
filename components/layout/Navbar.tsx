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
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        // Check initial scroll
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled ? "bg-cream/95 backdrop-blur-md border-b border-border py-3 shadow-sm" : "bg-cream/50 py-6"
            )}
        >
            <div className="content-container flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="no-underline group">
                    <div className="flex flex-col">
                        <span className="font-heading text-xl md:text-2xl font-bold text-navy tracking-tight group-hover:text-gold transition-colors duration-300">
                            Samina Khan, MD
                        </span>
                        <span className="text-[10px] md:text-xs font-medium text-gold uppercase tracking-[0.2em] md:tracking-[0.25em]">
                            Board Certified Psychiatrist
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav - Editorial Style */}
                <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "group relative text-sm font-medium transition-colors duration-300 no-underline py-1",
                                pathname === link.href
                                    ? "text-navy"
                                    : "text-charcoal hover:text-navy"
                            )}
                        >
                            {link.label}
                            <span className={cn(
                                "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300",
                                pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                            )} />
                        </Link>
                    ))}
                    <a
                        href="tel:408-568-8628"
                        className="text-xs font-bold text-navy no-underline border border-navy px-5 py-2.5 hover:bg-navy hover:text-white transition-all duration-300 tracking-wider uppercase rounded-sm"
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu - Full Screen Elegant Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-cream z-40 md:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out",
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
                )}
            >
                <nav className="flex flex-col items-center space-y-6 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "font-heading text-3xl font-medium no-underline transition-colors",
                                pathname === link.href
                                    ? "text-navy italic"
                                    : "text-charcoal hover:text-navy hover:italic"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="w-12 h-px bg-gold my-4" />
                    <a
                        href="tel:408-568-8628"
                        className="font-body text-xl font-semibold text-navy uppercase tracking-widest no-underline border-b border-navy pb-1"
                    >
                        Call (408) 568-8628
                    </a>
                </nav>
            </div>
        </header>
    );
}
