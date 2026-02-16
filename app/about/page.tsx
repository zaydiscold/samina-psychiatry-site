import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Dr. Khan | Samina Khan, MD",
    description: "Dr. Samina Khan's background, education, and psychiatric experience.",
};

export default function AboutPage() {
    return (
        <div className="pt-24 md:pt-32 pb-20 bg-cream">
            <div className="max-w-screen-lg mx-auto px-6">
                <h1 className="font-heading text-3xl md:text-4xl text-navy mb-8">About Dr. Khan</h1>

                <div className="prose prose-lg text-charcoal max-w-none mb-12">
                    <p>
                        Dr. Samina Khan is a Board Certified Psychiatrist specializing in General and Geriatric Psychiatry. She has been practicing medicine for over 20 years, with a focus on delivering compassionate, evidence-based care to patients in the Bay Area.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-heading text-xl text-navy mb-4 border-b border-border pb-2">Education</h2>
                        <ul className="space-y-4 text-sm text-charcoal">
                            <li>
                                <strong>Geriatric Psychiatry Fellowship</strong><br />
                                Stanford University School of Medicine
                            </li>
                            <li>
                                <strong>Visiting Fellowship (TMS)</strong><br />
                                Duke University Medical Center
                            </li>
                            <li>
                                <strong>Visiting Fellowship (ECT)</strong><br />
                                Emory University School of Medicine
                            </li>
                            <li>
                                <strong>Psychiatry Residency</strong><br />
                                Morehouse School of Medicine
                            </li>
                            <li>
                                <strong>Doctor of Medicine (M.D.)</strong><br />
                                Morehouse School of Medicine
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl text-navy mb-4 border-b border-border pb-2">Experience</h2>
                        <ul className="space-y-4 text-sm text-charcoal">
                            <li>
                                <strong>Consultant Psychiatrist</strong><br />
                                El Camino Hospital (2016 – Present)
                            </li>
                            <li>
                                <strong>Staff Psychiatrist</strong><br />
                                County of Santa Clara (2013 – 2026)
                            </li>
                            <li>
                                <strong>Private Practice</strong><br />
                                San Jose & Mountain View (2002 – Present)
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 bg-white/50 p-8 border border-border/50 rounded-sm">
                    <h2 className="font-heading text-xl text-navy mb-4">Board Certifications</h2>
                    <ul className="list-disc list-inside text-charcoal space-y-1">
                        <li>American Board of Psychiatry and Neurology - General Psychiatry</li>
                        <li>American Board of Psychiatry and Neurology - Geriatric Psychiatry</li>
                    </ul>
                </div>

                <div className="mt-20 pt-8 border-t border-border text-center text-sm text-muted">
                    <p>This website was designed and built with love by her son, <a href="https://zayd.wtf" className="text-navy hover:underline">Zayd Khan</a>.</p>
                </div>
            </div>
        </div>
    );
}
