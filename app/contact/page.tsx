import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inquire | Samina Khan, MD",
    description: "Contact the office of Dr. Samina Khan in Mountain View, CA.",
};

export default function ContactPage() {
    return (
        <div className="pt-20 md:pt-32 min-h-screen bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
                {/* Left: Info */}
                <div className="bg-navy text-white px-8 md:px-20 py-20 flex flex-col justify-center relative overflow-hidden">
                    {/* Texture & Decor */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] mix-blend-overlay pointer-events-none" />
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                    </div>

                    <div className="relative z-10">
                        <p className="text-xs font-bold text-gold uppercase tracking-[0.25em] mb-8">
                            The Office
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl mb-12">
                            Begin the conversation.
                        </h1>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Location</h3>
                                <address className="not-italic text-lg md:text-xl font-light leading-relaxed text-white/90">
                                    2500 Hospital Drive, Suite 3A<br />
                                    Mountain View, California 94040
                                </address>
                                <p className="text-sm text-gold mt-4 italic">Adjacent to El Camino Hospital</p>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Contact</h3>
                                <p className="text-xl md:text-2xl font-heading text-white mb-2">(408) 568-8628</p>
                                <a href="mailto:office@saminakhanmd.com" className="text-white/70 hover:text-white transition-colors border-b border-white/20 pb-0.5">
                                    office@saminakhanmd.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Practice Policy</h3>
                                <p className="text-sm text-white/70 leading-relaxed max-w-md">
                                    Dr. Khan manages a private, out-of-network practice to ensure the highest standard of personalized care.
                                    Receipts are provided for insurance reimbursement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Map / Visual */}
                <div className="bg-linen relative min-h-[400px] lg:min-h-auto flex items-center justify-center p-12">
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto bg-cream rounded-full flex items-center justify-center mb-6 shadow-sm border border-gold/20">
                            <span className="font-heading text-4xl text-navy italic">Sk</span>
                        </div>
                        <h2 className="font-heading text-2xl text-navy mb-2">Samina Khan, MD</h2>
                        <p className="text-sm text-charcoal/60 uppercase tracking-widest">Psychiatry</p>

                        <div className="mt-12 p-8 border border-navy/10 max-w-sm mx-auto bg-white/50 backdrop-blur-sm">
                            <p className="text-sm text-navy/80 leading-relaxed">
                                "We are currently accepting new patients for evaluation and treatment."
                            </p>
                            <a href="tel:408-568-8628" className="block mt-6 bg-navy text-white text-xs font-bold uppercase tracking-widest py-4 hover:bg-navy-light transition-colors">
                                Call to Schedule
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
