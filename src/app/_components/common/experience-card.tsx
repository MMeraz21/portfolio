import { Badge } from "./badge"

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
    companyUrl
}: ExperienceCardProps) {
    return (
        <div className="flex gap-4">
            <div className="w-1/4">
                {/* Left side content */}
                <div className="pt-8">
                    <p>{timePeriod}</p>
                </div>
            </div>
            <div className="w-3/4">
                {/* Right side content */}
                <div className="pt-8">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

