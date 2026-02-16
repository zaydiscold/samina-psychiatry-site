import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Clinical Services | Samina Khan, MD",
    description: "Psychiatric evaluation and medication management services.",
};

export default function ServicesPage() {
    return (
        <div className="pt-24 md:pt-32 pb-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-6">
                <h1 className="font-heading text-3xl md:text-4xl text-navy mb-12">Clinical Services</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Service Item */}
                    <div className="border border-border p-8 rounded-sm hover:border-navy/30 transition-colors">
                        <h2 className="font-heading text-2xl text-navy mb-4">Psychiatric Evaluation</h2>
                        <p className="text-charcoal mb-4 leading-relaxed">
                            A complete assessment (typically 90 minutes) to understand your medical history, current symptoms, and goals. This evaluation forms the basis of your treatment plan.
                        </p>
                    </div>

                    <div className="border border-border p-8 rounded-sm hover:border-navy/30 transition-colors">
                        <h2 className="font-heading text-2xl text-navy mb-4">Medication Management</h2>
                        <p className="text-charcoal mb-4 leading-relaxed">
                            Ongoing appointments to monitor progress and adjust medications as needed. We focus on finding the most effective regimen with the fewest side effects.
                        </p>
                    </div>

                    <div className="border border-border p-8 rounded-sm hover:border-navy/30 transition-colors">
                        <h2 className="font-heading text-2xl text-navy mb-4">Geriatric Psychiatry</h2>
                        <p className="text-charcoal mb-4 leading-relaxed">
                            Evaluation and treatment for older adults, addressing memory loss, dementia, depression, and anxiety related to aging or medical conditions.
                        </p>
                    </div>

                    <div className="border border-border p-8 rounded-sm hover:border-navy/30 transition-colors">
                        <h2 className="font-heading text-2xl text-navy mb-4">Consultations</h2>
                        <p className="text-charcoal mb-4 leading-relaxed">
                            Expert second opinions for treatment-resistant depression, including evaluation for TMS (Transcranial Magnetic Stimulation) and ECT (Electroconvulsive Therapy).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
