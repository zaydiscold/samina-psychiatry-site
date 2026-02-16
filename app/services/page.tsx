import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Clinical Services",
    description: "Comprehensive psychiatric care including evaluation, medication management, TMS, and ECT consultation.",
};

export default function ServicesPage() {
    return (
        <div className="space-y-16">
            {/* Header */}
            <section className="text-center max-w-2xl mx-auto">
                <p className="text-sm font-medium text-sage uppercase tracking-wider mb-2">
                    Our Care
                </p>
                <h1 className="text-3xl md:text-4xl font-heading font-semibold text-navy mb-6">
                    Clinical Services
                </h1>
                <p className="text-lg text-graphite leading-relaxed">
                    Dr. Khan provides a full range of psychiatric services for adults and older adults.
                    Her approach combines evidence-based medical treatment with a compassionate understanding
                    of each patient's unique life story.
                </p>
            </section>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Service 1 */}
                <section className="space-y-4">
                    <h3 className="text-xl font-heading font-semibold text-navy border-b border-sage-light pb-2 inline-block">
                        Psychiatric Evaluation
                    </h3>
                    <p className="text-charcoal leading-relaxed">
                        Every treatment journey begins with a comprehensive consultation. Dr. Khan dedicates
                        this time to understanding your symptoms, medical history, and personal goals.
                        Together, you will discuss a diagnosis and develop a personalized treatment plan
                        that may include medication, lifestyle changes, or referrals for psychotherapy.
                    </p>
                </section>

                {/* Service 2 */}
                <section className="space-y-4">
                    <h3 className="text-xl font-heading font-semibold text-navy border-b border-sage-light pb-2 inline-block">
                        Medication Management
                    </h3>
                    <p className="text-charcoal leading-relaxed">
                        For many conditions, medication can be a vital tool for recovery. Dr. Khan utilizes
                        a careful, conservative approach to prescribing. She prioritizes safety and tolerability,
                        working closely with you to find the lowest effective dose to relieve symptoms while
                        minimizing side effects.
                    </p>
                </section>

                {/* Service 3 */}
                <section className="space-y-4">
                    <h3 className="text-xl font-heading font-semibold text-navy border-b border-sage-light pb-2 inline-block">
                        Geriatric Psychiatry
                    </h3>
                    <p className="text-charcoal leading-relaxed">
                        As a fellowship-trained geriatric psychiatrist, Dr. Khan offers specialized expertise
                        in the intersection of mental health and aging. She treats late-life depression,
                        anxiety, and the behavioral symptoms associated with memory loss, providing support
                        for both patients and their families.
                    </p>
                </section>

                {/* Service 4 */}
                <section className="space-y-4">
                    <h3 className="text-xl font-heading font-semibold text-navy border-b border-sage-light pb-2 inline-block">
                        TMS & Interventional Psychiatry
                    </h3>
                    <p className="text-charcoal leading-relaxed">
                        For depression that has not responded to standard medications, Dr. Khan offers expertise
                        in Transcranial Magnetic Stimulation (TMS). She also provides consultation for
                        Electroconvulsive Therapy (ECT) for severe or treatment-resistant cases.
                    </p>
                </section>
            </div>

            {/* Note Section */}
            <section className="bg-white p-8 border border-border mt-8 mx-auto max-w-3xl text-center">
                <h4 className="text-navy font-semibold mb-3">A Note on Psychotherapy</h4>
                <p className="text-graphite text-sm leading-relaxed max-w-2xl mx-auto">
                    While Dr. Khan provides supportive therapy during medication management visits, her
                    primary focus is on the medical treatment of psychiatric conditions. She collaborates
                    regularly with psychologists and therapists in the community and can provide referrals
                    for patients who would benefit from dedicated weekly psychotherapy.
                </p>
            </section>
        </div>
    );
}
