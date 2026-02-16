import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions Treated",
    description: "Specialized treatment for Depression, Anxiety, Bipolar Disorder, and Geriatric Mental Health conditions.",
};

const conditions = [
    {
        name: "Depression & Mood Disorders",
        description: "Including Major Depressive Disorder, Dysthymia, and Bipolar Disorder. We focus on stabilizing mood and restoring distinct joy and function to daily life.",
    },
    {
        name: "Anxiety Disorders",
        description: "Generalized Anxiety, Panic Disorder, and Social Anxiety. Treatment aims to reduce excessive worry and physical symptoms of stress.",
    },
    {
        name: "Geriatric Mental Health",
        description: "Memory loss, confusion, and emotional changes related to aging or dementia. Dr. Khan works to improve quality of life for seniors and their caregivers.",
    },
    {
        name: "Trauma & PTSD",
        description: "Support for those recovering from traumatic events, focusing on reducing hyperarousal and intrusive symptoms.",
    },
    {
        name: "Psychotic Disorders",
        description: "Compassionate, long-term management of schizophrenia and schizoaffective disorder, with a focus on symptom stability.",
    },
    {
        name: "Focus & Attention (Adult ADHD)",
        description: "Evaluation of concentration difficulties in adults, distinguishing ADHD from other causes like anxiety or sleep issues.",
    },
];

export default function ConditionsPage() {
    return (
        <div className="space-y-16">
            <section className="text-center max-w-2xl mx-auto">
                <p className="text-sm font-medium text-sage uppercase tracking-wider mb-2">
                    Specialties
                </p>
                <h1 className="text-3xl md:text-4xl font-heading font-semibold text-navy mb-6">
                    Conditions Treated
                </h1>
                <p className="text-lg text-graphite leading-relaxed">
                    Dr. Khan has extensive experience treating the full spectrum of adult psychiatric conditions.
                    She has a particular interest in complex mood disorders and the mental health challenges of aging.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conditions.map((item) => (
                    <div key={item.name} className="bg-white p-6 border border-border hover:border-sage transition-colors">
                        <h3 className="font-heading text-lg font-semibold text-navy mb-3">
                            {item.name}
                        </h3>
                        <p className="text-sm text-graphite leading-relaxed m-0">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="bg-linen p-8 text-center border-t border-b border-stone">
                <p className="text-navy font-heading text-xl mb-4">
                    Ready to discuss your needs?
                </p>
                <a href="/contact" className="inline-block border-b-2 border-navy text-navy font-semibold hover:text-navy-light hover:border-navy-light transition-colors pb-1">
                    Contact the office to schedule a consultation
                </a>
            </div>
        </div>
    );
}
