import { useResume } from "@/context/ResumeContext";

interface Exp {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

export default function Experience() {
  const resumeData = useResume();
  return (
    <section id="experience" className="space-y-8 sm:space-y-12">
      <div className="text-center max-w-2xl mx-auto mb-0 my-16">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <p className="text-muted-foreground">Web Developer since 2014</p>
      </div>
      <div className="space-y-20">
        {resumeData.experience.map((exp: Exp, index: number) => (
          <div
            key={index}
            className="space-y-6 md:border-l-2 border-gray-800 md:pl-8 relative"
          >
            {/* <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              // fill="lightBlue"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden md:inline icon icon-tabler icons-tabler-outline icon-tabler-pencil absolute -left-[18px] top-0 w-8 h-8 bg-gray-800 text-blue-600 rounded-full p-1"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
              <path d="M13.5 6.5l4 4" />
            </svg>
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                <p className="text-xl text-primary font-medium mb-2">
                  {exp.title}
                </p>
                <p className="text-muted-foreground">{exp.location}</p>
              </div>
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium">
                {exp.period}
              </span>
            </div>
            <ul className="list-disc list-outside space-y-3 text-muted-foreground ml-4">
              {exp.responsibilities.map((desc, i) => (
                <li key={i} className="leading-relaxed pl-2">
                  {desc}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-4">
              {exp.skills.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm rounded-full bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
