interface NameDatabase {
  [key: string]: {
    boy: string[];
    girl: string[];
  };
}

const NAMES_BY_NATIONALITY: NameDatabase = {
  african: {
    boy: [
      'Abayomi', 'Chidi', 'Dayo', 'Folami', 'Jabari', 'Kenzo', 'Kwame', 'Malik',
      'Nnamdi', 'Oluwaseun', 'Sefu', 'Taiwo', 'Tendai', 'Uzoma', 'Zuberi',
      'Kofi', 'Olayinka', 'Babajide', 'Chibueze', 'Folarin'
    ],
    girl: [
      'Amara', 'Zuri', 'Nia', 'Imani', 'Aisha', 'Chioma', 'Folami', 'Kesi',
      'Makena', 'Nyota', 'Safiya', 'Talia', 'Zola', 'Abena', 'Dalila',
      'Eshe', 'Fola', 'Hasina', 'Jamila', 'Kioni'
    ]
  },
  american: {
    boy: [
      'James', 'William', 'Oliver', 'Henry', 'Lucas', 'Benjamin', 'Theodore', 'Jack',
      'Liam', 'Alexander', 'Owen', 'Sebastian', 'Caleb', 'Samuel', 'Joseph',
      'Daniel', 'David', 'Michael', 'Mason', 'Ethan'
    ],
    girl: [
      'Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia',
      'Harper', 'Evelyn', 'Abigail', 'Emily', 'Elizabeth', 'Sofia', 'Avery',
      'Ella', 'Scarlett', 'Grace', 'Victoria', 'Riley'
    ]
  },
  french: {
    boy: [
      'Antoine', 'Baptiste', 'Claude', 'Dominique', 'Étienne', 'François', 'Gabriel', 'Henri',
      'Jean', 'Louis', 'Marcel', 'Nicolas', 'Pierre', 'Rémy', 'Simon',
      'Théo', 'Victor', 'Xavier', 'Yves', 'Zacharie'
    ],
    girl: [
      'Amélie', 'Camille', 'Céline', 'Claire', 'Élise', 'Fleur', 'Gabrielle', 'Inès',
      'Joséphine', 'Louise', 'Manon', 'Margot', 'Marie', 'Noémie', 'Odette',
      'Sophie', 'Sylvie', 'Thérèse', 'Valentine', 'Violette'
    ]
  },
  german: {
    boy: [
      'Alexander', 'Benedikt', 'Constantin', 'Dominik', 'Erik', 'Florian', 'Gustav', 'Heinrich',
      'Johannes', 'Karl', 'Lukas', 'Maximilian', 'Niklas', 'Otto', 'Paul',
      'Robert', 'Stefan', 'Thomas', 'Ulrich', 'Wilhelm'
    ],
    girl: [
      'Ada', 'Annika', 'Clara', 'Elena', 'Emilia', 'Franziska', 'Greta', 'Hannah',
      'Ida', 'Johanna', 'Katharina', 'Lena', 'Luisa', 'Marta', 'Nina',
      'Paula', 'Sophie', 'Theresa', 'Vera', 'Wilhelmina'
    ]
  },
  indian: {
    boy: [
      'Aarav', 'Arjun', 'Dev', 'Ishaan', 'Krishna', 'Mihir', 'Nikhil', 'Om',
      'Pranav', 'Rahul', 'Sai', 'Shiv', 'Varun', 'Vihaan', 'Yash',
      'Aditya', 'Dhruv', 'Kabir', 'Rohan', 'Vivaan'
    ],
    girl: [
      'Aanya', 'Diya', 'Kavya', 'Khushi', 'Kiara', 'Maya', 'Myra', 'Nisha',
      'Priya', 'Riya', 'Saanvi', 'Sanya', 'Sara', 'Tara', 'Vanya',
      'Zara', 'Aisha', 'Anaya', 'Aria', 'Isha'
    ]
  },
  japanese: {
    boy: [
      'Akira', 'Daiki', 'Haruto', 'Hiroshi', 'Ichiro', 'Kaito', 'Kenji', 'Kenzo',
      'Makoto', 'Riku', 'Satoshi', 'Shiro', 'Takashi', 'Yuki', 'Zen',
      'Hiro', 'Katsu', 'Minoru', 'Ryuu', 'Taro'
    ],
    girl: [
      'Akiko', 'Emi', 'Hana', 'Haruka', 'Hikari', 'Kaori', 'Keiko', 'Mai',
      'Mika', 'Natsuki', 'Rin', 'Sakura', 'Suki', 'Yuki', 'Yumi',
      'Aiko', 'Emiko', 'Hanako', 'Kumiko', 'Miyuki'
    ]
  },
  russian: {
    boy: [
      'Alexander', 'Boris', 'Dmitri', 'Fyodor', 'Grigori', 'Igor', 'Ivan', 'Kirill',
      'Maxim', 'Mikhail', 'Nikolai', 'Oleg', 'Pavel', 'Roman', 'Sergei',
      'Viktor', 'Vladimir', 'Yuri', 'Zakhar', 'Artem'
    ],
    girl: [
      'Anastasia', 'Anna', 'Daria', 'Ekaterina', 'Elena', 'Galina', 'Irina', 'Katya',
      'Marina', 'Natasha', 'Olga', 'Polina', 'Sofia', 'Svetlana', 'Tatiana',
      'Valentina', 'Vera', 'Victoria', 'Yelena', 'Zoya'
    ]
  }
};

export function generateNames(
  startsWith: string = '',
  length: string = '',
  nationality: string = '',
  gender: 'boy' | 'girl' = 'boy'
): string[] {
  const namePool = Object.values(NAMES_BY_NATIONALITY).map(nat => nat[gender]).flat();
  let filteredNames = nationality 
    ? NAMES_BY_NATIONALITY[nationality]?.[gender] || namePool
    : namePool;
  
  if (startsWith) {
    filteredNames = filteredNames.filter(name => 
      name.toLowerCase().startsWith(startsWith.toLowerCase())
    );
  }
  
  if (length) {
    const nameLength = parseInt(length);
    filteredNames = filteredNames.filter(name => name.length === nameLength);
  }
  
  const shuffled = filteredNames.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 6);
}