import { Badge } from "./badge";
import { ArrowUpRight } from "lucide-react";

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
    <div className="-mx-4 flex gap-8 rounded-lg border border-transparent px-4 py-8 transition-all duration-200 hover:translate-y-[-1px] hover:border-gray-200">
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
                      <ArrowUpRight className="h-3 w-3" />
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
