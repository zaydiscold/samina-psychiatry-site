import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Samina Khan, MD | Board Certified Psychiatrist | Mountain View, CA",
  description:
    "Dr. Samina Khan is a Board Certified Psychiatrist with over 20 years of experience. Specializing in General and Geriatric Psychiatry in the Bay Area.",
};

export default function HomePage() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Simple Professional Hero */}
        <section className="flex flex-col md:flex-row gap-12 items-start mb-24">
          {/* Image - Pixelated Blur Headshot */}
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative aspect-[3/4] bg-stone/20 overflow-hidden border border-border/50">
              <Image
                src="/images/headshot-placeholder.png"
                alt="Dr. Samina Khan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 pt-4">
            <h1 className="font-heading text-4xl md:text-5xl text-navy font-semibold mb-6">
              Samina Khan, MD
            </h1>
            <p className="text-lg md:text-xl text-charcoal font-medium mb-6 leading-relaxed">
              Board Certified Psychiatrist seeking to improve patient quality of life through comprehensive evaluation and treatment.
            </p>
            <div className="text-graphite space-y-4 max-w-2xl leading-relaxed">
              <p>
                I am a general and geriatric psychiatrist with over two years of experience in private practice and twenty years in the medical field. I obtained my medical degree from Morehouse School of Medicine and completed my residency and fellowship training at Stanford, Duke, and Emory Universities.
              </p>
              <p>
                My practice focuses on the intersection of biological, psychological, and social factors that influence mental health. I provide psychiatric evaluations and medication management for adults of all ages, with specialized expertise in the unique needs of older adults.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              <a href="/contact" className="bg-navy text-white px-6 py-3 text-sm font-semibold hover:bg-navy-light transition-colors rounded-sm">
                Contact Office
              </a>
              <a href="/services" className="border border-navy text-navy px-6 py-3 text-sm font-semibold hover:bg-navy/5 transition-colors rounded-sm">
                View Services
              </a>
            </div>
          </div>
        </section>

        <hr className="border-border mb-20" />

        {/* Credentials / "Trust Indicators" - Simplified */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h3 className="font-heading text-xl text-navy mb-4">Board Certifications</h3>
            <ul className="space-y-2 text-sm text-graphite">
              <li>General Psychiatry (ABPN)</li>
              <li>Geriatric Psychiatry (ABPN)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-xl text-navy mb-4">Education & Training</h3>
            <ul className="space-y-2 text-sm text-graphite">
              <li>Stanford University (Fellowship)</li>
              <li>Duke University (Fellowship)</li>
              <li>Emory University (Fellowship)</li>
              <li>Morehouse School of Medicine (MD)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-xl text-navy mb-4">Clinical Focus</h3>
            <ul className="space-y-2 text-sm text-graphite">
              <li>Depressive Disorders</li>
              <li>Anxiety Disorders</li>
              <li>Cognitive Impairment</li>
              <li>Medication Management</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
