import { ExternalLink } from "lucide-react";
import { Tool, categoryColors } from "@/data/tools";

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
      className="group block p-6 bg-card border border-border rounded-xl card-hover animate-fade-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors truncate">
              {tool.name}
            </h3>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">
            {tool.description}
          </p>
          
          <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${categoryColors[tool.category]}`}>
            {tool.category}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ToolCard;
