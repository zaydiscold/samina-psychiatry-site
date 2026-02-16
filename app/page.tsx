import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col animate-fade-up">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-24 pt-12 md:pt-20">

        {/* Text */}
        <div className="w-full md:w-3/5 order-2 md:order-1">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-navy font-bold mb-6 leading-tight">
            Compassionate <br />
            Psychiatric Care
          </h1>
          <p className="text-lg md:text-xl text-charcoal font-medium mb-8 leading-relaxed max-w-xl">
            Dr. Samina Khan is a Board Certified Psychiatrist dedicated to improving your quality of life through comprehensive evaluation, medication management, and personalized treatment plans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-navy text-[var(--color-cream)] font-semibold rounded-sm hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center tracking-wide"
            >
              Contact Office
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 bg-transparent border border-navy text-navy font-semibold rounded-sm hover:bg-navy/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center tracking-wide"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Image - Painting Style Headshot */}
        <div className="w-full md:w-2/5 shrink-0 order-1 md:order-2">
          <div className="relative aspect-[4/5] bg-stone/20 overflow-hidden border border-border/50 rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <Image
              src="/samina-psychiatry-site/images/headshot-placeholder.png"
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
      <section className="border-t border-border pt-12 mb-20">
        <h2 className="text-sm font-bold text-muted uppercase tracking-wider mb-8">Board Certifications & Training</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="group">
            <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors">Stanford University</h3>
            <p className="text-sm text-charcoal">Geriatric Psychiatry Fellowship</p>
          </div>
          <div className="group">
            <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors">Duke University</h3>
            <p className="text-sm text-charcoal">Visiting Fellowship (TMS)</p>
          </div>
          <div className="group">
            <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors">Emory University</h3>
            <p className="text-sm text-charcoal">Visiting Fellowship (ECT)</p>
          </div>
          <div className="group">
            <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors">ABPN Certified</h3>
            <p className="text-sm text-charcoal">General & Geriatric Psychiatry</p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-linen/30 -mx-6 px-6 py-16 rounded-sm">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-border/50 pb-4">
            <h2 className="font-heading text-3xl text-navy mt-0">Areas of Focus</h2>
            <Link href="/conditions" className="text-navy font-medium hover:text-gold transition-colors mt-4 md:mt-0">
              View All Conditions &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-border rounded-sm hover:border-gold/30 transition-colors shadow-sm">
              <h3 className="text-xl font-heading text-navy mb-3">Depression & Anxiety</h3>
              <p className="text-sm text-charcoal">Specializing in treatment-resistant cases and comprehensive management of mood disorders.</p>
            </div>
            <div className="bg-white p-6 border border-border rounded-sm hover:border-gold/30 transition-colors shadow-sm">
              <h3 className="text-xl font-heading text-navy mb-3">Geriatric Mental Health</h3>
              <p className="text-sm text-charcoal">Expert care for memory loss, dementia, and complex interaction between medical and psychiatric health.</p>
            </div>
            <div className="bg-white p-6 border border-border rounded-sm hover:border-gold/30 transition-colors shadow-sm">
              <h3 className="text-xl font-heading text-navy mb-3">Bipolar Disorder</h3>
              <p className="text-sm text-charcoal">Stabilization and long-term management strategies tailored to individual needs.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
