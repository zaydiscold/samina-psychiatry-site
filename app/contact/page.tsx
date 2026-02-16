import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Samina Khan, MD",
    description: "Contact information for Dr. Samina Khan's psychiatry office in Mountain View, CA.",
};

export default function ContactPage() {
    return (
        <div className="pt-24 md:pt-32 pb-20 bg-white">
            <div className="max-w-screen-lg mx-auto px-6">
                <h1 className="font-heading text-3xl md:text-4xl text-navy mb-12">Contact Information</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-2">Office Address</h2>
                            <p className="text-lg text-charcoal leading-relaxed">
                                2500 Hospital Drive, Suite 3A<br />
                                Mountain View, CA 94040
                            </p>
                            <p className="text-sm text-muted mt-2">Located near El Camino Hospital</p>
                        </div>

                        <div>
                            <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-2">Phone & Email</h2>
                            <p className="text-lg text-charcoal mb-1">
                                Phone: <a href="tel:408-568-8628" className="text-navy hover:underline">(408) 568-8628</a>
                            </p>
                            <p className="text-lg text-charcoal">
                                Email: <a href="mailto:office@saminakhanmd.com" className="text-navy hover:underline">office@saminakhanmd.com</a>
                            </p>
                        </div>

                        <div className="pt-6 border-t border-border">
                            <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">Insurance & Payment Policy</h2>
                            <div className="bg-linen/50 p-6 rounded-sm border border-border">
                                <p className="text-charcoal text-sm leading-relaxed mb-4">
                                    <strong>Out-of-Network Practice:</strong> Dr. Khan does not contract directly with insurance companies.
                                </p>
                                <p className="text-charcoal text-sm leading-relaxed">
                                    Payment is due at the time of service. We provide a detailed statement (Superbill) that you may submit to your insurance carrier for potential reimbursement, depending on your out-of-network benefits.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder or Additional Note */}
                    <div className="bg-stone/10 border border-border p-8 flex items-center justify-center min-h-[300px]">
                        <div className="text-center">
                            <p className="font-heading text-xl text-navy mb-2">Office Hours</p>
                            <p className="text-charcoal">By Appointment Only</p>
                            <p className="text-charcoal mt-1">Monday – Friday</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
