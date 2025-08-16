import { Badge } from "./badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  year?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  year,
}: ProjectCardProps) {
  return (
    <div className="-mx-4 flex gap-8 rounded-lg border border-transparent px-4 py-8 transition-all duration-200 hover:translate-y-[-1px] hover:border-gray-200">
      <div className="w-1/4">
        <p className="text-sm font-medium tracking-wider text-gray-500 uppercase">
          {year ?? "Personal Project"}
        </p>
      </div>
      <div className="w-3/4">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {title}
              {(demoUrl ?? githubUrl) && (
                <span className="ml-2">
                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm transition-colors hover:text-gray-700"
                    >
                      Demo
                      <span className="text-xs">↗</span>
                    </a>
                  )}
                  {demoUrl && githubUrl && " · "}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm transition-colors hover:text-gray-700"
                    >
                      GitHub
                      <span className="text-xs">↗</span>
                    </a>
                  )}
                </span>
              )}
            </h3>
          </div>

          <p className="leading-relaxed text-gray-500">{description}</p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
