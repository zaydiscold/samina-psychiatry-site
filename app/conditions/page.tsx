import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions Treated | Samina Khan, MD",
    description: "Psychiatric conditions treated including Depression, Anxiety, and Geriatric issues.",
};

export default function ConditionsPage() {
    const conditions = [
        "Major Depressive Disorder",
        "Generalized Anxiety Disorder",
        "Panic Disorder",
        "Bipolar Disorder",
        "Post-Traumatic Stress Disorder (PTSD)",
        "Obsessive-Compulsive Disorder (OCD)",
        "Adult ADHD",
        "Insomnia & Sleep Disorders",
        "Dementia & Cognitive Impairment",
        "Schizophrenia",
        "Schizoaffective Disorder",
        "Women's Mental Health Issues"
    ];

    return (
        <div className="pt-24 md:pt-32 pb-20 bg-cream">
            <div className="max-w-screen-lg mx-auto px-6">
                <h1 className="font-heading text-3xl md:text-4xl text-navy mb-8">Conditions Treated</h1>
                <p className="text-lg text-charcoal mb-12 max-w-2xl">
                    Dr. Khan provides evaluation and treatment for a wide range of psychiatric conditions found in adults and older adults.
                </p>

                <div className="bg-white border border-border p-8 md:p-12 rounded-sm shadow-sm">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                        {conditions.map((item) => (
                            <li key={item} className="flex items-center text-charcoal">
                                <span className="w-1.5 h-1.5 bg-navy/50 rounded-full mr-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
