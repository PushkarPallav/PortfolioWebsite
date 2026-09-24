export interface Project {
  id: number | string;
  title: string;
  github?: string | null;
  tags: string[];
  summary: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "GenAI AI Doctor with Vision and Voice",
    github: "https://github.com/PushkarPallav/Gen_Ai_AI-_Doctor-with-Vision-and-Voice",
    tags: ["Generative AI", "Multimodal LLM", "Computer Vision", "Speech/Voice AI", "Healthcare AI", "Python"],
    summary: "An intelligent multimodal medical assistant integrating computer vision and speech recognition. Analyzes medical imagery and handles interactive, voice-driven patient symptom intake and conversational triage.",
    description: "An intelligent multimodal medical assistant integrating computer vision and speech recognition. Analyzes medical imagery and handles interactive, voice-driven patient symptom intake and conversational triage."
  },
  {
    id: 2,
    title: "Resume Parsing Automation using NER",
    github: "https://github.com/PushkarPallav/Resume-Parsing-Using-NER-to-auto-fill-google-forms",
    tags: ["NLP", "NER", "Google Apps Script", "REST API", "Python", "Automation"],
    summary: "Automated end-to-end resume parser utilizing custom Named Entity Recognition pipelines to extract structured candidate details from diverse resume formats and auto-populate Google Forms via API.",
    description: "Automated end-to-end resume parser utilizing custom Named Entity Recognition pipelines to extract structured candidate details from diverse resume formats and auto-populate Google Forms via API."
  },
  {
    id: 3,
    title: "Automated Wildlife Recognition and Deterrence System",
    github: null,
    tags: ["YOLO", "Deep Learning", "Computer Vision", "IoT", "Python"],
    summary: "Real-time identification of wild animals and reptiles on agricultural land using YOLO, integrated with an automated IoT system triggering species-specific acoustic deterrents and real-time farmer alerts.",
    description: "Real-time identification of wild animals and reptiles on agricultural land using YOLO, integrated with an automated IoT system triggering species-specific acoustic deterrents and real-time farmer alerts."
  },
  {
    id: 4,
    title: "Home Automation using IoT",
    github: null,
    tags: ["IoT", "Embedded Systems", "Multi-modal Control", "Energy Monitoring"],
    summary: "Scalable switch-based home automation platform providing voice, mobile, and manual control with remote scheduling and energy efficiency optimization.",
    description: "Scalable switch-based home automation platform providing voice, mobile, and manual control with remote scheduling and energy efficiency optimization."
  }
  // Adding a new project is just adding another object here
];
