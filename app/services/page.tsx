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

                {/* 
           VIBRANT & BALANCED GRID
           Changed to md:grid-cols-2 (strictly 2 columns) so it's a 2x2 grid for 4 items.
           Balanced and "even".
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Service Item 1 */}
                    <div className="group bg-white border border-border p-6 md:p-8 rounded-sm hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-12 h-1 bg-navy/20 mb-6 group-hover:bg-gold transition-colors duration-500" />
                        <h2 className="font-heading text-2xl text-navy mb-4 group-hover:text-navy-light">Psychiatric Evaluation</h2>
                        <p className="text-charcoal text-base leading-relaxed">
                            A comprehensive assessment to understand your medical history, current symptoms, and goals. This evaluation forms the foundation of your personalized treatment plan.
                        </p>
                    </div>

                    {/* Service Item 2 */}
                    <div className="group bg-white border border-border p-6 md:p-8 rounded-sm hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-12 h-1 bg-navy/20 mb-6 group-hover:bg-gold transition-colors duration-500" />
                        <h2 className="font-heading text-2xl text-navy mb-4 group-hover:text-navy-light">Medication Management</h2>
                        <p className="text-charcoal text-base leading-relaxed">
                            Ongoing appointments to monitor progress and adjust medications as needed. We focus on finding the most effective regimen with the fewest side effects, prioritizing your comfort.
                        </p>
                    </div>

                    {/* Service Item 3 */}
                    <div className="group bg-white border border-border p-6 md:p-8 rounded-sm hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-12 h-1 bg-navy/20 mb-6 group-hover:bg-gold transition-colors duration-500" />
                        <h2 className="font-heading text-2xl text-navy mb-4 group-hover:text-navy-light">Geriatric Psychiatry</h2>
                        <p className="text-charcoal text-base leading-relaxed">
                            Specialized care for older adults, addressing memory loss, dementia, and mood disorders related to aging or complex medical conditions.
                        </p>
                    </div>

                    {/* Service Item 4 */}
                    <div className="group bg-white border border-border p-6 md:p-8 rounded-sm hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-12 h-1 bg-navy/20 mb-6 group-hover:bg-gold transition-colors duration-500" />
                        <h2 className="font-heading text-2xl text-navy mb-4 group-hover:text-navy-light">Consultations & Second Opinions</h2>
                        <p className="text-charcoal text-base leading-relaxed">
                            Expert evaluation for treatment-resistant conditions, including assessments for advanced therapies like TMS (Transcranial Magnetic Stimulation) and ECT.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
