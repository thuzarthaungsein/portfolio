import { useResume } from "@/context/ResumeContext";

interface Project {
  id: number;
  name: string;
  description: string;
  languages?: string[];
  url?: string;
  icon: string;
}

export default function OwnProjects() {
  const resumeData = useResume();

  return (
    <section className="space-y-8 sm:space-y-12">
      <div className="text-center max-w-2xl mx-auto mb-0 my-16">
        <h2 className="text-4xl font-bold mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-confetti inline-block text-orange-500 mr-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 5h2" />
            <path d="M5 4v2" />
            <path d="M11.5 4l-.5 2" />
            <path d="M18 5h2" />
            <path d="M19 4v2" />
            <path d="M15 9l-1 1" />
            <path d="M18 13l2 -.5" />
            <path d="M18 19h2" />
            <path d="M19 18v2" />
            <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z" />
          </svg>
          My Small Creations{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-confetti inline-block text-orange-500"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 5h2" />
            <path d="M5 4v2" />
            <path d="M11.5 4l-.5 2" />
            <path d="M18 5h2" />
            <path d="M19 4v2" />
            <path d="M15 9l-1 1" />
            <path d="M18 13l2 -.5" />
            <path d="M18 19h2" />
            <path d="M19 18v2" />
            <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z" />
          </svg>
        </h2>
        <p className="text-muted-foreground">
          Here are my small creations. Feel free to check them out.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.own.map((project: Project) => (
          <div
            key={project.id}
            className="p-8 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors group"
          >
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
              {project.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 inline-block ml-2 mb-2 text-orange-500"
                dangerouslySetInnerHTML={{ __html: project.icon }}
              ></svg>
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
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                className="block mt-4 text-blue-400 hover:text-blue-600 text-sm"
              >
                Visit Site
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-external-link inline-block ml-1 mb-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
