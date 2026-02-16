import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Dr. Khan",
    description:
        "Learn about Dr. Samina Khan's education, fellowships at Stanford, Duke, and Emory, and over 20 years of experience in psychiatry.",
};

export default function AboutPage() {
    return (
        <div className="space-y-14">
            {/* Header */}
            <section>
                <p className="text-sm font-medium text-sage uppercase tracking-wider mb-2">
                    About
                </p>
                <h1 className="text-3xl font-heading font-semibold text-navy mb-6">
                    About Dr. Khan
                </h1>
                <div className="space-y-4 text-graphite leading-relaxed">
                    <p>
                        Dr. Samina Khan is a board-certified psychiatrist with dual certification in General
                        and Geriatric Psychiatry from the American Board of Psychiatry and Neurology. She has
                        been practicing in the Bay Area for more than two decades, bringing quiet expertise
                        and genuine care to every patient she sees.
                    </p>
                    <p>
                        She received her medical degree from Morehouse School of Medicine in Atlanta, Georgia,
                        and went on to complete advanced fellowship training at three of the country's leading
                        academic medical centers: Geriatric Psychiatry at Stanford University, Transcranial
                        Magnetic Stimulation (TMS) at Duke University, and Electroconvulsive Therapy (ECT)
                        at Emory University.
                    </p>
                    <p>
                        Over the course of her career, Dr. Khan has worked across academic hospitals, community
                        clinics, the County of Santa Clara correctional system, and private practice. This range
                        of experience has given her a broad perspective on psychiatric illness and a practical,
                        patient-centered approach to treatment.
                    </p>
                    <p>
                        She currently maintains a private practice in Mountain View and serves as a Consultant
                        Psychiatrist at El Camino Hospital.
                    </p>
                </div>
            </section>

            {/* Education */}
            <section>
                <h2 className="font-heading text-navy text-xl mb-6">Education & Training</h2>
                <div className="space-y-5">
                    {[
                        {
                            title: "Geriatric Psychiatry Fellowship",
                            institution: "Stanford University School of Medicine",
                        },
                        {
                            title: "TMS Fellowship",
                            institution: "Duke University Medical Center",
                        },
                        {
                            title: "ECT Fellowship",
                            institution: "Emory University School of Medicine",
                        },
                        {
                            title: "Psychiatry Residency",
                            institution: "Morehouse School of Medicine, Atlanta, GA",
                        },
                        {
                            title: "Doctor of Medicine (MD)",
                            institution: "Morehouse School of Medicine, Atlanta, GA",
                        },
                        {
                            title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
                            institution: "Ayub Medical College, University of Peshawar",
                        },
                    ].map((item) => (
                        <div key={item.title} className="border-l-2 border-sage-light pl-5">
                            <p className="font-semibold text-navy m-0">{item.title}</p>
                            <p className="text-sm text-graphite m-0">{item.institution}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certifications */}
            <section className="bg-white p-6 md:p-8 border border-border">
                <h2 className="font-heading text-navy text-xl mt-0 mb-5">Board Certifications & Licensure</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 bg-sage rounded-full shrink-0" />
                        <div>
                            <p className="font-medium text-charcoal m-0">General Psychiatry</p>
                            <p className="text-sm text-graphite m-0">American Board of Psychiatry and Neurology</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 bg-sage rounded-full shrink-0" />
                        <div>
                            <p className="font-medium text-charcoal m-0">Geriatric Psychiatry</p>
                            <p className="text-sm text-graphite m-0">American Board of Psychiatry and Neurology</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 bg-sage rounded-full shrink-0" />
                        <div>
                            <p className="font-medium text-charcoal m-0">Medical License</p>
                            <p className="text-sm text-graphite m-0">State of California</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 bg-sage rounded-full shrink-0" />
                        <div>
                            <p className="font-medium text-charcoal m-0">DEA Licensed</p>
                            <p className="text-sm text-graphite m-0">Controlled Substance Prescribing</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Experience */}
            <section>
                <h2 className="font-heading text-navy text-xl mb-6">Professional Experience</h2>
                <div className="space-y-6">
                    {[
                        {
                            role: "Consultant Psychiatrist",
                            org: "El Camino Hospital, Mountain View, CA",
                            period: "2016 to Present",
                        },
                        {
                            role: "Staff Psychiatrist",
                            org: "County of Santa Clara, CA",
                            period: "2013 to 2026",
                        },
                        {
                            role: "Private Practice",
                            org: "Bay Area, CA",
                            period: "2002 to Present",
                        },
                    ].map((item) => (
                        <div key={item.role + item.org} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                            <div className="flex-1">
                                <p className="font-semibold text-navy m-0">{item.role}</p>
                                <p className="text-sm text-graphite m-0">{item.org}</p>
                            </div>
                            <p className="text-sm text-muted m-0 shrink-0">{item.period}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
