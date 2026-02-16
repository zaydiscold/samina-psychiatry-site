"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="bg-navy text-white relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] mix-blend-overlay pointer-events-none" />

            <div className="content-container py-16 md:py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                    {/* Brand - Span 4 */}
                    <div className="md:col-span-4">
                        <Link href="/" className="no-underline block mb-6">
                            <span className="font-heading text-2xl font-bold text-white tracking-tight">
                                Samina Khan, MD
                            </span>
                            <span className="block text-xs font-medium text-gold uppercase tracking-[0.25em] mt-1">
                                Psychiatry
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">
                            Providing distinguished psychiatric care to the Bay Area community for over two decades.
                        </p>
                        <div className="text-sm text-white/40">
                            &copy; {new Date().getFullYear()} All Rights Reserved.
                        </div>
                    </div>

                    {/* Links - Span 2 */}
                    <div className="md:col-span-2 md:col-start-6">
                        <h4 className="text-xs font-bold text-gold uppercase tracking-widest mb-6">
                            Explore
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { href: "/about", label: "Biography" },
                                { href: "/services", label: "Services" },
                                { href: "/conditions", label: "Specialties" },
                                { href: "/contact", label: "Inquire" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-sm no-underline transition-colors hover:text-white",
                                            pathname === link.href ? "text-white font-medium" : "text-white/60"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Office - Span 4 */}
                    <div className="md:col-span-4 md:col-start-9">
                        <h4 className="text-xs font-bold text-gold uppercase tracking-widest mb-6">
                            Office
                        </h4>
                        <address className="not-italic text-sm text-white/60 space-y-2 leading-relaxed">
                            <p>2500 Hospital Drive, Suite 3A</p>
                            <p>Mountain View, CA 94040</p>
                            <p className="pt-4">
                                <a href="mailto:office@saminakhanmd.com" className="text-white hover:text-gold transition-colors block mb-1">
                                    office@saminakhanmd.com
                                </a>
                                <a href="tel:408-568-8628" className="text-white hover:text-gold transition-colors">
                                    (408) 568-8628
                                </a>
                            </p>
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    );
}
