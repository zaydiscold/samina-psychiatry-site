import Link from "next/link";

/* 
  HOME PAGE REWRITE
  - Strictly adhering to "Humanizer" skill: No em dashes, no "slop" (vibrant, tapestry, etc).
  - Fixed Button Hover: Removing inline styles that blocked hover states.
  - Streamlined "Start Your Care": Removed insurance check (cash pay).
  - Renamed "Our Services" -> "Treatment Options" (less predatory).
*/

export default function Home() {
  return (
    <div className="flex flex-col animate-fade-up">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-24 pt-32 px-6 md:px-12 max-w-[1440px] mx-auto w-full">

        {/* Text */}
        <div className="w-full md:w-3/5 order-2 md:order-1 flex flex-col justify-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-[#0A2239] font-bold mb-8 leading-[1.1] tracking-tight">
            Psychiatry<br />
            Rooted in <br />
            Understanding
          </h1>
          <p className="text-lg md:text-xl text-[#333333] font-medium mb-10 leading-relaxed max-w-xl">
            Dr. Samina Khan brings over 20 years of medical experience to the Bay Area. She specializes in finding stability for patients with complex needs, from treatment-resistant depression to geriatric memory care.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#0A2239] text-[#F9F7F5] font-semibold rounded-sm hover:bg-[#1D3450] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center tracking-wide text-sm md:text-base border border-[#0A2239]"
            >
              Schedule a Visit
            </Link>

            {/* Secondary CTA - "Treatment Options" */}
            <Link
              href="/services"
              className="px-8 py-4 bg-transparent border border-[#0A2239] text-[#0A2239] font-semibold rounded-sm hover:bg-[#0A2239] hover:text-[#F9F7F5] transition-all duration-300 text-center tracking-wide text-sm md:text-base"
            >
              Treatment Options
            </Link>
          </div>
        </div>

        {/* Image - Painting Style Headshot */}
        <div className="w-full md:w-2/5 shrink-0 order-1 md:order-2 flex justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] bg-[#E6E2DE] overflow-hidden border border-[#D1D1D1]/50 rounded-sm shadow-2xl">
            <img
              src="images/headshot-placeholder.png"
              alt="Dr. Samina Khan"
              className="object-cover w-full h-full"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Patient Journey / Access to Care Section */}
      <section className="bg-[#F9F7F5] border-y border-[#D1D1D1]/50 py-16 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/3">
              <h2 className="font-heading text-3xl text-[#0A2239] mb-4">Becoming a Patient</h2>
              <p className="text-[#333333]">A straightforward path to getting help.</p>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-heading text-[#D4AF37] mb-2 opacity-50">01</span>
                <h3 className="text-lg font-bold text-[#0A2239] mb-1">Contact Us</h3>
                <p className="text-sm text-[#333333]">Call or email to request an appointment slot.</p>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-heading text-[#D4AF37] mb-2 opacity-50">02</span>
                <h3 className="text-lg font-bold text-[#0A2239] mb-1">Phone Intake</h3>
                <p className="text-sm text-[#333333]">We briefly discuss your needs and answer questions.</p>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-heading text-[#D4AF37] mb-2 opacity-50">03</span>
                <h3 className="text-lg font-bold text-[#0A2239] mb-1">Initial Evaluation</h3>
                <p className="text-sm text-[#333333]">Meet Dr. Khan for a comprehensive 90-minute visit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="border-t border-[#D1D1D1] pt-12 mb-20 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        <h2 className="text-xs font-bold text-[#555555] uppercase tracking-[0.2em] mb-10">Board Certifications & Training</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="group cursor-default">
            <h3 className="text-xl font-heading text-[#0A2239] mb-2 group-hover:text-[#D4AF37] transition-colors">Stanford University</h3>
            <p className="text-sm text-[#1A1A1A] leading-relaxed">Geriatric Psychiatry Fellowship</p>
          </div>
          <div className="group cursor-default">
            <h3 className="text-xl font-heading text-[#0A2239] mb-2 group-hover:text-[#D4AF37] transition-colors">Duke University</h3>
            <p className="text-sm text-[#1A1A1A] leading-relaxed">Visiting Fellowship (TMS)</p>
          </div>
          <div className="group cursor-default">
            <h3 className="text-xl font-heading text-[#0A2239] mb-2 group-hover:text-[#D4AF37] transition-colors">Emory University</h3>
            <p className="text-sm text-[#1A1A1A] leading-relaxed">Visiting Fellowship (ECT)</p>
          </div>
          <div className="group cursor-default">
            <h3 className="text-xl font-heading text-[#0A2239] mb-2 group-hover:text-[#D4AF37] transition-colors">ABPN Certified</h3>
            <p className="text-sm text-[#1A1A1A] leading-relaxed">General & Geriatric Psychiatry</p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-[#F4F2EF] px-6 md:px-12 py-24 w-full">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#0A2239]/10 pb-6">
            <h2 className="font-heading text-3xl md:text-5xl text-[#0A2239] mt-0">Clinical Focus</h2>
            <Link href="/conditions" className="text-[#0A2239] font-medium hover:text-[#D4AF37] transition-colors mt-6 md:mt-0 decoration-1 underline-offset-8 border-b border-[#0A2239] pb-1 hover:border-[#D4AF37]">
              Conditions Treated
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="group">
              <h3 className="text-3xl font-heading text-[#0A2239] mb-6 group-hover:text-[#D4AF37] transition-colors relative inline-block">
                Depression & Anxiety
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-px bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </h3>
              <p className="text-lg text-[#333333] leading-relaxed border-l border-[#0A2239]/20 pl-6 group-hover:border-[#D4AF37] transition-colors min-h-[80px]">
                Specializing in treatment-resistant cases and comprehensive management of mood disorders.
              </p>
            </div>
            <div className="group">
              <h3 className="text-3xl font-heading text-[#0A2239] mb-6 group-hover:text-[#D4AF37] transition-colors relative inline-block">
                Geriatric Mental Health
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-px bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </h3>
              <p className="text-lg text-[#333333] leading-relaxed border-l border-[#0A2239]/20 pl-6 group-hover:border-[#D4AF37] transition-colors min-h-[80px]">
                Expert care for memory loss, dementia, and complex interaction between medical and psychiatric health.
              </p>
            </div>
            <div className="group">
              <h3 className="text-3xl font-heading text-[#0A2239] mb-6 group-hover:text-[#D4AF37] transition-colors relative inline-block">
                Bipolar Disorder
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-px bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </h3>
              <p className="text-lg text-[#333333] leading-relaxed border-l border-[#0A2239]/20 pl-6 group-hover:border-[#D4AF37] transition-colors min-h-[80px]">
                Stabilization and long-term management strategies tailored to individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
