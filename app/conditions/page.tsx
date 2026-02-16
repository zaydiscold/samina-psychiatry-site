import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Specialties | Samina Khan, MD",
    description: "Specializing in Depression, Anxiety, Geriatric Mental Health, and complex mood disorders.",
};

export default function ConditionsPage() {
    return (
        <div className="pt-20 md:pt-32 pb-24 px-6 md:px-12 bg-cream">
            <div className="max-w-screen-xl mx-auto">
                <header className="text-center mb-24">
                    <p className="text-xs font-bold text-gold uppercase tracking-[0.25em] mb-6">
                        Areas of Expertise
                    </p>
                    <h1 className="font-heading text-4xl md:text-5xl text-navy mb-8">
                        Conditions Treated
                    </h1>
                    <div className="w-px h-16 bg-gradient-to-b from-navy/50 to-transparent mx-auto" />
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 border border-border/50 shadow-sm">
                    {[
                        {
                            title: "Depressive Disorders",
                            desc: "Major Depression, Dysthymia, and Treatment-Resistant Depression. Restoring mood stability and vitality."
                        },
                        {
                            title: "Anxiety Disorders",
                            desc: "Generalized Anxiety, Panic Disorder, and Social Anxiety. Reducing physiological arousal and worry."
                        },
                        {
                            title: "Geriatric Psychiatry",
                            desc: "Memory disorders, Alzheimer's behavioral complications, and age-related emotional changes."
                        },
                        {
                            title: "Bipolar Spectrum",
                            desc: "Bipolar I and II. Carefully managing mood cycles to prevent mania and alleviate depression."
                        },
                        {
                            title: "Trauma & PTSD",
                            desc: "Processing traumatic experiences and reducing the intrusion of past events on present life."
                        },
                        {
                            title: "Adult ADHD",
                            desc: "Evaluations for focus and attention deficits in adulthood, differentiating from anxiety or sleep issues."
                        },
                        {
                            title: "Insomnia & Sleep",
                            desc: "Addressing circadian rhythm disruptions and sleep architecture to improve mental health."
                        },
                        {
                            title: "Psychotic Disorders",
                            desc: "Compassionate long-term management of Schizophrenia and Schizoaffective Disorder."
                        },
                        {
                            title: "Women's Mental Health",
                            desc: "Perimenopausal mood changes and psychiatric issues related to reproductive health."
                        }
                    ].map((item) => (
                        <div key={item.title} className="bg-cream p-10 hover:bg-white transition-colors duration-500 group">
                            <h3 className="font-heading text-xl text-navy mb-4 group-hover:text-slate transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-charcoal/70 font-light leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="font-heading text-2xl text-navy italic mb-6">
                        "Recovery is a journey we take together."
                    </p>
                    <a href="/contact" className="inline-block border-b border-gold text-navy text-sm font-bold uppercase tracking-widest hover:text-gold transition-colors pb-1">
                        Schedule a Consultation
                    </a>
                </div>
            </div>
        </div>
    );
}
