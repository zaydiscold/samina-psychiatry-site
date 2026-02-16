import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Samina Khan, MD | Distinguished Psychiatrist | Bay Area",
  description:
    "A legacy of compassionate care. Dr. Samina Khan combines twenty years of academic rigour with private practice warmth. Serving Mountain View, Palo Alto, and the Bay Area.",
};

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32 pt-24 md:pt-32">
      {/* Hero: Editorial Split */}
      <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
        {/* Mobile: Image First for Impact */}
        <div className="w-full lg:w-5/12 order-1 lg:order-2">
          <div className="relative w-full aspect-[4/5] bg-linen overflow-hidden shadow-2xl shadow-navy/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/10 to-transparent mix-blend-multiply z-10" />
            <Image
              src="/images/headshot-placeholder.png"
              alt="Dr. Samina Khan, MD - Portrait"
              fill
              className="object-cover opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-7/12 order-2 lg:order-1 flex flex-col justify-center">
          <p className="text-xs font-bold text-gold uppercase tracking-[0.25em] mb-6">
            Since 2002 · Bay Area, California
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-navy leading-[1.1] mb-8">
            A Legacy of <br />
            <span className="italic text-charcoal/80">Compassionate Care.</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed font-light mb-10 max-w-xl">
            Blending the rigour of academic medicine with the warmth of private practice.
            Dr. Khan specializes in the complex intersection of mental health, aging, and
            resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-navy text-navy px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all duration-300"
            >
              Inquire for Appointment
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center text-navy px-4 py-4 text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors group"
            >
              Read Biography
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* The Journey (Credentials) */}
      <section className="bg-white border-y border-border py-16 md:py-20 -mx-6 md:-mx-0 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
            <div className="md:col-span-1">
              <h2 className="font-heading text-2xl text-navy italic">
                Distinguished <br />Training.
              </h2>
            </div>

            {/* Timeline Nodes */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="group">
                <p className="text-xs font-bold text-gold mb-2">FELLOEWSHIP</p>
                <h3 className="text-lg font-heading text-navy cursor-default">Stanford University</h3>
                <p className="text-sm text-muted mt-1 group-hover:text-charcoal transition-colors">Geriatric Psychiatry</p>
              </div>
              <div className="group">
                <p className="text-xs font-bold text-gold mb-2">FELLOWSHIP</p>
                <h3 className="text-lg font-heading text-navy cursor-default">Duke University</h3>
                <p className="text-sm text-muted mt-1 group-hover:text-charcoal transition-colors">TMS Interventions</p>
              </div>
              <div className="group">
                <p className="text-xs font-bold text-gold mb-2">FELLOWSHIP</p>
                <h3 className="text-lg font-heading text-navy cursor-default">Emory University</h3>
                <p className="text-sm text-muted mt-1 group-hover:text-charcoal transition-colors">ECT Therapy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Editorial */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div className="sticky top-32">
          <p className="text-xs font-bold text-gold uppercase tracking-[0.25em] mb-4">
            Clinical Focus
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-navy leading-tight mb-6">
            Expertise grounded in <br />
            <span className="italic font-normal">decades of practice.</span>
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-8 max-w-md">
            We treat the individual, not just the symptoms. Whether you are navigating a
            major life transition, managing a complex mood disorder, or seeking support
            for an aging parent, our approach is meticulous and kind.
          </p>
          <a href="/services" className="text-sm font-bold text-navy border-b border-navy/30 pb-1 hover:border-navy transition-all">
            Explore All Services &rarr;
          </a>
        </div>

        <div className="space-y-12 md:space-y-16">
          <article>
            <span className="text-xs font-bold text-slate block mb-2">01</span>
            <h3 className="font-heading text-2xl text-navy mb-3">Psychiatric Evaluation</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A comprehensive 90-minute initial consultation to understand the biological,
              psychological, and social drivers of your health.
            </p>
          </article>
          <article>
            <span className="text-xs font-bold text-slate block mb-2">02</span>
            <h3 className="font-heading text-2xl text-navy mb-3">Medication Management</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Precision prescribing with a "start low, go slow" philosophy, minimizing side
              effects while maximizing relief.
            </p>
          </article>
          <article>
            <span className="text-xs font-bold text-slate block mb-2">03</span>
            <h3 className="font-heading text-2xl text-navy mb-3">Geriatric & Memory Care</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Specialized support for memory loss, confusion, and late-life depression,
              honoring the dignity of every patient.
            </p>
          </article>
          <article>
            <span className="text-xs font-bold text-slate block mb-2">04</span>
            <h3 className="font-heading text-2xl text-navy mb-3">Advanced Therapies</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Expert consultation for Transcranial Magnetic Stimulation (TMS) and
              Electroconvulsive Therapy (ECT).
            </p>
          </article>
        </div>
      </section>

      {/* Signature / Quote */}
      <section className="text-center py-12">
        <blockquote className="font-heading text-2xl md:text-3xl italic text-navy/80 max-w-3xl mx-auto leading-relaxed">
          "The goal is not just the absence of illness, but the restoration of the self."
        </blockquote>
        <cite className="block mt-6 text-sm font-bold text-gold not-italic tracking-widest uppercase">
          Dr. Samina Khan
        </cite>
      </section>
    </div>
  );
}
