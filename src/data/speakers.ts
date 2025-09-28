export interface Speaker {
  id: string;
  name: string;
  designation: string;
  company: string;
  bio: string;
  image: string;
  expertise: string[];
  socialMedia: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  talkTitle: string;
  talkDescription: string;
  talkTime: string;
}

export const speakers: Speaker[] = [
  {
    id: "dr-smith",
    name: "Dr. Michael Smith",
    designation: "Chief Technology Officer",
    company: "Tesla Energy Systems",
    bio: "Dr. Michael Smith is a renowned expert in sustainable energy systems and electric vehicle technology. With over 15 years of experience in the automotive industry, he has led groundbreaking projects in battery management systems and renewable energy integration.",
    image: "/speakers/dr-smith.jpg",
    expertise: ["Electric Vehicles", "Battery Systems", "Renewable Energy", "Power Electronics"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/drmichaelsmith",
      twitter: "https://twitter.com/drsmith_tesla",
      website: "https://michaelsmith.tech"
    },
    talkTitle: "The Future of Electric Mobility and Energy Storage",
    talkDescription: "Exploring the latest advancements in electric vehicle technology, battery management systems, and the integration of renewable energy sources in modern transportation systems.",
    talkTime: "10:00 AM - 11:00 AM"
  },
  {
    id: "prof-patel",
    name: "Prof. Anjali Patel",
    designation: "Director of AI Research",
    company: "Google DeepMind",
    bio: "Prof. Anjali Patel is a leading researcher in artificial intelligence and machine learning applications in electrical engineering. She has published over 100 research papers and holds 15 patents in AI-driven automation systems.",
    image: "/speakers/prof-patel.jpg",
    expertise: ["Artificial Intelligence", "Machine Learning", "IoT", "Smart Grids"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/profanjalipatel",
      github: "https://github.com/anjali-ai",
      website: "https://anjalipatel.ai"
    },
    talkTitle: "AI-Powered Smart Grid Technologies",
    talkDescription: "Understanding how artificial intelligence and machine learning are revolutionizing power grid management, predictive maintenance, and energy distribution systems.",
    talkTime: "11:30 AM - 12:30 PM"
  },
  {
    id: "dr-chen",
    name: "Dr. Wei Chen",
    designation: "Senior Researcher",
    company: "Samsung Semiconductor",
    bio: "Dr. Wei Chen specializes in next-generation semiconductor technologies and quantum computing applications. He leads Samsung's quantum research division and has contributed to major breakthroughs in quantum processors.",
    image: "/speakers/dr-chen.jpg",
    expertise: ["Semiconductor Technology", "Quantum Computing", "Nanotechnology", "VLSI Design"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/drweichen",
      twitter: "https://twitter.com/weichen_quantum"
    },
    talkTitle: "Quantum Computing: The Next Frontier in Electronics",
    talkDescription: "Delving into the principles of quantum computing, current technological challenges, and the potential impact on future electronic systems and communication networks.",
    talkTime: "2:00 PM - 3:00 PM"
  },
  {
    id: "eng-williams",
    name: "Sarah Williams",
    designation: "Lead Systems Engineer",
    company: "SpaceX",
    bio: "Sarah Williams is a systems engineer at SpaceX with expertise in spacecraft electrical systems and satellite communication technologies. She has worked on multiple successful missions including Crew Dragon and Starlink projects.",
    image: "/speakers/sarah-williams.jpg",
    expertise: ["Spacecraft Systems", "Satellite Communication", "RF Engineering", "Mission Critical Systems"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/sarahwilliams-spacex",
      twitter: "https://twitter.com/sarah_spacex"
    },
    talkTitle: "Electrical Systems in Space: Challenges and Innovations",
    talkDescription: "Exploring the unique challenges of designing electrical systems for space applications, from power management in zero gravity to radiation-hardened electronics.",
    talkTime: "3:30 PM - 4:30 PM"
  },
  {
    id: "dr-kumar",
    name: "Dr. Rajesh Kumar",
    designation: "Head of Innovation",
    company: "Siemens India",
    bio: "Dr. Rajesh Kumar leads innovation initiatives at Siemens India, focusing on Industry 4.0 technologies and smart manufacturing solutions. He has extensive experience in industrial automation and digitalization.",
    image: "/speakers/dr-kumar.jpg",
    expertise: ["Industry 4.0", "Industrial Automation", "Smart Manufacturing", "Digital Transformation"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/drrajeshkumar",
      website: "https://rajeshkumar.tech"
    },
    talkTitle: "Industry 4.0: Transforming Manufacturing with Smart Technologies",
    talkDescription: "Examining how advanced electrical and electronic systems are enabling the fourth industrial revolution through IoT, AI, and intelligent automation solutions.",
    talkTime: "5:00 PM - 6:00 PM"
  }
];