import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Dr. Khan | Samina Khan, MD",
    description: "Board Certified Psychiatrist with over 20 years of experience in the Bay Area.",
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-[#F9F7F5]">
            <div className="max-w-screen-lg mx-auto px-6 md:px-12">
                <h1 className="font-heading text-4xl md:text-5xl text-[#0A2239] mb-10 border-b border-[#0A2239]/10 pb-6 inline-block">
                    About Dr. Samina Khan
                </h1>

                {/* Narrative Bio */}
                <div className="prose prose-lg text-[#333333] max-w-none mb-16 leading-relaxed">
                    <p className="mb-6">
                        Dr. Samina Khan is a Board Certified Psychiatrist with over two decades of experience serving the Bay Area community. Her practice is built on a foundation of rigorous medical training and a deep commitment to compassionate, personalized care.
                    </p>
                    <p className="mb-6">
                        Dr. Khan's journey in medicine began with a desire to understand the complex interplay between the mind and body. After completing her medical degree at <strong>Ayub Medical College</strong>, she pursued specialized training in the United States, completing her Psychiatry Residency at the <strong>Morehouse School of Medicine</strong> in Atlanta.
                    </p>
                    <p className="mb-6">
                        Recognizing the unique needs of older adults, she went on to complete a prestigious <strong>Geriatric Psychiatry Fellowship at Stanford University</strong>. Her dedication to cutting-edge treatment modalities led her to further visiting fellowships in <strong>TMS (Transcranial Magnetic Stimulation)</strong> at Duke University and <strong>ECT (Electroconvulsive Therapy)</strong> at Emory University.
                    </p>
                    <p>
                        Since 2002, Dr. Khan has worked across diverse settings, from private practice in Mountain View and San Jose to serving as a Consultant Psychiatrist at <strong>El Camino Hospital</strong> and a Staff Psychiatrist for the <strong>County of Santa Clara</strong>. This breadth of experience—spanning hospital consults, correctional facilities, and private evaluations—gives her a unique perspective on mental health across the lifespan.
                    </p>
                </div>

                {/* Philosophy Section */}
                <div className="bg-white p-10 border border-[#D1D1D1] rounded-sm shadow-sm mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                    <h2 className="font-heading text-3xl text-[#0A2239] mb-6 relative z-10">Philosophy of Care</h2>
                    <p className="text-lg text-[#333333] leading-relaxed relative z-10">
                        "I believe that effective psychiatric care requires listening—truly listening—to the patient's story. It is not just about managing symptoms, but about restoring quality of life. My approach combines evidence-based medication management with a holistic understanding of each patient's physical health, environment, and personal goals."
                    </p>
                </div>

                {/* CV / Data Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="font-heading text-2xl text-[#0A2239] mb-6 border-b border-[#0A2239]/20 pb-2">Education & Training</h3>
                        <ul className="space-y-6 text-sm md:text-base text-[#1A1A1A]">
                            <li className="group">
                                <strong className="block text-[#0A2239] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Stanford University</strong>
                                Geriatric Psychiatry Fellowship
                            </li>
                            <li className="group">
                                <strong className="block text-[#0A2239] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Duke University</strong>
                                Visiting Fellowship (TMS)
                            </li>
                            <li className="group">
                                <strong className="block text-[#0A2239] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Emory University</strong>
                                Visiting Fellowship (ECT)
                            </li>
                            <li className="group">
                                <strong className="block text-[#0A2239] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Morehouse School of Medicine</strong>
                                Psychiatry Residency & M.D.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading text-2xl text-[#0A2239] mb-6 border-b border-[#0A2239]/20 pb-2">Clinical Experience</h3>
                        <ul className="space-y-6 text-sm md:text-base text-[#1A1A1A]">
                            <li className="group">
                                <strong className="block text-[#0A2239] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">El Camino Hospital</strong>
                                Consultant Psychiatrist (2016 – Present)
                            </li>
                            <li className="group">
                                <strong className="block text-[#0A2239] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">County of Santa Clara</strong>
                                Staff Psychiatrist (2013 – 2026)
                            </li>
                            <li className="group">
                                <strong className="block text-[#0A2239] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Private Practice</strong>
                                Mountain View & San Jose (2002 – Present)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
