export function generatePhysicianSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: "Dr. Samina Khan",
        givenName: "Samina",
        familyName: "Khan",
        honorificPrefix: "Dr.",
        honorificSuffix: "MD",
        jobTitle: "Board-Certified Psychiatrist",
        description:
            "Dr. Samina Khan is a board-certified psychiatrist (General and Geriatric Psychiatry) with over 20 years of experience, serving patients in Mountain View, Cupertino, San Jose, and the greater Bay Area.",
        medicalSpecialty: ["Psychiatry", "Geriatric Psychiatry"],
        telephone: "408-568-8628",
        email: "saminadr@yahoo.com",
        url: "https://saminakhan.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "2500 Hospital Drive, Suite 3A",
            addressLocality: "Mountain View",
            addressRegion: "CA",
            postalCode: "94040",
            addressCountry: "US",
        },
        areaServed: [
            "Mountain View",
            "Cupertino",
            "San Jose",
            "Palo Alto",
            "Sunnyvale",
            "Santa Clara",
            "Los Altos",
            "Campbell",
        ],
        availableService: [
            {
                "@type": "MedicalProcedure",
                name: "Psychiatric Evaluation",
            },
            {
                "@type": "MedicalProcedure",
                name: "Medication Management",
            },
            {
                "@type": "MedicalTherapy",
                name: "Transcranial Magnetic Stimulation (TMS)",
            },
            {
                "@type": "MedicalTherapy",
                name: "Electroconvulsive Therapy (ECT)",
            },
        ],
        hasCredential: [
            {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Board Certification",
                recognizedBy: {
                    "@type": "Organization",
                    name: "American Board of Psychiatry and Neurology",
                },
                name: "Board Certified in General Psychiatry",
            },
            {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Board Certification",
                recognizedBy: {
                    "@type": "Organization",
                    name: "American Board of Psychiatry and Neurology",
                },
                name: "Board Certified in Geriatric Psychiatry",
            },
        ],
        alumniOf: [
            {
                "@type": "EducationalOrganization",
                name: "Ayub Medical College, University of Peshawar",
            },
            {
                "@type": "EducationalOrganization",
                name: "Morehouse School of Medicine",
            },
            {
                "@type": "EducationalOrganization",
                name: "Stanford University School of Medicine",
            },
            {
                "@type": "EducationalOrganization",
                name: "Duke University Medical Center",
            },
            {
                "@type": "EducationalOrganization",
                name: "Emory University School of Medicine",
            },
        ],
    };
}

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "Dr. Samina Khan, MD - Psychiatry",
        description:
            "Board-certified psychiatrist offering medication management, psychiatric evaluations, TMS, and ECT in Mountain View, CA.",
        telephone: "408-568-8628",
        email: "saminadr@yahoo.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "2500 Hospital Drive, Suite 3A",
            addressLocality: "Mountain View",
            addressRegion: "CA",
            postalCode: "94040",
            addressCountry: "US",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 37.3861,
            longitude: -122.0839,
        },
        url: "https://saminakhan.com",
        priceRange: "$$",
        medicalSpecialty: "Psychiatry",
    };
}

export function generateFAQSchema(
    faqs: { question: string; answer: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}
