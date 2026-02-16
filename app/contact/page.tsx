import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Samina Khan, MD",
    description: "Contact information for Dr. Samina Khan's psychiatry office in Mountain View, CA.",
};

export default function ContactPage() {
    return (
        <div className="pt-24 md:pt-32 pb-20 bg-white">
            <div className="max-w-screen-lg mx-auto px-6">
                <h1 className="font-heading text-3xl md:text-4xl text-navy mb-12 border-b border-border/50 pb-6 inline-block">Contact Information</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Details */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-2">Office Address</h2>
                            <p className="text-lg text-charcoal leading-relaxed">
                                2500 Hospital Drive, Suite 3A<br />
                                Mountain View, CA 94040
                            </p>
                            <p className="text-sm text-gold mt-2 font-medium">Located near El Camino Hospital</p>
                        </div>

                        <div>
                            <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-2">Connect</h2>
                            <div className="space-y-2">
                                <p className="text-lg text-charcoal">
                                    Phone: <a href="tel:408-568-8628" className="text-navy font-semibold hover:text-gold transition-colors">(408) 568-8628</a>
                                </p>
                                <p className="text-lg text-charcoal">
                                    Email: <a href="mailto:office@saminakhanmd.com" className="text-navy font-semibold hover:text-gold transition-colors">office@saminakhanmd.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-border">
                            <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Practice Policies</h2>
                            <div className="bg-linen/30 p-6 rounded-sm border border-border/50 hover:border-gold/30 transition-colors">
                                <p className="text-charcoal text-sm leading-relaxed mb-4">
                                    <strong>Out-of-Network:</strong> Dr. Khan does not contract directly with insurance companies.
                                </p>
                                <p className="text-charcoal text-sm leading-relaxed">
                                    Payment is due at the time of service. We provide a detailed statement for you to submit to your insurance carrier for potential reimbursement.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Embed - Professional & Functional */}
                    <div className="h-[400px] w-full bg-stone/10 border border-border rounded-sm overflow-hidden shadow-sm relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.814986725832!2d-122.0837489236458!3d37.36928097209999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb13d50456637%3A0x6295781a96f13d80!2s2500%20Hospital%20Dr%20%233a%2C%20Mountain%20View%2C%20CA%2094040!5e0!3m2!1sen!2sus!4v1709409000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Overlay with Schedule */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 border border-border shadow-sm rounded-sm">
                            <p className="text-xs font-bold text-navy uppercase tracking-wider mb-1">Schedule</p>
                            <p className="text-sm text-charcoal">Monday – Friday: <span className="italic">By Appointment Only</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
