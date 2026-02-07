import { ExternalLink, Star, Clock, Award, GraduationCap } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 bg-card border border-border rounded-xl card-hover animate-fade-in"
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <h3 className="font-bold text-base text-foreground group-hover:text-muted-foreground transition-colors truncate">
            {course.name}
          </h3>
          {course.featured && (
            <Star className="w-3.5 h-3.5 fill-foreground text-foreground flex-shrink-0" />
          )}
          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-auto" />
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <GraduationCap className="w-3.5 h-3.5" />
            {course.platform}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
          {course.certificate && (
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              Cert
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
            {course.level}
          </span>
          <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${
            course.pricing === "Free"
              ? "bg-foreground text-background"
              : "border border-border text-muted-foreground"
          }`}>
            {course.pricing === "Free" ? "Free" : `$${course.priceAmount}/mo`}
          </span>
          <span className="text-xs text-muted-foreground ml-auto">
            ★ {course.rating}
          </span>
        </div>
      </div>
    </a>
  );
};

export default CourseCard;
