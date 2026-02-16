"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Bio & Credentials" },
    { href: "/services", label: "Clinical Services" },
    { href: "/conditions", label: "Specialties" },
    { href: "/contact", label: "Patient Information" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="sidebar hidden lg:block py-12 pr-8 border-r border-silver h-[calc(100vh-4rem)]">
            <div className="flex flex-col h-full justify-between">
                <div>
                    {/* Header */}
                    <div className="mb-10">
                        <Link href="/" className="block group">
                            <h1 className="font-heading text-2xl font-bold text-navy leading-tight group-hover:text-blue-hover transition-colors mb-2">
                                Samina Khan, MD
                            </h1>
                        </Link>
                        <p className="text-sm text-graphite font-medium">
                            Board-Certified Psychiatrist
                        </p>
                        <p className="text-xs text-slate mt-1">
                            General & Geriatric Psychiatry
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav aria-label="Main navigation">
                        <ul className="space-y-3 list-none pl-0 ml-0">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.href} className="m-0">
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "block text-sm py-1 transition-colors border-l-2 pl-3",
                                                isActive
                                                    ? "border-navy text-navy font-semibold"
                                                    : "border-transparent text-graphite hover:text-navy hover:border-silver"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                {/* Contact / Footer info */}
                <div className="text-xs text-slate space-y-4">
                    <div>
                        <p className="font-semibold text-charcoal mb-1">Office</p>
                        <p>2500 Hospital Drive, Suite 3A</p>
                        <p>Mountain View, CA 94040</p>
                    </div>
                    <div>
                        <p className="font-semibold text-charcoal mb-1">Contact</p>
                        <p>
                            <a href="tel:408-568-8628" className="hover:underline">
                                (408) 568-8628
                            </a>
                        </p>
                    </div>
                    <div className="pt-4 border-t border-silver">
                        <p>© {new Date().getFullYear()} Samina Khan, MD</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
