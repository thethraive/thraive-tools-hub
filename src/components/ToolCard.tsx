import { ExternalLink, Star } from "lucide-react";
import { Tool } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
  index: number;
}

const ToolCard = ({ tool, index }: ToolCardProps) => {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 bg-card border border-border rounded-xl card-hover animate-fade-in"
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className="font-bold text-base text-foreground group-hover:text-muted-foreground transition-colors truncate">
              {tool.name}
            </h3>
            {tool.featured && (
              <Star className="w-3.5 h-3.5 fill-foreground text-foreground flex-shrink-0" />
            )}
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </div>

          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {tool.description}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
              {tool.subcategory}
            </span>
            <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${
              tool.pricing === "Free" 
                ? "bg-foreground text-background" 
                : tool.pricing === "Freemium" 
                  ? "border border-border text-muted-foreground" 
                  : "border border-border text-muted-foreground"
            }`}>
              {tool.pricing}
            </span>
            <span className="text-xs text-muted-foreground ml-auto">
              ★ {tool.rating}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ToolCard;
