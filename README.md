# Modern Interactive Developer Portfolio

A modern, responsive, and dark-themed developer portfolio built for **Pushkar Pallav** to showcase peer-reviewed research, deep learning systems, and backend engineering architectures.

---

## 🚀 Live Demo & Deployment

- **Live URL**: `https://your-portfolio-name.vercel.app` *(update once deployed)*
- **Hosted On**: [Vercel](https://vercel.com/) (Continuous deployment via GitHub)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations & Physics**: [Framer Motion](https://www.framer.com/motion/)
- **3D & Canvas**: [Three.js](https://threejs.org/) / WebGL Particle Systems
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Vercel CI/CD

---

## ✨ Key Features & Sections

- **Interactive Hero**: Dynamic glowing particle background, animated headline transitions, and quick call-to-actions.
- **About Me**: Narrative overview focusing on Java enterprise backend systems and Generative AI / Deep Learning research.
- **Research & Publications**: Showcase for the peer-reviewed planetary rover paper published with **Taylor & Francis Group (CRC Press)**.
- **Featured Projects**:
  - *GenAI AI Doctor with Vision and Voice* (Multimodal LLM / Voice AI)
  - *Resume Parsing Automation using NER* (NLP / Google Form integration)
  - *Automated Wildlife Recognition & Deterrence System* (YOLO / IoT)
  - *Home Automation using IoT* (Embedded switch-based design)
- **Skills Matrix**: Categorized, interactive filter cards for AI/ML, Programming, Backend Frameworks, and Core CS.
- **Leadership & Honours**: Positions held at IEEE CIS and Yantrove, alongside competitive robot design awards and International Rover Challenge (IRC) final qualifications.
- **Connect Hub**: Integrated direct links for GitHub, LinkedIn, Email, Phone, and LeetCode.

---

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── page.tsx          # Main single-page portfolio view
│   └── globals.css       # Global styles and Tailwind directives
├── components/
│   ├── Navbar.tsx        # Glassmorphic navigation bar
│   ├── Hero.tsx          # Hero section with interactive visuals
│   ├── About.tsx         # About me and core engineering pillars
│   ├── Publications.tsx  # Taylor & Francis publication card
│   ├── Projects.tsx      # Project showcase with modal previews
│   ├── Skills.tsx        # Interactive filterable skill matrix
│   └── Connect.tsx       # Bottom contact hub & social links
├── public/
│   └── pushkar-profile.jpg # Profile image asset
├── package.json
└── tailwind.config.js

