export interface Tool {
  name: string;
  url: string;
  description: string;
  category: Category;
}

export type Category = 
  | "Coding AI"
  | "Vibe Coding"
  | "Image Generation"
  | "Video Generation"
  | "Presentations";

export const categories: Category[] = [
  "Coding AI",
  "Vibe Coding",
  "Image Generation",
  "Video Generation",
  "Presentations",
];

export const categoryColors: Record<Category, string> = {
  "Coding AI": "bg-accent text-accent-foreground",
  "Vibe Coding": "bg-success text-success-foreground",
  "Image Generation": "bg-foreground text-background",
  "Video Generation": "bg-highlight text-highlight-foreground",
  "Presentations": "bg-foreground/80 text-background",
};

export const tools: Tool[] = [
  // Coding AI
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    description: "Best for general coding assistance",
    category: "Coding AI",
  },
  {
    name: "Claude",
    url: "https://claude.ai",
    description: "Best for complex reasoning and code analysis",
    category: "Coding AI",
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com",
    description: "Best for Google ecosystem integration",
    category: "Coding AI",
  },
  {
    name: "DeepSeek",
    url: "https://www.deepseek.com",
    description: "Best for open-source AI coding",
    category: "Coding AI",
  },

  // Vibe Coding
  {
    name: "Lovable",
    url: "https://lovable.dev",
    description: "Best for rapid prototyping",
    category: "Vibe Coding",
  },
  {
    name: "Replit",
    url: "https://replit.com",
    description: "Best for collaborative coding",
    category: "Vibe Coding",
  },
  {
    name: "Bolt",
    url: "https://bolt.new",
    description: "Best for instant deployments",
    category: "Vibe Coding",
  },
  {
    name: "V0 by Vercel",
    url: "https://v0.dev",
    description: "Best for React/Next.js components",
    category: "Vibe Coding",
  },

  // Image Generation
  {
    name: "ChatGPT (GPT-4o)",
    url: "https://chat.openai.com",
    description: "Best AI image generator overall",
    category: "Image Generation",
  },
  {
    name: "Midjourney",
    url: "https://midjourney.com",
    description: "Best for artistic results",
    category: "Image Generation",
  },
  {
    name: "FLUX",
    url: "https://flux1.ai",
    description: "Best for customization and control",
    category: "Image Generation",
  },
  {
    name: "Ideogram",
    url: "https://ideogram.ai",
    description: "Best for accurate text in images",
    category: "Image Generation",
  },
  {
    name: "Adobe Firefly",
    url: "https://firefly.adobe.com",
    description: "Best for integrating AI images into photos",
    category: "Image Generation",
  },
  {
    name: "Recraft",
    url: "https://recraft.ai",
    description: "Best for graphic design",
    category: "Image Generation",
  },

  // Video Generation
  {
    name: "Runway Gen-4.5",
    url: "https://runwayml.com",
    description: "Best for advanced creative control",
    category: "Video Generation",
  },
  {
    name: "HeyGen",
    url: "https://heygen.com",
    description: "Best for personalized & translated videos",
    category: "Video Generation",
  },
  {
    name: "OpenAI Sora",
    url: "https://openai.com/sora",
    description: "Best for narrative storytelling",
    category: "Video Generation",
  },
  {
    name: "Kling AI",
    url: "https://klingai.com",
    description: "Best for photorealistic humans",
    category: "Video Generation",
  },
  {
    name: "Synthesia",
    url: "https://synthesia.io",
    description: "Best for business & training videos",
    category: "Video Generation",
  },
  {
    name: "Luma Dream Machine",
    url: "https://lumalabs.ai",
    description: "Best for fast, cinematic results",
    category: "Video Generation",
  },
  {
    name: "Pika",
    url: "https://pika.art",
    description: "Best for creative & social media content",
    category: "Video Generation",
  },
  {
    name: "Google Veo 3",
    url: "https://deepmind.google/technologies/veo",
    description: "Best for cinematic realism",
    category: "Video Generation",
  },
  {
    name: "Adobe Firefly Video",
    url: "https://firefly.adobe.com",
    description: "Best for Adobe Creative Cloud users",
    category: "Video Generation",
  },
  {
    name: "Manus",
    url: "https://manus.video",
    description: "Best for AI-powered workflow automation",
    category: "Video Generation",
  },

  // Presentations
  {
    name: "GenPPT",
    url: "https://genppt.com",
    description: "Best overall for research-backed presentations",
    category: "Presentations",
  },
  {
    name: "Gamma",
    url: "https://gamma.app",
    description: "Best for design-focused presentations",
    category: "Presentations",
  },
  {
    name: "Plus AI",
    url: "https://plusdocs.com",
    description: "Best for Google Slides integration",
    category: "Presentations",
  },
  {
    name: "Beautiful.ai",
    url: "https://beautiful.ai",
    description: "Best for brand consistency",
    category: "Presentations",
  },
  {
    name: "Canva AI",
    url: "https://canva.com",
    description: "Best for design freedom",
    category: "Presentations",
  },
  {
    name: "SlidesAI",
    url: "https://slidesai.io",
    description: "Best for converting text to slides",
    category: "Presentations",
  },
  {
    name: "Decktopus",
    url: "https://decktopus.com",
    description: "Best for beginners",
    category: "Presentations",
  },
  {
    name: "Presentations.AI",
    url: "https://presentations.ai",
    description: "Best for automated design",
    category: "Presentations",
  },
  {
    name: "Slidesgo",
    url: "https://slidesgo.com",
    description: "Best for templates",
    category: "Presentations",
  },
  {
    name: "Manus Presentations",
    url: "https://manus.video",
    description: "Best for AI-powered presentations",
    category: "Presentations",
  },
  {
    name: "Genspark",
    url: "https://genspark.ai",
    description: "Best for AI research presentations",
    category: "Presentations",
  },
];
