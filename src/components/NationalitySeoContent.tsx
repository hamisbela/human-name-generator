import React from 'react';

interface NationalitySeoContentProps {
  nationality: string;
  gender: 'boy' | 'girl';
}

const nationalityContent: { [key: string]: { title: string; description: string; facts: string[]; usage: string[] } } = {
  african: {
    title: "African Baby Names - Traditional & Modern African Names",
    description: "African names carry deep cultural meanings and family traditions. Many African names are inspired by circumstances of birth, hopes for the child's future, or important family events.",
    facts: [
      "Many African names have spiritual significance",
      "Names often reflect the day of birth or birth order",
      "Different African regions have distinct naming traditions",
      "Modern African names often blend traditional and contemporary elements"
    ],
    usage: [
      "Select 'African' from the nationality dropdown",
      "Choose your preferred gender",
      "Optionally filter by first letter or name length",
      "Click 'Generate Names' to see authentic African names",
      "Each name is carefully selected from various African cultures"
    ]
  },
  american: {
    title: "American Baby Names - Popular & Unique American Names",
    description: "American names reflect the country's diverse cultural heritage, combining traditional elements with modern trends. These names often represent a blend of different cultural influences.",
    facts: [
      "American names often follow current pop culture trends",
      "Many American names have European origins",
      "Unique spellings are increasingly popular",
      "Names often reflect regional preferences"
    ],
    usage: [
      "Choose 'American' from the nationality options",
      "Select your preferred gender",
      "Use filters to narrow down your preferences",
      "Generate to see popular American names",
      "Keep generating until you find your perfect match"
    ]
  },
  french: {
    title: "French Baby Names - Classic & Elegant French Names",
    description: "French names are known for their elegance and sophistication. These names often have rich historical backgrounds and maintain their timeless appeal across generations.",
    facts: [
      "French names often have Latin or Greek origins",
      "Many French names are associated with saints",
      "Accent marks are important in French names",
      "French naming traditions often honor family members"
    ],
    usage: [
      "Select 'French' from the nationality menu",
      "Choose your preferred gender",
      "Apply optional filters for specific preferences",
      "Generate to discover elegant French names",
      "Each suggestion maintains authentic French style"
    ]
  },
  german: {
    title: "German Baby Names - Traditional & Modern German Names",
    description: "German names combine heritage with meaning, often drawing from historical and mythological sources. These names frequently have clear meanings and strong cultural connections.",
    facts: [
      "German names often have nature-related meanings",
      "Many German names have royal connections",
      "Compound names are common in German culture",
      "German names often reflect family traditions"
    ],
    usage: [
      "Choose 'German' from the nationality selector",
      "Select your preferred gender",
      "Use filters to refine your search",
      "Generate to see authentic German names",
      "Each name reflects German naming traditions"
    ]
  },
  indian: {
    title: "Indian Baby Names - Meaningful Indian Names",
    description: "Indian names are deeply rooted in culture and spirituality. These names often come from Sanskrit origins and carry profound meanings related to divine attributes or natural elements.",
    facts: [
      "Indian names often have Sanskrit origins",
      "Names frequently honor Hindu deities",
      "Regional variations influence naming traditions",
      "Many names are associated with positive attributes"
    ],
    usage: [
      "Select 'Indian' from the nationality options",
      "Choose your preferred gender",
      "Apply filters for specific preferences",
      "Generate to discover meaningful Indian names",
      "Each name carries cultural significance"
    ]
  },
  japanese: {
    title: "Japanese Baby Names - Traditional & Modern Japanese Names",
    description: "Japanese names are chosen with great care, combining meaningful sounds with carefully selected kanji characters. These names frequently reflect natural elements and positive attributes.",
    facts: [
      "Japanese names often use specific kanji combinations",
      "Many names are inspired by nature elements",
      "Seasonal references are common in names",
      "Modern Japanese names blend traditional and contemporary elements"
    ],
    usage: [
      "Choose 'Japanese' from the nationality menu",
      "Select your preferred gender",
      "Use filters to narrow your selection",
      "Generate to see authentic Japanese names",
      "Each name follows Japanese naming conventions"
    ]
  },
  russian: {
    title: "Russian Baby Names - Classic Russian Names",
    description: "Russian names carry a rich cultural heritage, often derived from historical and religious sources. These names frequently have diminutive forms used to show affection.",
    facts: [
      "Russian names often have Greek or Slavic origins",
      "Many names are associated with Orthodox saints",
      "Names typically have multiple diminutive forms",
      "Patronymic middle names are traditional"
    ],
    usage: [
      "Select 'Russian' from the nationality dropdown",
      "Choose your preferred gender",
      "Apply optional filters for preferences",
      "Generate to discover Russian names",
      "Each name reflects Russian naming traditions"
    ]
  }
};

export function NationalitySeoContent({ nationality, gender }: NationalitySeoContentProps) {
  const content = nationalityContent[nationality];

  return (
    <section className="prose lg:prose-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{content.title}</h2>
      <p className="text-gray-600 mb-6">{content.description}</p>

      <h3 className="text-xl font-bold text-gray-800 mb-4">
        How to Use Our {nationality.charAt(0).toUpperCase() + nationality.slice(1)} Name Generator
      </h3>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        {content.usage.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-4">
        About {nationality.charAt(0).toUpperCase() + nationality.slice(1)} Names
      </h3>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        {content.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-4">
        How to Choose a {nationality.charAt(0).toUpperCase() + nationality.slice(1)} Name
      </h3>
      <p className="text-gray-600 mb-6">
        When selecting a {nationality} name for your baby, consider the following:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Research the meaning and cultural significance</li>
        <li>Consider the pronunciation in your home country</li>
        <li>Think about potential nicknames</li>
        <li>Reflect on family traditions and heritage</li>
      </ul>
    </section>
  );
}