import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact & Appointments",
    description: "Schedule a consultation with Dr. Samina Khan in Mountain View, CA.",
};

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-16">
            <section className="text-center">
                <p className="text-sm font-medium text-sage uppercase tracking-wider mb-2">
                    Get in Touch
                </p>
                <h1 className="text-3xl md:text-4xl font-heading font-semibold text-navy mb-6">
                    Contact & Appointments
                </h1>
                <p className="text-lg text-graphite leading-relaxed max-w-2xl mx-auto">
                    Dr. Khan is currently accepting new patients. Please contact the office directly
                    to discuss scheduling an initial evaluation.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="space-y-8 bg-white p-8 border border-border">
                    <div>
                        <h3 className="text-sm font-bold text-sage uppercase tracking-wider mb-3">Phone</h3>
                        <p className="text-2xl font-heading text-navy font-semibold mb-1">
                            (408) 568-8628
                        </p>
                        <p className="text-sm text-muted">
                            Monday – Friday, 9:00 AM – 5:00 PM
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-sage uppercase tracking-wider mb-3">Location</h3>
                        <address className="not-italic text-charcoal space-y-1">
                            <p className="font-medium">Mountain View Psychiatry</p>
                            <p>2500 Hospital Drive, Suite 3A</p>
                            <p>Mountain View, CA 94040</p>
                        </address>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-sage uppercase tracking-wider mb-3">Emergency</h3>
                        <p className="text-sm text-charcoal leading-relaxed">
                            If you are experiencing a medical or psychiatric emergency, please call 911
                            or proceed to the nearest emergency room immediately.
                        </p>
                    </div>
                </div>

                {/* Essential Info */}
                <div className="space-y-8 py-4">
                    <div>
                        <h3 className="font-heading text-xl text-navy mb-3">Insurance & Payment</h3>
                        <p className="text-charcoal leading-relaxed mb-4">
                            Dr. Khan operates as an <strong>out-of-network</strong> provider. This allows her
                            to spend more time with each patient and provide highly personalized care without
                            insurance-imposed limitations.
                        </p>
                        <p className="text-charcoal leading-relaxed">
                            Payment is due at the time of service. We will provide you with a monthly "superbill"
                            that you can submit to your insurance carrier for reimbursement, subject to your
                            plan's out-of-network benefits.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-heading text-xl text-navy mb-3">Telehealth</h3>
                        <p className="text-charcoal leading-relaxed">
                            Secure video appointments are available for established patients. Initial visits
                            are typically conducted in-person to ensure a comprehensive assessment.
                        </p>
                    </div>
                </div>
            </div>

            {/* Map Placeholder or simple divider */}
            <div className="border-t border-border pt-8 text-center">
                <p className="text-sm text-muted">
                    Located adjacent to El Camino Hospital in Mountain View.
                </p>
            </div>
        </div>
    );
}
