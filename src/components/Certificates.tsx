import { useResume } from "@/context/ResumeContext";
import { ExternalLink } from "lucide-react";

interface Education {
  name: String;
  description: String;
  url: string;
}

export default function Certificates() {
  const resumeData = useResume();
  return (
    <section id="certificates" className="space-y-12 py-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4">Educations</h2>
        {/* <p className="text-muted-foreground">My Specialty</p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.certificates.map((edu: Education, index: number) => (
          <a
            key={index}
            href={edu.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors  group"
          >
            <span className="font-medium">{edu.name}</span>
            <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <p
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: edu.description }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
