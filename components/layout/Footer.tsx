import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-navy text-white/80">
            <div className="content-container py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Brand / Info */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold text-white mb-3">
                            Samina Khan, MD
                        </h3>
                        <p className="text-sm leading-relaxed text-white/70 max-w-xs">
                            Board-certified in General and Geriatric Psychiatry.
                            Serving the Bay Area for over 20 years.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 list-none p-0 m-0">
                            <li>
                                <Link href="/about" className="text-sm text-white/70 no-underline hover:text-white transition-colors">
                                    About Dr. Khan
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm text-white/70 no-underline hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/conditions" className="text-sm text-white/70 no-underline hover:text-white transition-colors">
                                    Conditions Treated
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-white/70 no-underline hover:text-white transition-colors">
                                    Contact & Appointments
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-3">
                            Office
                        </h4>
                        <address className="not-italic text-sm text-white/70 space-y-1">
                            <p className="m-0">2500 Hospital Drive, Suite 3A</p>
                            <p className="m-0">Mountain View, CA 94040</p>
                            <p className="m-0 mt-3">
                                <a href="tel:408-568-8628" className="text-white no-underline hover:text-sage-light transition-colors font-semibold">
                                    (408) 568-8628
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/50 m-0">
                        &copy; {new Date().getFullYear()} Samina Khan, MD. All rights reserved.
                    </p>
                    <p className="text-xs text-white/40 m-0 max-w-md text-center sm:text-right">
                        This website is for informational purposes only and does not constitute medical advice.
                        Please consult your physician for personalized recommendations.
                    </p>
                </div>
            </div>
        </footer>
    );
}
