import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Biography | Samina Khan, MD",
    description:
        "Dr. Samina Khan's journey from medical school in Pakistan to fellowships at Stanford, Duke, and Emory. A dedicated career in psychiatric medicine.",
};

export default function AboutPage() {
    return (
        <div className="pt-20 md:pt-32 space-y-24 md:space-y-32">
            {/* Intro Narrative */}
            <section className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1">
                    <p className="text-xs font-bold text-gold uppercase tracking-[0.25em] mb-6">
                        The Physician's Path
                    </p>
                    <h1 className="font-heading text-4xl md:text-5xl text-navy leading-tight mb-8">
                        <span className="italic font-normal block mb-2">From Academic Rigor</span>
                        to Private Practice.
                    </h1>
                    <div className="space-y-6 text-charcoal/80 text-lg font-light leading-relaxed">
                        <p>
                            Dr. Samina Khan’s career is defined by a pursuit of excellence across the full
                            spectrum of psychiatric care. Her journey began with a medical degree from
                            Morehouse School of Medicine, followed by a series of rigorous fellowships at
                            three of the nation’s most prestigious institutions.
                        </p>
                        <p>
                            She refined her expertise in Geriatric Psychiatry at <strong className="text-navy font-medium">Stanford University</strong>,
                            mastered Transcranial Magnetic Stimulation (TMS) at <strong className="text-navy font-medium">Duke University</strong>,
                            and advanced her knowledge of Electroconvulsive Therapy (ECT) at <strong className="text-navy font-medium">Emory University</strong>.
                        </p>
                        <p>
                            Today, she brings this depth of academic knowledge to her private practice in
                            Mountain View, offering patients a level of care that is both clinically sophisticated
                            and deeply human.
                        </p>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <div className="relative w-full aspect-[4/5] bg-linen overflow-hidden shadow-xl">
                        {/* Abstract visual for About - perhaps a different crop or placeholder */}
                        <div className="absolute inset-0 bg-navy/5" />
                        <div className="absolute inset-0 flex items-center justify-center text-navy/10">
                            {/* Decorative Element */}
                            <svg className="w-32 h-32 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Vitae Styled */}
            <section className="bg-linen/30 py-20 px-6 border-y border-border/50">
                <div className="max-w-screen-lg mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl text-navy italic mb-4">Curriculum Vitae</h2>
                        <div className="w-12 h-px bg-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        {/* Education */}
                        <div>
                            <h3 className="text-xs font-bold text-slate uppercase tracking-widest mb-8">Education & Fellowships</h3>
                            <div className="space-y-10 border-l border-border pl-8 relative">
                                {[
                                    {
                                        title: "Geriatric Psychiatry Fellowship",
                                        inst: "Stanford University School of Medicine",
                                        loc: "Stanford, CA"
                                    },
                                    {
                                        title: "TMS Visiting Fellowship",
                                        inst: "Duke University Medical Center",
                                        loc: "Durham, NC"
                                    },
                                    {
                                        title: "ECT Visiting Fellowship",
                                        inst: "Emory University School of Medicine",
                                        loc: "Atlanta, GA"
                                    },
                                    {
                                        title: "Psychiatry Residency",
                                        inst: "Morehouse School of Medicine",
                                        loc: "Atlanta, GA"
                                    },
                                    {
                                        title: "Doctor of Medicine (M.D.)",
                                        inst: "Morehouse School of Medicine",
                                        loc: "Atlanta, GA"
                                    }
                                ].map((item) => (
                                    <div key={item.title} className="relative">
                                        <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full border border-gold bg-cream" />
                                        <h4 className="font-heading text-lg text-navy">{item.title}</h4>
                                        <p className="text-sm text-charcoal/70 mt-1">{item.inst}</p>
                                        <p className="text-xs text-muted mt-0.5">{item.loc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications & Experience */}
                        <div>
                            <h3 className="text-xs font-bold text-slate uppercase tracking-widest mb-8">Certifications & Roles</h3>
                            <div className="space-y-12">
                                <div>
                                    <h4 className="font-heading text-lg text-navy mb-4 border-b border-border/50 pb-2">Board Certifications</h4>
                                    <ul className="space-y-3 text-sm text-charcoal/80">
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1 text-xs">◆</span>
                                            <span><strong>General Psychiatry</strong><br />American Board of Psychiatry & Neurology</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1 text-xs">◆</span>
                                            <span><strong>Geriatric Psychiatry</strong><br />American Board of Psychiatry & Neurology</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-heading text-lg text-navy mb-4 border-b border-border/50 pb-2">Professional Roles</h4>
                                    <ul className="space-y-4 text-sm text-charcoal/80">
                                        <li>
                                            <strong className="block text-navy">Consultant Psychiatrist</strong>
                                            El Camino Hospital · 2016 – Present
                                        </li>
                                        <li>
                                            <strong className="block text-navy">Staff Psychiatrist</strong>
                                            County of Santa Clara · 2013 – 2026
                                        </li>
                                        <li>
                                            <strong className="block text-navy">Private Practice</strong>
                                            Bay Area · 2002 – Present
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legacy Footer Quote */}
            <section className="text-center pb-20 px-6">
                <p className="font-heading text-2xl text-navy/60 italic max-w-2xl mx-auto">
                    "Expertise is not just about what you know—it's about how you listen."
                </p>
            </section>
        </div>
    );
}
