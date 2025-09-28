export interface Event {
  id: string;
  title: string;
  category: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  eligibility: string[];
  rules: string[];
  requirements: string[];
  prizes: {
    first: string;
    second: string;
    third: string;
  };
  registrationFee: string;
  contactPerson: {
    name: string;
    email: string;
    phone: string;
  };
  venue: string;
  date: string;
  time: string;
}

// Technical Events from PDF
export const technicalEvents: Event[] = [
  {
    id: "iquid",
    title: "IQUID",
    category: "Technical",
    icon: "Brain",
    shortDescription: "Crack the codes, chase the clues, conquer the quest!",
    fullDescription: "IQUID is a unique challenge open to all engineering streams. Participants face a series of technical puzzles in sequential stages, each tougher than the last. Every stage tests IQ, memory, and problem-solving. The one who clears all twists and turns will be crowned champion!",
    eligibility: [
      "Open to all engineering students",
      "Team participation recommended"
    ],
    rules: [
      "The competition unfolds in three distinct phases: Preliminary, Secondary, and Finale",
      "Each participating team will tackle a variety of questions spanning technical, logical, and puzzles",
      "The first and second rounds grant a total time of 15 minutes. Each of these rounds includes 10-15 questions",
      "The finale round consists of technical questions, with a specified timeframe of 10 minutes",
      "Winners will be decided based on the time taken and correctness of answers in the final round"
    ],
    requirements: [
      "Basic technical knowledge across engineering domains",
      "Problem-solving skills",
      "Quick thinking ability"
    ],
    prizes: {
      first: "₹15,000 + Certificate + Trophy",
      second: "₹10,000 + Certificate",
      third: "₹5,000 + Certificate"
    },
    registrationFee: "₹300 per team",
    contactPerson: {
      name: "C. Joseph Emmanuel",
      email: "joseph.emmanuel@ekna.org",
      phone: "+91 90435 93247"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "09:00 AM - 12:00 PM"
  },
  {
    id: "mr-coder",
    title: "Mr. Coder",
    category: "Technical",
    icon: "Code",
    shortDescription: "Coding Contest - Become the ultimate coder!",
    fullDescription: "Mr. Coder is an exciting coding contest designed to test your problem-solving, logic, debugging, and programming skills. Participants will face multiple challenges that progressively increase in difficulty. The top scorers will be rewarded, and the champion will earn the prestigious title of 'Mr. Coder'.",
    eligibility: [
      "Open to all engineering students",
      "Individual participation",
      "Must have HackerRank account"
    ],
    rules: [
      "Round 1: Debugging & Logic Building - Small coding tasks, debugging, logic tracing, output prediction",
      "Tests basic programming, syntax, and reasoning. Top 10 scorers move to Round 2",
      "Round 2: Problem Solving Challenge - Algorithmic problems of different difficulty",
      "Code must be optimized, correct, and written in C, C++, Python, or Java",
      "Scoring based on test cases passed, efficiency, and readability"
    ],
    requirements: [
      "HackerRank account",
      "Programming knowledge in C/C++/Python/Java",
      "Laptop with programming environment"
    ],
    prizes: {
      first: "₹12,000 + Certificate + Trophy",
      second: "₹8,000 + Certificate",
      third: "₹4,000 + Certificate"
    },
    registrationFee: "₹250 per participant",
    contactPerson: {
      name: "Abeesh",
      email: "abeesh@ekna.org",
      phone: "+91 90433 24402"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "10:00 AM - 04:00 PM"
  },
  {
    id: "electro-hunt",
    title: "Electro Hunt",
    category: "Technical",
    icon: "Zap",
    shortDescription: "Think it, Draw it, Build it!",
    fullDescription: "Electro Hunt is a two-round event testing circuit knowledge, accuracy, and practical skills. In Round 1, participants draw the correct circuit for a given problem. In Round 2, qualified teams build the working circuit on a breadboard with provided parts. The event is to check the technical knowledge, hands-on skill, neatness, and clarity.",
    eligibility: [
      "Individual or teams of 2 members",
      "Basic circuit knowledge required"
    ],
    rules: [
      "Participation is allowed individually or in teams of 2 members",
      "Use of mobile phones, laptops, or external references is strictly prohibited during both rounds",
      "Round 1: Circuit Drawing - Draw correct circuit diagram neatly with standard symbols (20–30 minutes)",
      "Round 2: Practical Circuit Building - Assemble and demonstrate working circuit (30–45 minutes)",
      "Extra credit will be awarded for neat connections, innovative approaches, and clear explanations",
      "Judges decisions will be final and binding"
    ],
    requirements: [
      "Basic knowledge of analog and digital circuits",
      "Understanding of electrical/electronic symbols",
      "Circuit analysis skills"
    ],
    prizes: {
      first: "₹10,000 + Certificate + Trophy",
      second: "₹6,000 + Certificate",
      third: "₹3,000 + Certificate"
    },
    registrationFee: "₹200 per team",
    contactPerson: {
      name: "Suren",
      email: "suren@ekna.org",
      phone: "+91 88254 38852"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "11:00 AM - 03:00 PM"
  },
  {
    id: "techno-talk",
    title: "Techno Talk",
    category: "Technical",
    icon: "Mic",
    shortDescription: "Not just a talk, but a spark of innovation",
    fullDescription: "Techno Talk is a platform where you are given an open floor to articulate the ideas you admire, the aspirations you cherish, and the perspectives you wish to share. It is an opportunity to express your ideology, vision, and philosophy about the world of Engineering. The topic is yours, just as the forum is.",
    eligibility: [
      "Individual event only",
      "Open to all engineering students",
      "Good communication skills required"
    ],
    rules: [
      "Techno talk is an individual event consisting of two rounds",
      "In the first round, you are free to choose a topic based ONLY on Engineering and technologies. You should speak for 3-4 minutes",
      "The top 7 scorers from the first round will qualify for the second round",
      "In the second round, technical topics will be given on the spot. You should speak on the given topic for 2–3 minutes",
      "Questions will be asked based on your speech",
      "The top 3 scorers will be selected from the second round. Scores from both rounds will be added to determine the winners",
      "The decision of the judges will be final"
    ],
    requirements: [
      "Excellent communication skills",
      "Knowledge of engineering and technology topics",
      "Confidence in public speaking"
    ],
    prizes: {
      first: "₹8,000 + Certificate + Trophy",
      second: "₹5,000 + Certificate",
      third: "₹2,500 + Certificate"
    },
    registrationFee: "₹150 per participant",
    contactPerson: {
      name: "Rochan A",
      email: "rochan@ekna.org",
      phone: "+91 63827 57953"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "02:00 PM - 05:00 PM"
  },
  {
    id: "project-expo",
    title: "Project Expo",
    category: "Technical",
    icon: "Lightbulb",
    shortDescription: "Innovations today, solutions for tomorrow",
    fullDescription: "This event is a vibrant stage for students to unleash their creativity by showcasing innovative projects, prototypes, and research ideas that tackle real-world challenges. Aligned with the Sustainable Development Goals (SDGs), it sparks interdisciplinary collaboration and technical excellence. Students will get the chance to pitch their ideas to a panel of faculty, industry experts, and innovators gaining not just feedback, but also recognition, exposure, and opportunities for future growth.",
    eligibility: [
      "Teams of 2-4 members",
      "Interdisciplinary teams allowed",
      "A student can join only one team"
    ],
    rules: [
      "Project Topic: Sustainable Development Goals (SDGs)",
      "Project type: Hardware / Software / Simulation / Hybrid",
      "Abstract (≤ 300 words) must be submitted before deadline",
      "The presentation should be in the specified format and should not exceed 10 slides",
      "Each team gets 5 minutes to present + 3 minutes for Q&A"
    ],
    requirements: [
      "Project aligned with SDGs",
      "Working prototype or simulation",
      "Presentation slides (max 10)",
      "Abstract submission"
    ],
    prizes: {
      first: "₹20,000 + Certificate + Trophy",
      second: "₹12,000 + Certificate",
      third: "₹6,000 + Certificate"
    },
    registrationFee: "₹400 per team",
    contactPerson: {
      name: "Sabariakash K.K",
      email: "sabariakash@ekna.org",
      phone: "+91 78718 96996"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "09:00 AM - 05:00 PM"
  },
  {
    id: "drei-d-modula",
    title: "Drei D-Modula",
    category: "Technical",
    icon: "Box",
    shortDescription: "Where creativity hits the grid and precision runs the show",
    fullDescription: "Welcome to Drei D Modula — where creativity hits the grid and precision runs the show. Every curve you flex and every detail you lock in carries the essence of CAD Modelling: the core of design, colliding into excellence.",
    eligibility: [
      "Teams of 2 members only",
      "SOLIDWORKS experience required"
    ],
    rules: [
      "Each team must have 2 members",
      "Round 1 (Prelims): Topics (Drone, Electric Machines, Indoor Robotics) will be given 2 days before",
      "Teams must prepare a model on their chosen topic and give a short presentation",
      "Qualification: From Round 1, 2 teams per topic move to Round 2",
      "Round 2 (Final): On-spot modelling within a fixed time",
      "Software: Only SOLIDWORKS (stable release) is allowed. Other CAD tools are not permitted",
      "Teams must bring their own laptops with valid license/student license proof",
      "Judges may check software version"
    ],
    requirements: [
      "Laptop with SOLIDWORKS and valid license",
      "CAD modeling expertise",
      "License verification documents"
    ],
    prizes: {
      first: "₹15,000 + Certificate + Trophy",
      second: "₹9,000 + Certificate",
      third: "₹4,500 + Certificate"
    },
    registrationFee: "₹350 per team",
    contactPerson: {
      name: "Roshan R",
      email: "roshan@ekna.org",
      phone: "+91 63823 34133"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "10:00 AM - 04:00 PM"
  },
  {
    id: "water-rocketry",
    title: "Water Rocketry",
    category: "Technical",
    icon: "Rocket",
    shortDescription: "Prepare for liftoff! Design and launch water rockets",
    fullDescription: "Prepare for liftoff! In this exciting hands-on engineering event, participants will design and launch their own handmade water rockets. The mission is simple – achieve the maximum flight distance. Only the rockets that master aerodynamics, stability, and creativity will soar above the rest.",
    eligibility: [
      "Maximum 2 members per team",
      "Solo entries welcome",
      "Basic understanding of aerodynamics preferred"
    ],
    rules: [
      "Only 2-liter plastic bottles are permitted",
      "Each team gets 2 chances; the best flight distance will be recorded",
      "Launches will be conducted at approximately 80 psi",
      "Maximum 2 members per team, solo entries are welcome",
      "A standard launch pad will be provided, but teams may bring their own custom launch pad for enhanced performance"
    ],
    requirements: [
      "2-liter plastic bottle",
      "Basic understanding of aerodynamics",
      "Rocket design and construction materials"
    ],
    prizes: {
      first: "₹8,000 + Certificate + Trophy",
      second: "₹5,000 + Certificate",
      third: "₹2,500 + Certificate"
    },
    registrationFee: "₹150 per team",
    contactPerson: {
      name: "Abishek",
      email: "abishek@ekna.org",
      phone: "+91 89254 10299"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "02:00 PM - 05:00 PM"
  }
];

// Non-Technical Events
export const nonTechnicalEvents: Event[] = [
  {
    id: "analogy-o-mania",
    title: "Analogy-O-Mania",
    category: "Non-Technical",
    icon: "PuzzlePiece",
    shortDescription: "Interactive quiz on science, GK, and electrical concepts",
    fullDescription: "Analogy-O-Mania is an interactive quiz on basic science, general knowledge, and electrical concepts. Teams must find answers using pictures and hints. The quiz has 2 rounds, testing quick thinking and connections. Points are given based on how fast each question is answered.",
    eligibility: [
      "Teams of 2 participants",
      "Basic science knowledge required"
    ],
    rules: [
      "Each team should have 2 participants",
      "Only one device is allowed per team",
      "No use of mobile phones or reference materials is allowed",
      "Kahoot app should be installed in the device",
      "Teams with highest scores from Round 1 will advance to Round 2",
      "Judge decision will be final"
    ],
    requirements: [
      "Device with Kahoot app installed",
      "Basic science and electrical knowledge",
      "Quick thinking skills"
    ],
    prizes: {
      first: "₹6,000 + Certificate + Trophy",
      second: "₹4,000 + Certificate",
      third: "₹2,000 + Certificate"
    },
    registrationFee: "₹100 per team",
    contactPerson: {
      name: "Jegan Raj R",
      email: "jeganraj@ekna.org",
      phone: "+91 96007 55197"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "01:00 PM - 03:00 PM"
  },
  {
    id: "paper-presentation",
    title: "Paper Presentation",
    category: "Non-Technical",
    icon: "FileText",
    shortDescription: "Present research findings and innovative ideas",
    fullDescription: "Paper presentations are a way to communicate research findings, insights, or ideas to an audience. They are typically delivered in front of an audience that may consist of peers, experts or colleagues interested in the topic. They usually follow a structured format. After presentation there is usually a Q&A session for clarifications.",
    eligibility: [
      "Maximum 3 members per team",
      "Research or project work required"
    ],
    rules: [
      "Paper must be in IEEE format, not exceeding 15 pages; presentation file must be in .ppt",
      "Soft copy of paper and PPT must be mailed one week before the event",
      "Mail subject should include paper title, theme, team name, and authors' names",
      "Hard copy must be submitted to the judges before the presentation in a stick file",
      "Each team gets 6 minutes for presentation + 3 minutes for Q&A",
      "Last date for submission is one week before the presentation",
      "Judges' decision will be final and binding"
    ],
    requirements: [
      "IEEE format paper (max 15 pages)",
      "PowerPoint presentation",
      "Research documentation",
      "Hard copy submission"
    ],
    prizes: {
      first: "₹10,000 + Certificate + Trophy",
      second: "₹6,000 + Certificate",
      third: "₹3,000 + Certificate"
    },
    registrationFee: "₹200 per team",
    contactPerson: {
      name: "D. Kaleeshwaran",
      email: "kaleeshwaran@ekna.org",
      phone: "+91 88256 14654"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "10:00 AM - 04:00 PM"
  },
  {
    id: "poster-presentation",
    title: "Poster Presentation",
    category: "Non-Technical",
    icon: "Image",
    shortDescription: "Showcase creativity and technical knowledge through posters",
    fullDescription: "An event to showcase your creativity and technical knowledge through impactful posters. Participants can visually express ideas, solutions, or innovations in any field. The topic is open, participants are free to choose any area of their interest. It's all about clarity, creativity, and communication on a single canvas.",
    eligibility: [
      "Individual or team of maximum 2 members",
      "Creative and technical knowledge"
    ],
    rules: [
      "Only 11.7 x 16.5 inches size chart should be used",
      "Poster must include Title, Objective, Concept, and Conclusion",
      "5 minutes for presentation + 2 minutes for Q&A",
      "Copied content will lead to disqualification",
      "Creativity, Clarity of Content, and Presentation Skills will be evaluated",
      "The judges' decision will be final and binding"
    ],
    requirements: [
      "Poster printed on quality paper (11.7 x 16.5 inches)",
      "Original creative content",
      "Clear presentation structure"
    ],
    prizes: {
      first: "₹5,000 + Certificate + Trophy",
      second: "₹3,000 + Certificate",
      third: "₹1,500 + Certificate"
    },
    registrationFee: "₹150 per team",
    contactPerson: {
      name: "Giridharan",
      email: "giridharan@ekna.org",
      phone: "+91 86003 95510"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "11:00 AM - 03:00 PM"
  },
  // Non-Technical Events from PDF
  {
    id: "battle-of-brains",
    title: "Battle of Brains",
    category: "Non-Technical",
    icon: "Brain",
    shortDescription: "Put your Knowledge to the Test in this Mind-Boggling Quiz",
    fullDescription: "Are you ready to put your Knowledge to the Test? Join us for an Exhilarating and Mind-Boggling experience at BATTLE OF BRAINS where intellect and quick thinking take centre stage. Get ready to answer questions that span a wide range of topics from Science, Mathematics, Aptitude, Logical Reasoning, General Knowledge and some tricky questions. Compete against other Brilliant Minds, proving that you have what it takes to be the ultimate quiz champion.",
    eligibility: [
      "Teams of 2 members only",
      "General knowledge across diverse topics required"
    ],
    rules: [
      "A Team should consist of Two Members",
      "There will be Three Rounds. Those who crack the First Round and Second Round Criteria shall attend the Third Round",
      "First Round will be a Pen and Paper based round. Second Round will be conducted in online mode through 'Kahoot' Mobile Application",
      "Third Round will be revealed on the Spot",
      "Participants are expected to maintain a respectful and sportsmanship attitude throughout the event",
      "Any form of cheating, plagiarism or disruptive behaviour will result in immediate disqualification",
      "Participants must adhere to the designated time limits for each question or round"
    ],
    requirements: [
      "Knowledge of Science, Mathematics, Aptitude",
      "Logical Reasoning skills",
      "General Knowledge",
      "Mobile device with Kahoot app for Round 2"
    ],
    prizes: {
      first: "₹8,000 + Certificate + Trophy",
      second: "₹5,000 + Certificate",
      third: "₹3,000 + Certificate"
    },
    registrationFee: "₹150 per team",
    contactPerson: {
      name: "Dayanithy T",
      email: "dayanithy@ekna.org",
      phone: "+91 6383754803"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "10:00 AM - 01:00 PM"
  },
  {
    id: "rock-the-mic",
    title: "Rock the Mic",
    category: "Non-Technical",
    icon: "Mic",
    shortDescription: "Singing Contest - Unleash the power of your voice",
    fullDescription: "Unleash the power of your voice and let the rhythm take over! This event is all about celebrating music, talent, and passion. Whether it's a soulful melody, a rocking performance, or a classical note, the stage is yours to shine. Step into the spotlight, captivate the audience, and make every note count.",
    eligibility: [
      "Individual participation only",
      "Good singing ability required"
    ],
    rules: [
      "Duration of the song can be 3 to 4 minutes",
      "The song can be either in the form of classical or western",
      "Only karaoke is allowed, so all are requested to bring your karaoke in the pen-drive itself",
      "The participants will be judged based on the song selection, voice quality, rhythm, and also based on their appeal to the audience",
      "Obscenity of any kind of activities is prohibited",
      "Decision of the judges will be final",
      "The general guidelines and time constraints must be rigorously adhered in order to avoid participants' disqualification"
    ],
    requirements: [
      "Karaoke track on pen-drive",
      "Good voice quality and rhythm",
      "Song selection (classical or western)"
    ],
    prizes: {
      first: "₹6,000 + Certificate + Trophy",
      second: "₹4,000 + Certificate",
      third: "₹2,000 + Certificate"
    },
    registrationFee: "₹100 per participant",
    contactPerson: {
      name: "Jana S",
      email: "jana@ekna.org",
      phone: "+91 8870036346"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "02:00 PM - 05:00 PM"
  },
  {
    id: "dance-battle",
    title: "Dance Battle",
    category: "Non-Technical",
    icon: "Music",
    shortDescription: "Set the stage on fire with your moves",
    fullDescription: "Are you ready to set the stage on fire with your moves? Join us for an electrifying dance competition where rhythm, expression, and creativity take centre stage. Whether it's Classical, Western, Freestyle, or Fusion, showcase your talent and captivate the audience with your performance. Compete against other passionate dancers and prove that you have what it takes to be the ultimate dance star.",
    eligibility: [
      "Solo, Duo, or Group (maximum 6 members)",
      "All dance forms welcome"
    ],
    rules: [
      "A team can consist of Solo, Duo, or Group (maximum 6 members in a group)",
      "Participants must bring their songs in .mp3 format on a pen drive or submit it in advance",
      "Time limit: Solo/Duo – 3 to 4 minutes; Group – 5 to 6 minutes. Exceeding time may lead to negative marking",
      "Vulgarity, inappropriate gestures, or disrespectful moves will lead to immediate disqualification",
      "Props are allowed but must be managed by the participants themselves",
      "Decision of the judges will be final and binding",
      "Participants are expected to maintain a respectful and sportsmanship attitude throughout the event"
    ],
    requirements: [
      "Dance track in .mp3 format on pen-drive",
      "Props (if required, managed by participants)",
      "Appropriate costumes"
    ],
    prizes: {
      first: "₹8,000 + Certificate + Trophy",
      second: "₹5,000 + Certificate",
      third: "₹3,000 + Certificate"
    },
    registrationFee: "₹150 per team",
    contactPerson: {
      name: "Gowtham",
      email: "gowtham@ekna.org",
      phone: "+91 6385557876"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "03:00 PM - 06:00 PM"
  },
  {
    id: "gamers-clash",
    title: "Gamers Clash",
    category: "Non-Technical",
    icon: "Gamepad2",
    shortDescription: "E-Sports tournament featuring PUBG, Free Fire, Mini Militia, and Ludo",
    fullDescription: "Step into the world of competitive gaming where skill meets strategy! Our college proudly presents an exciting E-Sports tournament featuring popular titles like PUBG, Free Fire, Mini Militia, and Ludo, bringing together the best gamers on campus. This event is not just about gaming—it's about teamwork, focus, and adrenaline-pumping competition.",
    eligibility: [
      "Teams as per game requirements",
      "Gaming skills required"
    ],
    rules: [
      "For BGMI and FREEFIRE matches will be followed by squad mode (only 4 players per team allowed)",
      "For MINI MILITIA 2-3 players per team in deathmatches or survival according to the participants",
      "LUDO is only for girls",
      "Strictly no cheatings, MODs, APKs, or any other use of third-party apps",
      "Participants are instructed to bring their own headphones and charging devices"
    ],
    requirements: [
      "Gaming devices (mobile/tablet)",
      "Headphones and charging devices",
      "Game apps installed",
      "Team coordination skills"
    ],
    prizes: {
      first: "₹10,000 + Certificate + Trophy",
      second: "₹6,000 + Certificate",
      third: "₹3,000 + Certificate"
    },
    registrationFee: "₹200 per team",
    contactPerson: {
      name: "Methun P",
      email: "methun@ekna.org",
      phone: "+91 6374488025"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "09:00 AM - 06:00 PM"
  },
  {
    id: "cine-spark",
    title: "Cine Spark",
    category: "Non-Technical",
    icon: "Video",
    shortDescription: "Short Film Competition - Showcase your filmmaking skills",
    fullDescription: "The Short Film Competition is an opportunity for students to showcase their creativity, storytelling, and filmmaking skills. Participants can explore themes such as social awareness, culture, comedy, thriller, motivation, or any meaningful subject. The event encourages originality, teamwork, and cinematic expression.",
    eligibility: [
      "Teams of 1-10 members (including actors, director, editor)",
      "Filmmaking skills required"
    ],
    rules: [
      "Team Size: 1–10 members (including actors, director, editor, etc.)",
      "Duration: 5 – 15 minutes (including credits). Films exceeding time limits may face penalties",
      "Submission Format: MP4, 720p (HD Preferred), submit via Pen-drive for backup",
      "Originality: Plagiarized content will lead to disqualification",
      "Censorship: No obscene language or political propaganda",
      "Theme: Social awareness, Comedy, Thriller, Meaningful, Motivational etc.",
      "Video should be sent before 3 days of the symposium"
    ],
    requirements: [
      "Filmmaking equipment",
      "Editing software knowledge",
      "Creative storytelling ability",
      "Video submission in MP4 format"
    ],
    prizes: {
      first: "₹12,000 + Certificate + Trophy",
      second: "₹8,000 + Certificate",
      third: "₹4,000 + Certificate"
    },
    registrationFee: "₹300 per team",
    contactPerson: {
      name: "Anbuchezhiyan",
      email: "stepwell30@gmail.com",
      phone: "+91 6380636335"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "10:00 AM - 04:00 PM"
  },
  {
    id: "mona-lisa",
    title: "Mona Lisa",
    category: "Non-Technical",
    icon: "Palette",
    shortDescription: "Modern Art Program - Visions of the Future",
    fullDescription: "The Modern Art Program is a celebration of imagination and creativity, where participants showcase their artistic brilliance through modern and contemporary expressions. Each participant's will be given a time period of 1 hour. The artwork that displays originality, innovation, and aesthetic appeal will be declared the winner.",
    eligibility: [
      "Individual participation only",
      "Artistic skills required"
    ],
    rules: [
      "Individual participation is allowed",
      "Artwork may include abstract, still life, cubism, landscape, portraits, etc.",
      "Artwork can be on any sheet, but the size should be 8.3*11.7 inches",
      "Participants must carry their own materials; none will be provided at the venue",
      "A fixed time will be allotted for completion. Pre-Prepared or Initial work will not be accepted",
      "Participants must explain their artwork before the judges",
      "The Judges' decision will be final"
    ],
    requirements: [
      "Art materials (paints, brushes, pencils, etc.)",
      "Drawing/painting paper (8.3*11.7 inches)",
      "Creative and artistic skills",
      "Time management (1 hour limit)"
    ],
    prizes: {
      first: "₹5,000 + Certificate + Trophy",
      second: "₹3,000 + Certificate",
      third: "₹1,500 + Certificate"
    },
    registrationFee: "₹100 per participant",
    contactPerson: {
      name: "Abdul Rahman S",
      email: "abdulrahman@ekna.org",
      phone: "+91 7358477266"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "11:00 AM - 01:00 PM"
  },
  {
    id: "twistq-cube-solving",
    title: "Twistq Cube Solving",
    category: "Non-Technical",
    icon: "Box",
    shortDescription: "Rubik's Cube Speed Solving Competition",
    fullDescription: "Are you a speed cube solver...? Then, here is the suitable platform you are searching for...! Unleash the power of your mind with Rubik's cube...Twist, turn and solve the Rubik's cube puzzle...Let's cube it...! Join the Rubik's cube revolution!!!",
    eligibility: [
      "Individual participation only",
      "Cube solving skills required"
    ],
    rules: [
      "Only 3×3×3 cubes are allowed",
      "All must bring their own Rubik's cube. No cubes will be provided here",
      "Event organizers won't be responsible for any faults in the Rubik's cube",
      "The cubes must not have any electronic components and any type of modifications",
      "Minimum of 3 rounds will be conducted",
      "The results will be declared on Time-basis [Shortest Average Time]",
      "The judge's decision is final",
      "Violation of the above rules might end in disqualification from the event"
    ],
    requirements: [
      "Own 3×3×3 Rubik's cube",
      "Speed cubing skills",
      "No electronic modifications allowed"
    ],
    prizes: {
      first: "₹4,000 + Certificate + Trophy",
      second: "₹2,500 + Certificate",
      third: "₹1,500 + Certificate"
    },
    registrationFee: "₹75 per participant",
    contactPerson: {
      name: "Praveen Kumar",
      email: "praveen@ekna.org",
      phone: "+91 9361450175"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "02:00 PM - 04:00 PM"
  },
  {
    id: "carnival-couture",
    title: "Carnival Couture",
    category: "Non-Technical",
    icon: "Shirt",
    shortDescription: "Fashion Show - Open Theme",
    fullDescription: "Carnival Couture is a vibrant fashion extravaganza that celebrates creativity, elegance, and style. Participants will showcase their fashion sense through unique costumes, innovative designs, and confident ramp walks. The show is a platform for self-expression, originality, and glamour, where the most striking and stylish performance will be crowned the winner.",
    eligibility: [
      "Individual and group participation allowed",
      "Fashion sense and confidence required"
    ],
    rules: [
      "Both individual and group participation are allowed",
      "Outfits may be self-designed, themed, or creatively styled using available materials",
      "Participants must arrange their own costumes and accessories; none will be provided at the venue",
      "Each participant/group will have a fixed time slot of 7-10 min for their performance",
      "Pre-recorded tracks can be used; participants should submit music in advance",
      "Vulgarity or offensive content in costumes, themes, or performances will lead to disqualification",
      "Participants must briefly explain the inspiration behind their look to the judges",
      "The Judges' decision will be final and binding"
    ],
    requirements: [
      "Own costumes and accessories",
      "Music track (optional)",
      "Confidence and ramp walk skills",
      "Creative fashion sense"
    ],
    prizes: {
      first: "₹8,000 + Certificate + Trophy",
      second: "₹5,000 + Certificate",
      third: "₹3,000 + Certificate"
    },
    registrationFee: "₹200 per participant/team",
    contactPerson: {
      name: "Siva Prasath KR",
      email: "sivaprasath@ekna.org",
      phone: "+91 9688646560"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "04:00 PM - 07:00 PM"
  },
  {
    id: "pixel-perfect-photography",
    title: "Pixel Perfect Photography",
    category: "Non-Technical",
    icon: "Camera",
    shortDescription: "Photography Contest - Open Theme",
    fullDescription: "Capture the world through your lens! The Photography Contest is all about creativity, perspective, and storytelling without words. Participants will showcase their skills in framing, lighting, and imagination to bring out powerful stories in a single shot. Whether it's a candid moment, a scenic view, or an abstract composition, every click counts.",
    eligibility: [
      "Individual participation only",
      "Photography skills required"
    ],
    rules: [
      "All photos must be taken by the participant (no plagiarism or stock images)",
      "Photos can be clicked using DSLR, digital cameras, or mobile phones",
      "Basic editing (brightness, contrast, cropping, colour correction) is allowed",
      "Photo should be in .jpg format",
      "You may be asked to explain how you enjoyed taking the shot",
      "Judge's decision is final and binding",
      "Photos should be sent before 3 days of the symposium"
    ],
    requirements: [
      "Camera/smartphone with good quality",
      "Photography skills",
      "Basic photo editing knowledge",
      "Submit photos 3 days before event"
    ],
    prizes: {
      first: "₹6,000 + Certificate + Trophy",
      second: "₹4,000 + Certificate",
      third: "₹2,000 + Certificate"
    },
    registrationFee: "₹100 per participant",
    contactPerson: {
      name: "Nandhakumar",
      email: "nandhakumar20030@gmail.com",
      phone: "+91 9080394883"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "09:00 AM - 06:00 PM"
  },
  {
    id: "laff-o-mania",
    title: "Laff-O-Mania",
    category: "Non-Technical",
    icon: "Laugh",
    shortDescription: "Stand-Up Comedy - Make the audience laugh!",
    fullDescription: "Get ready to laugh! The Stand-Up Comedy event is your chance to grab the mic and tickle the audiences by your humour and storytelling. Participants will showcase their comic timing, observational skills, and creativity to entertain the crowd. Whether it's quirky one-liners, relatable jokes, or hilarious life experiences, the stage is yours to own!",
    eligibility: [
      "Individual participation only",
      "Comedy and presentation skills required"
    ],
    rules: [
      "The event is for individual participants (no group/duo acts)",
      "Each participant will get 4–6 minutes to perform. Exceeding the time may lead to point deductions",
      "Participants must perform their own content. No Plagiarized or copied content",
      "Strictly avoid abusive, offensive, or disrespectful language/content (related to religion, caste, gender, or politics)",
      "Minimal props can be used, but the focus should remain on performance and delivery",
      "Decision of the judges will be final"
    ],
    requirements: [
      "Original comedy content",
      "Good comic timing",
      "Public speaking confidence",
      "Clean humor (no offensive content)"
    ],
    prizes: {
      first: "₹5,000 + Certificate + Trophy",
      second: "₹3,000 + Certificate",
      third: "₹1,500 + Certificate"
    },
    registrationFee: "₹100 per participant",
    contactPerson: {
      name: "Naveen R",
      email: "naveen@ekna.org",
      phone: "+91 9043641710"
    },
    venue: "Anna University Regional Campus, Coimbatore",
    date: "March 15, 2025",
    time: "07:00 PM - 09:00 PM"
  }
];

// Combine all events
export const events = [...technicalEvents, ...nonTechnicalEvents];