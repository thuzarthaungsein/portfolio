import { useResume } from "@/context/ResumeContext";

export default function Skills() {
  const resumeData = useResume();
  const skills = resumeData.skills || {
    languages: [],
    frameworks: [],
    tools: [],
    concepts: [],
  };

  return (
    <section id="skills" className="space-y-8 sm:space-y-12 py-8">
      <div className="text-center max-w-2xl mx-auto mb-0">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-muted-foreground">My Specialty</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-6">
            <h3 className="text-2xl font-semibold capitalize">{category}</h3>
            <div className="flex flex-wrap">
              {items.map(
                (skill: { name: string; level: number }, index: number) => (
                  <span
                    key={index}
                    className="border border-gray-500 inline-block px-3 py-1 mr-1 mb-1 rounded text-muted-foreground font-medium"
                  >
                    {skill.name}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
