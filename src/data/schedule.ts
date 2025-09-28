export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  type: "keynote" | "event" | "break" | "networking" | "workshop" | "closing";
  venue: string;
  speaker?: string;
  duration: string;
}

export interface DaySchedule {
  date: string;
  day: string;
  items: ScheduleItem[];
}

export const schedule: DaySchedule[] = [
  {
    date: "March 15, 2025",
    day: "Ekna 2025 - Engineering Excellence Day",
    items: [
      {
        id: "registration",
        time: "8:00 AM",
        title: "Registration & Welcome Coffee",
        description: "Participant registration, welcome kit distribution, and networking over coffee",
        type: "networking",
        venue: "Main Lobby",
        duration: "60 minutes"
      },
      {
        id: "opening",
        time: "9:00 AM",
        title: "Opening Ceremony",
        description: "Welcome address by the Dean and introduction to Ekna 2025",
        type: "event",
        venue: "Main Auditorium",
        speaker: "Dean, Faculty of Engineering",
        duration: "30 minutes"
      },
      {
        id: "circuit-start",
        time: "9:30 AM",
        title: "Circuit Design Challenge Begins",
        description: "Teams compete in designing innovative electronic circuits",
        type: "event",
        venue: "EEE Laboratory Block",
        duration: "3 hours"
      },
      {
        id: "robo-setup",
        time: "10:00 AM",
        title: "Robo Race Setup & Testing",
        description: "Teams set up and test their autonomous robots",
        type: "event",
        venue: "Ground Floor Arena",
        duration: "60 minutes"
      },
      {
        id: "coffee-break",
        time: "10:30 AM",
        title: "Coffee Break",
        description: "Networking break with refreshments",
        type: "break",
        venue: "Main Lobby",
        duration: "30 minutes"
      },
      {
        id: "robo-race",
        time: "11:00 AM",
        title: "Robo Race Championship",
        description: "Autonomous robots navigate challenging obstacle courses",
        type: "event",
        venue: "Ground Floor Arena",
        duration: "2 hours"
      },
      {
        id: "workshop1",
        time: "11:30 AM",
        title: "Workshop: PCB Design Fundamentals",
        description: "Hands-on workshop on PCB design using modern CAD tools",
        type: "workshop",
        venue: "Workshop Hall A",
        speaker: "Industry Expert",
        duration: "90 minutes"
      },
      {
        id: "lunch",
        time: "1:00 PM",
        title: "Networking Lunch",
        description: "Networking lunch for all participants with live updates from competitions",
        type: "break",
        venue: "Campus Cafeteria",
        duration: "60 minutes"
      },
      {
        id: "code-marathon",
        time: "2:00 PM",
        title: "Code & Debug Marathon",
        description: "Intensive programming and debugging challenge",
        type: "event",
        venue: "Computer Lab Block C",
        duration: "3 hours"
      },
      {
        id: "project-setup",
        time: "2:30 PM",
        title: "Project Showcase Setup",
        description: "Teams set up their innovative project demonstrations",
        type: "event",
        venue: "Exhibition Hall",
        duration: "90 minutes"
      },
      {
        id: "paper-presentations",
        time: "3:00 PM",
        title: "Technical Paper Presentations",
        description: "Students present research papers on emerging technologies",
        type: "event",
        venue: "Conference Hall",
        duration: "2 hours"
      },
      {
        id: "project-showcase",
        time: "4:00 PM",
        title: "Innovative Project Showcase",
        description: "Teams demonstrate their cutting-edge engineering projects",
        type: "event",
        venue: "Exhibition Hall",
        duration: "2 hours"
      },
      {
        id: "quiz-prelims",
        time: "5:00 PM",
        title: "EEE Technical Quiz",
        description: "Fast-paced technical quiz competition testing EEE knowledge",
        type: "event",
        venue: "Main Auditorium",
        duration: "90 minutes"
      },
      {
        id: "awards-ceremony",
        time: "6:30 PM",
        title: "Grand Awards Ceremony",
        description: "Recognition and awards for all competition winners",
        type: "closing",
        venue: "Main Auditorium",
        speaker: "Chief Guest & Dean",
        duration: "60 minutes"
      },
      {
        id: "closing-networking",
        time: "7:30 PM",
        title: "Closing Ceremony & Networking",
        description: "Official closing of Ekna 2025 with networking reception",
        type: "closing",
        venue: "Main Auditorium & Lobby",
        duration: "90 minutes"
      }
    ]
  }
];