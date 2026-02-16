import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Samina Khan, MD | Board-Certified Psychiatrist | Bay Area, CA",
  description:
    "Dr. Samina Khan is a board-certified psychiatrist specializing in General and Geriatric Psychiatry in Mountain View, CA. Over 20 years of experience.",
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero / Introduction */}
      <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Headshot */}
        <div className="w-full max-w-xs mx-auto md:w-64 md:mx-0 shrink-0">
          <div className="relative w-full aspect-[3/4] md:aspect-[3/4] bg-linen overflow-hidden shadow-sm">
            <Image
              src="/images/headshot-placeholder.png"
              alt="Dr. Samina Khan, MD"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Intro Text */}
        <div className="flex-1">
          <p className="text-sm font-medium text-sage uppercase tracking-wider mb-2">
            Board-Certified Psychiatrist
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-semibold text-navy leading-tight mb-4">
            Samina Khan, MD
          </h1>
          <p className="text-lg text-graphite leading-relaxed mb-4">
            Dr. Khan is a board-certified psychiatrist with over 20 years of clinical experience
            in the Bay Area. She provides thoughtful, evidence-based psychiatric care for adults
            and older adults from her private practice in Mountain View.
          </p>
          <p className="text-base text-graphite leading-relaxed">
            Her practice focuses on medication management, psychiatric evaluation, and specialized
            treatments including TMS and ECT. She brings fellowship training from Stanford, Duke,
            and Emory to every patient encounter.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-block bg-navy text-white no-underline px-6 py-3 text-sm font-medium hover:bg-navy-light transition-colors"
            >
              Request an Appointment
            </a>
            <a
              href="tel:408-568-8628"
              className="inline-block border border-navy text-navy no-underline px-6 py-3 text-sm font-medium hover:bg-navy hover:text-white transition-colors"
            >
              Call (408) 568-8628
            </a>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="bg-white p-6 md:p-8 border border-border">
        <h2 className="text-sm font-semibold text-sage uppercase tracking-wider mt-0 mb-6">
          Credentials & Training
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="font-heading text-navy font-semibold text-base mb-1">Board Certified</p>
            <p className="text-sm text-graphite m-0">General Psychiatry, ABPN</p>
          </div>
          <div>
            <p className="font-heading text-navy font-semibold text-base mb-1">Board Certified</p>
            <p className="text-sm text-graphite m-0">Geriatric Psychiatry, ABPN</p>
          </div>
          <div>
            <p className="font-heading text-navy font-semibold text-base mb-1">Fellowship Trained</p>
            <p className="text-sm text-graphite m-0">Stanford, Duke, Emory</p>
          </div>
          <div>
            <p className="font-heading text-navy font-semibold text-base mb-1">20+ Years</p>
            <p className="text-sm text-graphite m-0">Clinical Experience</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <h2 className="font-heading text-navy text-2xl mb-6 mt-0">Areas of Practice</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <div className="border-l-2 border-sage pl-5">
            <h3 className="text-navy font-semibold mt-0 mb-1">Psychiatric Evaluation</h3>
            <p className="text-sm text-graphite m-0">
              Comprehensive diagnostic assessments for new patients, including a detailed review
              of symptoms, history, and treatment options.
            </p>
          </div>
          <div className="border-l-2 border-sage pl-5">
            <h3 className="text-navy font-semibold mt-0 mb-1">Medication Management</h3>
            <p className="text-sm text-graphite m-0">
              Ongoing monitoring and adjustment of psychiatric medications with attention to
              efficacy, interactions, and quality of life.
            </p>
          </div>
          <div className="border-l-2 border-sage pl-5">
            <h3 className="text-navy font-semibold mt-0 mb-1">Geriatric Psychiatry</h3>
            <p className="text-sm text-graphite m-0">
              Specialized care for older adults, including dementia-related behavioral symptoms,
              late-life depression, and caregiver consultation.
            </p>
          </div>
          <div className="border-l-2 border-sage pl-5">
            <h3 className="text-navy font-semibold mt-0 mb-1">TMS & ECT</h3>
            <p className="text-sm text-graphite m-0">
              Advanced neuromodulation therapies for treatment-resistant depression and other
              conditions not responsive to medication alone.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/services" className="text-sm font-medium text-navy">
            View all services &rarr;
          </a>
        </div>
      </section>

      {/* Location Bar */}
      <section className="bg-linen p-6 md:p-8 border border-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-navy font-heading font-semibold mt-0 mb-1">Mountain View Office</h3>
            <p className="text-sm text-graphite m-0">
              2500 Hospital Drive, Suite 3A, Mountain View, CA 94040
            </p>
            <p className="text-sm text-muted m-0 mt-1">
              Serving Mountain View, Palo Alto, Sunnyvale, Cupertino, and the greater Bay Area
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="/contact"
              className="inline-block bg-navy text-white no-underline px-5 py-2.5 text-sm font-medium hover:bg-navy-light transition-colors"
            >
              Directions & Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
