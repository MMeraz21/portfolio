import { Badge } from "./badge";

interface ExperienceCardProps {
  timePeriod: string;
  title: string;
  description: string;
  technologies: string[];
  companyName?: string;
  companyUrl?: string;
}

export function ExperienceCard({
  timePeriod,
  title,
  description,
  technologies,
  companyName,
  companyUrl,
}: ExperienceCardProps) {
  return (
    <div className="flex gap-8 py-8">
      <div className="w-1/4">
        <p className="text-sm font-medium tracking-wider text-gray-500 uppercase">
          {timePeriod}
        </p>
      </div>
      <div className="w-3/4">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {title}
              {companyName && (
                <>
                  {" · "}
                  {companyUrl ? (
                    <a
                      href={companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-gray-700"
                    >
                      {companyName}
                      <span className="text-xs">↗</span>
                    </a>
                  ) : (
                    <span>{companyName}</span>
                  )}
                </>
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
