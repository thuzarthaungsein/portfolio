import { useResume } from "@/context/ResumeContext";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const resumeData = useResume();
  const { name, title, summary, profileImage } = resumeData.personalInfo;

  const isExternalImage = profileImage?.startsWith("http");

  return (
    <section className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl font-bold mt-3 flex flex-wrap">
          <span>Hi, I'm&nbsp;</span>
          {/* <span className="text-blue-400">{name}</span> */}
          <span className="name-animation text-blue-400">
            <span>T</span>
            <span>h</span>
            <span>u</span>
            <span>z</span>
            <span>a</span>
            <span>r</span>
            <span>&nbsp;</span>
            <span>T</span>
            <span>h</span>
            <span>a</span>
            <span>u</span>
            <span>n</span>
            <span>g</span>
            <span>&nbsp;</span>
            <span>S</span>
            <span>e</span>
            <span>i</span>
            <span>n</span>
          </span>
        </h1>
        <h2 className="text-2xl font-semibold text-muted-foreground ">
          {title}
        </h2>

        <div className="flex text-gray-500">
          <a
            href={resumeData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:bg-accent"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={resumeData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:bg-accent"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${resumeData.personalInfo.email}`}
            className="rounded-full p-2 hover:bg-accent"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-muted-foreground">{summary}</p>

        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-primary" />
            <span>{resumeData.personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-primary" />
            <span>{resumeData.personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-primary" />
            <span>{resumeData.personalInfo.email}</span>
          </div>
        </div>

        <a
          href="https://drive.google.com/file/d/1kx9ysoVXPCpLayXTt5cg2caC7I8NuDOk/view?usp=drive_link"
          className="border border-gray-700 rounded px-3 py-2 inline-block mt-3 text-sm hover:bg-gray-800 hover:text-white"
          target="_blank"
          download
        >
          Download CV{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-download inline mb-1.5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
            <path d="M7 11l5 5l5 -5" />
            <path d="M12 4l0 12" />
          </svg>
        </a>
      </div>
      <div className="relative h-32 w-32 md:h-64 md:w-64 overflow-hidden rounded-full bg-gray-200">
        {isExternalImage ? (
          // For external images
          <img
            src={profileImage}
            alt={name}
            className="object-cover w-full h-full"
          />
        ) : (
          // For local images
          <Image
            src={profileImage || "/placeholder-avatar.png"}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>
    </section>
  );
}
