import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Clinical Services | Samina Khan, MD",
    description: "Psychiatric evaluation and medication management services.",
};

export default function ServicesPage() {
    return (
        <div className="pt-24 md:pt-32 pb-20 bg-cream">
            <div className="max-w-screen-xl mx-auto px-6">
                <h1 className="font-heading text-3xl md:text-4xl text-navy mb-10 border-b border-border/50 pb-4 inline-block">
                    Clinical Services
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Service Item 1 */}
                    <div className="group bg-white border border-border p-6 rounded-sm hover:border-navy/50 transition-all duration-300 hover:shadow-sm">
                        <div className="w-8 h-1 bg-navy/20 mb-4 group-hover:bg-navy transition-colors" />
                        <h2 className="font-heading text-xl text-navy mb-3">Psychiatric Evaluation</h2>
                        <p className="text-charcoal text-sm leading-relaxed">
                            A comprehensive assessment (typically 90 minutes) to understand your medical history, current symptoms, and goals. This evaluation forms the foundation of your personalized treatment plan.
                        </p>
                    </div>

                    {/* Service Item 2 */}
                    <div className="group bg-white border border-border p-6 rounded-sm hover:border-navy/50 transition-all duration-300 hover:shadow-sm">
                        <div className="w-8 h-1 bg-navy/20 mb-4 group-hover:bg-navy transition-colors" />
                        <h2 className="font-heading text-xl text-navy mb-3">Medication Management</h2>
                        <p className="text-charcoal text-sm leading-relaxed">
                            Ongoing appointments to monitor progress and adjust medications as needed. We focus on finding the most effective regimen with the fewest side effects, prioritizing your comfort.
                        </p>
                    </div>

                    {/* Service Item 3 */}
                    <div className="group bg-white border border-border p-6 rounded-sm hover:border-navy/50 transition-all duration-300 hover:shadow-sm">
                        <div className="w-8 h-1 bg-navy/20 mb-4 group-hover:bg-navy transition-colors" />
                        <h2 className="font-heading text-xl text-navy mb-3">Geriatric Psychiatry</h2>
                        <p className="text-charcoal text-sm leading-relaxed">
                            Specialized care for older adults, addressing memory loss, dementia, and mood disorders related to aging or complex medical conditions.
                        </p>
                    </div>

                    {/* Service Item 4 */}
                    <div className="group bg-white border border-border p-6 rounded-sm hover:border-navy/50 transition-all duration-300 hover:shadow-sm">
                        <div className="w-8 h-1 bg-navy/20 mb-4 group-hover:bg-navy transition-colors" />
                        <h2 className="font-heading text-xl text-navy mb-3">Consultations & Second Opinions</h2>
                        <p className="text-charcoal text-sm leading-relaxed">
                            Expert evaluation for treatment-resistant conditions, including assessments for advanced therapies like TMS (Transcranial Magnetic Stimulation) and ECT.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
