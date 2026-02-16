import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col animate-fade-up">

      {/* Hero Section */}
      {/* Increased padding-top to pt-32 to prevent Navbar clipping. Added px-6 md:px-12 for edge safety. */}
      <section className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-24 pt-32 px-6 md:px-12 max-w-[1440px] mx-auto w-full">

        {/* Text */}
        <div className="w-full md:w-3/5 order-2 md:order-1 flex flex-col justify-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-[#0A2239] font-bold mb-8 leading-[1.1] tracking-tight">
            Compassionate <br />
            Psychiatric Care
          </h1>
          <p className="text-lg md:text-xl text-[#333333] font-medium mb-10 leading-relaxed max-w-xl">
            Dr. Samina Khan is a Board Certified Psychiatrist dedicated to improving your quality of life through comprehensive evaluation, medication management, and personalized treatment plans.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            {/* Hardcoded Colors inline to prevent variable failure */}
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#0A2239] text-[#F9F7F5] font-semibold rounded-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center tracking-wide text-sm md:text-base border border-[#0A2239]"
              style={{ backgroundColor: '#0A2239', color: '#F9F7F5' }}
            >
              Contact Office
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-transparent border border-[#0A2239] text-[#0A2239] font-semibold rounded-sm hover:bg-[#0A2239] hover:text-[#F9F7F5] transition-all duration-300 text-center tracking-wide text-sm md:text-base"
              style={{ borderColor: '#0A2239', color: '#0A2239' }}
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Image - Painting Style Headshot */}
        <div className="w-full md:w-2/5 shrink-0 order-1 md:order-2 flex justify-end">
          {/* Added max-w constraints to prevent massive overflow */}
          <div className="relative w-full max-w-md aspect-[4/5] bg-[#E6E2DE] overflow-hidden border border-[#D1D1D1]/50 rounded-sm shadow-2xl">
            <Image
              src="/images/headshot-placeholder.png"
              alt="Dr. Samina Khan"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Credentials - Simplified & Direct */}
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

      {/* Focus Areas - De-SaaS'd (Typographic List) */}
      {/* Increased padding and using different background tone for elegance */}
      <section className="bg-[#F4F2EF] px-6 md:px-12 py-24 w-full">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#0A2239]/10 pb-6">
            <h2 className="font-heading text-3xl md:text-5xl text-[#0A2239] mt-0">Areas of Focus</h2>
            <Link href="/conditions" className="text-[#0A2239] font-medium hover:text-[#D4AF37] transition-colors mt-6 md:mt-0 decoration-1 underline-offset-8 border-b border-[#0A2239] pb-1 hover:border-[#D4AF37]">
              View All Conditions
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
