import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Dr. Khan | Samina Khan, MD",
    description: "Board Certified Psychiatrist with 20+ years of experience.",
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-[#F9F7F5]">
            <div className="max-w-screen-lg mx-auto px-6 md:px-12">
                <h1 className="font-heading text-4xl md:text-5xl text-[#0A2239] mb-12 border-b border-[#0A2239]/10 pb-6 inline-block">
                    About Dr. Khan
                </h1>

                {/* Direct, Factual Bio - No Fluff */}
                <div className="prose prose-lg text-[#333333] max-w-none mb-20 leading-relaxed font-light">
                    <p className="mb-6">
                        Dr. Samina Khan is a Board Certified Psychiatrist with over 20 years of experience in the Bay Area. She specializes in General and Geriatric Psychiatry, treating adults of all ages with a focus on complex medical and psychiatric comorbidity.
                    </p>
                    <p className="mb-6">
                        She completed her medical degree at <strong>Ayub Medical College</strong> and her Psychiatry Residency at the <strong>Morehouse School of Medicine</strong> in Atlanta. She subsequently completed a <strong>Geriatric Psychiatry Fellowship at Stanford University</strong>.
                    </p>
                    <p>
                        In addition to her private practice, Dr. Khan serves as a Consultant Psychiatrist at <strong>El Camino Hospital</strong> and has worked as a Staff Psychiatrist for the <strong>County of Santa Clara</strong> since 2013, providing care in correctional and public health settings. She has also completed visiting fellowships in <strong>TMS</strong> (Duke University) and <strong>ECT</strong> (Emory University).
                    </p>
                </div>

                {/* CV Section - Clean & Structured */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="font-heading text-2xl text-[#0A2239] mb-6 border-b border-[#0A2239]/20 pb-2">Education & Fellowships</h3>
                        <ul className="space-y-8 text-base text-[#1A1A1A]">
                            <li>
                                <div className="font-bold text-[#0A2239]">Stanford University</div>
                                <div className="text-sm text-[#555555]">Geriatric Psychiatry Fellowship</div>
                            </li>
                            <li>
                                <div className="font-bold text-[#0A2239]">Duke University</div>
                                <div className="text-sm text-[#555555]">Visiting Fellowship (TMS)</div>
                            </li>
                            <li>
                                <div className="font-bold text-[#0A2239]">Emory University</div>
                                <div className="text-sm text-[#555555]">Visiting Fellowship (ECT)</div>
                            </li>
                            <li>
                                <div className="font-bold text-[#0A2239]">Morehouse School of Medicine</div>
                                <div className="text-sm text-[#555555]">Psychiatry Residency & M.D.</div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading text-2xl text-[#0A2239] mb-6 border-b border-[#0A2239]/20 pb-2">Professional Experience</h3>
                        <ul className="space-y-8 text-base text-[#1A1A1A]">
                            <li>
                                <div className="font-bold text-[#0A2239]">El Camino Hospital</div>
                                <div className="text-sm text-[#555555]">Consultant Psychiatrist (2016 – Present)</div>
                            </li>
                            <li>
                                <div className="font-bold text-[#0A2239]">County of Santa Clara</div>
                                <div className="text-sm text-[#555555]">Staff Psychiatrist (2013 – 2026)</div>
                            </li>
                            <li>
                                <div className="font-bold text-[#0A2239]">Private Practice</div>
                                <div className="text-sm text-[#555555]">Mountain View & San Jose (2002 – Present)</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
