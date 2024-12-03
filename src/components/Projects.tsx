import { useResume } from "@/context/ResumeContext";

interface Project {
  id: number;
  name: string;
  description: string;
  languages?: string[];
}

export default function Projects() {
  const resumeData = useResume();

  return (
    <section id="projects" className="space-y-8 sm:space-y-12">
      <div className="text-center max-w-2xl mx-auto mb-0 my-16">
        <h2 className="text-4xl font-bold mb-4">Developed Projects</h2>
        <p className="text-muted-foreground">
          A showcase of key projects I've contributed to throughout my career
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((project: Project) => (
          <div
            key={project.id}
            className="p-8 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors group"
          >
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <div className="flex flex-wrap mb-2 text-xs">
              {project.languages &&
                project.languages.map((p, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 inline-block rounded border border-gray-500 mr-1 mb-1 text-muted-foreground"
                  >
                    {p}
                  </span>
                ))}
            </div>
            <p
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
