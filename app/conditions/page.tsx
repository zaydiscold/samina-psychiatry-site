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
        <div className="pt-32 pb-20 bg-[#F9F7F5]">
            <div className="max-w-screen-lg mx-auto px-6">
                <h1 className="font-heading text-4xl md:text-5xl text-[#0A2239] mb-12">Conditions Treated</h1>
                <p className="text-xl text-[#333333] mb-16 max-w-2xl leading-relaxed">
                    Dr. Khan provides evaluation and treatment for a wide range of psychiatric conditions found in adults and older adults.
                </p>

                {/* Removed Blur Blob for Performance */}
                <div className="bg-white border border-[#D1D1D1] p-8 md:p-16 rounded-sm shadow-sm relative overflow-hidden">

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 relative z-10">
                        {conditions.map((item) => (
                            <li key={item} className="group flex items-center text-[#1A1A1A] cursor-default transition-colors hover:text-[#0A2239]">
                                {/* Bullet */}
                                <span className="w-1.5 h-1.5 bg-[#0A2239]/40 rounded-full mr-5 group-hover:bg-[#D4AF37] group-hover:scale-150 transition-all duration-300" />

                                {/* Text with Rolling Underline */}
                                <span className="relative text-lg font-medium">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-500 ease-out" />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
