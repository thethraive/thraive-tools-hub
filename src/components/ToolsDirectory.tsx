import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { tools, categories, Category, categoryColors } from "@/data/tools";
import ToolCard from "./ToolCard";

const ToolsDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "All" || tool.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toolsByCategory = useMemo(() => {
    const grouped: Record<string, typeof filteredTools> = {};
    
    if (selectedCategory === "All") {
      categories.forEach((category) => {
        const categoryTools = filteredTools.filter((t) => t.category === category);
        if (categoryTools.length > 0) {
          grouped[category] = categoryTools;
        }
      });
    } else {
      grouped[selectedCategory] = filteredTools;
    }
    
    return grouped;
  }, [filteredTools, selectedCategory]);

  return (
    <section id="tools" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            AI Tools Directory
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover the best AI tools for every creative and technical need
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-10 py-6 text-base rounded-full border-border bg-secondary/50 focus:bg-background"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
              className={`rounded-full font-medium ${
                selectedCategory === "All" 
                  ? "bg-foreground text-background hover:bg-foreground/90" 
                  : "hover:bg-secondary"
              }`}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full font-medium ${
                  selectedCategory === category
                    ? categoryColors[category]
                    : "hover:bg-secondary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Tools Grid by Category */}
        <div className="space-y-16">
          {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
            <div key={category}>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold">{category}</h3>
                <span className="text-sm text-muted-foreground">
                  {categoryTools.length} tool{categoryTools.length !== 1 ? "s" : ""}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryTools.map((tool, index) => (
                  <ToolCard key={tool.name} tool={tool} index={index} />
                ))}
              </div>
            </div>
          ))}

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No tools found matching your search.
              </p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-2 text-foreground underline"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ToolsDirectory;
