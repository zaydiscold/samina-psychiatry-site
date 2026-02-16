import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Samina Khan, MD",
    description: "Comprehensive psychiatric evaluation, medication management, and specialized geriatric care.",
};

export default function ServicesPage() {
    return (
        <div className="pt-20 md:pt-32 pb-24 px-6">
            <div className="max-w-screen-xl mx-auto">
                <header className="mb-20 md:mb-32 max-w-3xl">
                    <p className="text-xs font-bold text-gold uppercase tracking-[0.25em] mb-6">
                        Clinical Offerings
                    </p>
                    <h1 className="font-heading text-4xl md:text-6xl text-navy leading-tight mb-8">
                        Precision Medicine,<br />
                        <span className="italic font-light">Personalized Care.</span>
                    </h1>
                    <p className="text-lg text-charcoal/70 font-light leading-relaxed max-w-2xl">
                        Our practice offers a curated range of psychiatric services designed to support
                        complex mental health needs. We prioritize thoroughness over volume, ensuring
                        every patient receives the time and attention their health deserves.
                    </p>
                </header>

                <div className="space-y-24">
                    {[
                        {
                            id: "01",
                            title: "Psychiatric Evaluation",
                            content: "The foundation of effective treatment. New patients undergo a comprehensive 90-minute assessment covering medical history, biological factors, and life circumstances. This depth allows us to formulate a precise diagnosis and a holistic treatment strategy.",
                            features: ["90-minute initial session", "Comprehensive history review", "Diagnostic clarity"]
                        },
                        {
                            id: "02",
                            title: "Medication Management",
                            content: "Psychotropic medications are powerful tools that require expert calibration. Dr. Khan adheres to a 'start low, go slow' philosophy, meticulously adjusting regimens to maximize efficacy while minimizing side effects.",
                            features: ["Evidence-based prescribing", "Side-effect mitigation", "Ongoing monitoring"]
                        },
                        {
                            id: "03",
                            title: "Geriatric Psychiatry",
                            content: "The aging brain requires specialized care. We offer expert management of late-life depression, anxiety, and the behavioral and psychological symptoms associated with dementia and cognitive decline.",
                            features: ["Dementia care", "Late-life depression", "Caregiver support"]
                        },
                        {
                            id: "04",
                            title: "Interventional Consultations",
                            content: "For treatment-resistant conditions, we provide expert consultation on advanced neuromodulation therapies, including Transcranial Magnetic Stimulation (TMS) and Electroconvulsive Therapy (ECT).",
                            features: ["TMS referrals", "ECT suitability review", "Treatment-resistant depression"]
                        }
                    ].map((service) => (
                        <article key={service.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-navy/10 pt-12">
                            <div className="md:col-span-2">
                                <span className="text-4xl font-heading text-navy/10 font-bold">{service.id}</span>
                            </div>
                            <div className="md:col-span-4">
                                <h2 className="text-2xl font-heading text-navy">{service.title}</h2>
                            </div>
                            <div className="md:col-span-6">
                                <p className="text-charcoal/80 leading-relaxed mb-8 text-lg font-light">
                                    {service.content}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-navy uppercase tracking-wider font-medium">
                                            <span className="w-1 h-1 bg-gold rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
