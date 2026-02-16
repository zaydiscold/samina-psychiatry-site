import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-cream border-t border-border mt-20">
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <h3 className="font-heading text-xl text-navy mb-4">Samina Khan, MD</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Board Certified Psychiatrist providing compassionate, evidence-based care for adults and older adults in the Bay Area.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-4">Practice</h4>
                        <ul className="space-y-2 text-sm text-charcoal">
                            <li><Link href="/services" className="hover:text-navy hover:underline">Services</Link></li>
                            <li><Link href="/conditions" className="hover:text-navy hover:underline">Conditions Treated</Link></li>
                            <li><Link href="/about" className="hover:text-navy hover:underline">About Dr. Khan</Link></li>
                            <li><Link href="/contact" className="hover:text-navy hover:underline">Contact Office</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Brief */}
                    <div>
                        <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-charcoal">
                            <li>2500 Hospital Drive, Suite 3A</li>
                            <li>Mountain View, CA 94040</li>
                            <li>(408) 568-8628</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                    <p>© {new Date().getFullYear()} Samina Khan, MD. All rights reserved.</p>
                    <p>
                        Built with love by <a href="https://zayd.wtf" className="text-navy hover:underline">Zayd Khan</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
