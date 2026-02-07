import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToolsDirectory from "@/components/ToolsDirectory";
import CoursesDirectory from "@/components/CoursesDirectory";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ToolsDirectory />
        <CoursesDirectory />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
