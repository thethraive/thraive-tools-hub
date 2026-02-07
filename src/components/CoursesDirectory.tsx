import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { courses, courseCategories, CourseCategory } from "@/data/courses";
import CourseCard from "./CourseCard";

const CoursesDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | "All">("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const coursesByCategory = useMemo(() => {
    const grouped: Record<string, typeof filteredCourses> = {};

    if (selectedCategory === "All") {
      courseCategories.forEach((category) => {
        const categoryCourses = filteredCourses.filter((c) => c.category === category);
        if (categoryCourses.length > 0) {
          grouped[category] = categoryCourses;
        }
      });
    } else {
      if (filteredCourses.length > 0) {
        grouped[selectedCategory] = filteredCourses;
      }
    }

    return grouped;
  }, [filteredCourses, selectedCategory]);

  return (
    <section id="courses" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Learning Hub
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {courses.length}+ curated courses to master AI, coding, and tech — from beginner to advanced
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search courses, platforms, instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-10 py-6 text-base rounded-full border-border bg-background focus:bg-background"
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
              className={`rounded-full font-medium text-xs ${
                selectedCategory === "All"
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "hover:bg-secondary"
              }`}
            >
              All
            </Button>
            {courseCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full font-medium text-xs ${
                  selectedCategory === category
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "hover:bg-secondary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Courses Grid by Category */}
        <div className="space-y-16">
          {Object.entries(coursesByCategory).map(([category, categoryCourses]) => (
            <div key={category}>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold">{category}</h3>
                <span className="text-sm text-muted-foreground">
                  {categoryCourses.length} course{categoryCourses.length !== 1 ? "s" : ""}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryCourses.map((course, index) => (
                  <CourseCard key={course.name} course={course} index={index} />
                ))}
              </div>
            </div>
          ))}

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No courses found matching your search.
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

export default CoursesDirectory;
