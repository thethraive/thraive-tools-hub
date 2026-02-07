export interface Tool {
  name: string;
  url: string;
  description: string;
  category: ToolCategory;
  subcategory: string;
  pricing: string;
  rating: number;
  featured: boolean;
}

export type ToolCategory =
  | "Image Generation"
  | "Video Generation"
  | "Avatars"
  | "Chatbots & LLMs"
  | "Coding"
  | "Productivity"
  | "Writing"
  | "Audio & Music"
  | "Research"
  | "Design";

export const toolCategories: ToolCategory[] = [
  "Chatbots & LLMs",
  "Coding",
  "Image Generation",
  "Video Generation",
  "Avatars",
  "Audio & Music",
  "Writing",
  "Productivity",
  "Research",
  "Design",
];

export const tools: Tool[] = [
  // Image Generation
  { name: "ChatGPT (DALL-E)", url: "https://chat.openai.com", description: "OpenAI's AI image generator integrated with ChatGPT", category: "Image Generation", subcategory: "Text-to-Image", pricing: "Freemium", rating: 4.5, featured: true },
  { name: "Midjourney", url: "https://midjourney.com", description: "Industry-leading AI art generator with stunning photorealistic outputs", category: "Image Generation", subcategory: "Text-to-Image", pricing: "Paid", rating: 4.8, featured: true },
  { name: "Stable Diffusion", url: "https://stability.ai", description: "Open-source image generation model you can run locally", category: "Image Generation", subcategory: "Text-to-Image", pricing: "Free", rating: 4.3, featured: true },
  { name: "Leonardo AI", url: "https://leonardo.ai", description: "AI image generator with fine-tuned models and canvas editor", category: "Image Generation", subcategory: "Text-to-Image", pricing: "Freemium", rating: 4.4, featured: false },
  { name: "Ideogram", url: "https://ideogram.ai", description: "AI image generator excelling at text rendering in images", category: "Image Generation", subcategory: "Text-to-Image", pricing: "Freemium", rating: 4.5, featured: false },
  { name: "Adobe Firefly", url: "https://firefly.adobe.com", description: "Adobe's commercially-safe AI image generator", category: "Image Generation", subcategory: "Text-to-Image", pricing: "Freemium", rating: 4.2, featured: false },
  { name: "Flux", url: "https://blackforestlabs.ai", description: "Black Forest Labs' open-source high-quality image model", category: "Image Generation", subcategory: "Text-to-Image", pricing: "Free", rating: 4.4, featured: false },
  { name: "Krea AI", url: "https://krea.ai", description: "Real-time AI image generation and enhancement platform", category: "Image Generation", subcategory: "Real-time", pricing: "Freemium", rating: 4.1, featured: false },
  { name: "Playground AI", url: "https://playground.com", description: "Free AI image generator with multiple models and styles", category: "Image Generation", subcategory: "Text-to-Image", pricing: "Freemium", rating: 4.0, featured: false },
  { name: "Canva AI", url: "https://canva.com", description: "AI-powered design platform with Magic Studio features", category: "Image Generation", subcategory: "Design", pricing: "Freemium", rating: 4.5, featured: false },

  // Video Generation
  { name: "Runway ML", url: "https://runwayml.com", description: "Leading AI video generation and editing platform (Gen-3 Alpha)", category: "Video Generation", subcategory: "Text-to-Video", pricing: "Freemium", rating: 4.6, featured: true },
  { name: "Sora", url: "https://openai.com/sora", description: "OpenAI's text-to-video model generating realistic videos", category: "Video Generation", subcategory: "Text-to-Video", pricing: "Paid", rating: 4.5, featured: true },
  { name: "Pika", url: "https://pika.art", description: "AI video generator with creative effects and lip-sync features", category: "Video Generation", subcategory: "Text-to-Video", pricing: "Freemium", rating: 4.3, featured: false },
  { name: "Kling AI", url: "https://klingai.com", description: "High-quality AI video generation with motion brush controls", category: "Video Generation", subcategory: "Text-to-Video", pricing: "Freemium", rating: 4.4, featured: true },
  { name: "Luma Dream Machine", url: "https://lumalabs.ai", description: "Fast AI video generation with realistic motion and physics", category: "Video Generation", subcategory: "Text-to-Video", pricing: "Freemium", rating: 4.2, featured: false },
  { name: "InVideo AI", url: "https://invideo.io", description: "AI-powered video creation platform for marketing content", category: "Video Generation", subcategory: "Text-to-Video", pricing: "Freemium", rating: 4.1, featured: false },
  { name: "HailuoAI (MiniMax)", url: "https://hailuoai.video", description: "Chinese AI video generator with impressive quality", category: "Video Generation", subcategory: "Text-to-Video", pricing: "Freemium", rating: 4.3, featured: false },
  { name: "Haiper", url: "https://haiper.ai", description: "AI video generator focused on animated and creative content", category: "Video Generation", subcategory: "Text-to-Video", pricing: "Freemium", rating: 3.9, featured: false },
  { name: "Veo (Google)", url: "https://deepmind.google/technologies/veo", description: "Google DeepMind's high-fidelity video generation model", category: "Video Generation", subcategory: "Text-to-Video", pricing: "Paid", rating: 4.3, featured: false },
  { name: "Domo AI", url: "https://domoai.app", description: "AI video style transfer — turn videos into anime or cartoon", category: "Video Generation", subcategory: "Style Transfer", pricing: "Freemium", rating: 4.0, featured: false },

  // Avatars
  { name: "HeyGen", url: "https://heygen.com", description: "Create AI avatar videos with lip-sync and voice cloning", category: "Avatars", subcategory: "AI Avatars", pricing: "Freemium", rating: 4.5, featured: true },
  { name: "Synthesia", url: "https://synthesia.io", description: "Enterprise AI video platform with 200+ diverse avatars", category: "Avatars", subcategory: "AI Avatars", pricing: "Paid", rating: 4.4, featured: true },
  { name: "D-ID", url: "https://d-id.com", description: "Create talking avatar videos from a single photo", category: "Avatars", subcategory: "AI Avatars", pricing: "Freemium", rating: 4.2, featured: false },
  { name: "Colossyan", url: "https://colossyan.com", description: "AI video platform for corporate training and learning content", category: "Avatars", subcategory: "AI Avatars", pricing: "Paid", rating: 4.1, featured: false },
  { name: "Tavus", url: "https://tavus.io", description: "Personalized AI video generation at scale with digital twins", category: "Avatars", subcategory: "AI Avatars", pricing: "Paid", rating: 4.0, featured: false },
  { name: "Elai.io", url: "https://elai.io", description: "AI-powered video creation with customizable digital presenters", category: "Avatars", subcategory: "AI Avatars", pricing: "Freemium", rating: 3.9, featured: false },

  // Chatbots & LLMs
  { name: "ChatGPT", url: "https://chat.openai.com", description: "OpenAI's flagship conversational AI with GPT-4o and reasoning", category: "Chatbots & LLMs", subcategory: "General Assistant", pricing: "Freemium", rating: 4.7, featured: true },
  { name: "Claude", url: "https://claude.ai", description: "Anthropic's AI assistant — thoughtful, safe, and capable", category: "Chatbots & LLMs", subcategory: "General Assistant", pricing: "Freemium", rating: 4.8, featured: true },
  { name: "Gemini", url: "https://gemini.google.com", description: "Google's multimodal AI with deep Google ecosystem integration", category: "Chatbots & LLMs", subcategory: "General Assistant", pricing: "Freemium", rating: 4.5, featured: true },
  { name: "Perplexity", url: "https://perplexity.ai", description: "AI-powered search engine with real-time citations", category: "Chatbots & LLMs", subcategory: "Search + AI", pricing: "Freemium", rating: 4.6, featured: true },
  { name: "Grok", url: "https://grok.x.ai", description: "xAI's conversational AI with real-time X/Twitter integration", category: "Chatbots & LLMs", subcategory: "General Assistant", pricing: "Freemium", rating: 4.1, featured: false },
  { name: "DeepSeek", url: "https://chat.deepseek.com", description: "Open-source Chinese AI model with strong reasoning capabilities", category: "Chatbots & LLMs", subcategory: "Reasoning", pricing: "Free", rating: 4.4, featured: true },
  { name: "Mistral (Le Chat)", url: "https://chat.mistral.ai", description: "European open-source AI lab's conversational interface", category: "Chatbots & LLMs", subcategory: "General Assistant", pricing: "Free", rating: 4.2, featured: false },
  { name: "Meta AI", url: "https://meta.ai", description: "Meta's Llama-powered AI available across Meta apps", category: "Chatbots & LLMs", subcategory: "General Assistant", pricing: "Free", rating: 4.0, featured: false },
  { name: "Cohere", url: "https://cohere.com", description: "Enterprise-focused AI for search, generation, and classification", category: "Chatbots & LLMs", subcategory: "Enterprise", pricing: "Freemium", rating: 4.1, featured: false },
  { name: "Pi (Inflection)", url: "https://pi.ai", description: "Empathetic personal AI designed for natural conversations", category: "Chatbots & LLMs", subcategory: "Personal AI", pricing: "Free", rating: 3.9, featured: false },

  // Coding
  { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI pair programmer integrated into VS Code and JetBrains IDEs", category: "Coding", subcategory: "Code Assistant", pricing: "Paid", rating: 4.6, featured: true },
  { name: "Cursor", url: "https://cursor.com", description: "AI-first code editor built on VS Code with deep AI integration", category: "Coding", subcategory: "AI IDE", pricing: "Freemium", rating: 4.7, featured: true },
  { name: "Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code", description: "Anthropic's agentic CLI coding tool for terminal-based development", category: "Coding", subcategory: "CLI Agent", pricing: "Paid", rating: 4.5, featured: true },
  { name: "Replit", url: "https://replit.com", description: "AI-powered cloud IDE for building and deploying apps", category: "Coding", subcategory: "Cloud IDE", pricing: "Freemium", rating: 4.3, featured: false },
  { name: "Lovable", url: "https://lovable.dev", description: "AI full-stack app builder — describe your app, get working code", category: "Coding", subcategory: "App Builder", pricing: "Freemium", rating: 4.4, featured: true },
  { name: "Bolt.new", url: "https://bolt.new", description: "AI-powered full-stack web app builder in the browser", category: "Coding", subcategory: "App Builder", pricing: "Freemium", rating: 4.3, featured: false },
  { name: "V0 by Vercel", url: "https://v0.dev", description: "AI UI component generator using shadcn/ui and Tailwind", category: "Coding", subcategory: "UI Generator", pricing: "Freemium", rating: 4.2, featured: false },
  { name: "Windsurf", url: "https://codeium.com/windsurf", description: "Codeium's AI IDE with Cascade agentic coding capabilities", category: "Coding", subcategory: "AI IDE", pricing: "Freemium", rating: 4.3, featured: false },
  { name: "Tabnine", url: "https://tabnine.com", description: "AI code completion with privacy-first, self-hosted options", category: "Coding", subcategory: "Code Assistant", pricing: "Freemium", rating: 4.0, featured: false },
  { name: "Devin", url: "https://devin.ai", description: "Cognition's autonomous AI software engineer agent", category: "Coding", subcategory: "AI Agent", pricing: "Paid", rating: 4.0, featured: false },

  // Productivity
  { name: "Notion AI", url: "https://notion.so", description: "AI-powered workspace for notes, docs, and project management", category: "Productivity", subcategory: "Workspace", pricing: "Freemium", rating: 4.5, featured: true },
  { name: "Zapier", url: "https://zapier.com", description: "No-code automation connecting 6000+ apps with AI features", category: "Productivity", subcategory: "Automation", pricing: "Freemium", rating: 4.4, featured: false },
  { name: "Make (Integromat)", url: "https://make.com", description: "Visual automation platform for complex multi-step workflows", category: "Productivity", subcategory: "Automation", pricing: "Freemium", rating: 4.3, featured: false },
  { name: "n8n", url: "https://n8n.io", description: "Open-source workflow automation with AI agent capabilities", category: "Productivity", subcategory: "Automation", pricing: "Freemium", rating: 4.4, featured: true },
  { name: "Otter.ai", url: "https://otter.ai", description: "AI meeting transcription with real-time notes and summaries", category: "Productivity", subcategory: "Transcription", pricing: "Freemium", rating: 4.3, featured: false },
  { name: "Fireflies.ai", url: "https://fireflies.ai", description: "AI meeting assistant that records, transcribes, and summarizes", category: "Productivity", subcategory: "Transcription", pricing: "Freemium", rating: 4.2, featured: false },
  { name: "Reclaim AI", url: "https://reclaim.ai", description: "AI-powered calendar management and smart scheduling", category: "Productivity", subcategory: "Scheduling", pricing: "Freemium", rating: 4.1, featured: false },
  { name: "Motion", url: "https://usemotion.com", description: "AI-powered project and task management with auto-scheduling", category: "Productivity", subcategory: "Scheduling", pricing: "Paid", rating: 4.0, featured: false },
  { name: "Taskade", url: "https://taskade.com", description: "AI-powered productivity workspace with agents and automations", category: "Productivity", subcategory: "Workspace", pricing: "Freemium", rating: 4.0, featured: false },
  { name: "Mem", url: "https://mem.ai", description: "AI-powered note-taking that self-organizes your knowledge", category: "Productivity", subcategory: "Notes", pricing: "Freemium", rating: 3.9, featured: false },

  // Writing
  { name: "Jasper", url: "https://jasper.ai", description: "Enterprise AI content platform for marketing teams", category: "Writing", subcategory: "Marketing Copy", pricing: "Paid", rating: 4.3, featured: false },
  { name: "Copy.ai", url: "https://copy.ai", description: "AI copywriting tool for sales, marketing, and business content", category: "Writing", subcategory: "Marketing Copy", pricing: "Freemium", rating: 4.1, featured: false },
  { name: "Writesonic", url: "https://writesonic.com", description: "AI writer for blogs, ads, and SEO-optimized content", category: "Writing", subcategory: "Blog & SEO", pricing: "Freemium", rating: 4.0, featured: false },
  { name: "Grammarly", url: "https://grammarly.com", description: "AI writing assistant for grammar, tone, and clarity", category: "Writing", subcategory: "Grammar & Style", pricing: "Freemium", rating: 4.6, featured: true },
  { name: "QuillBot", url: "https://quillbot.com", description: "AI paraphrasing and summarization tool for better writing", category: "Writing", subcategory: "Paraphrasing", pricing: "Freemium", rating: 4.2, featured: false },
  { name: "Sudowrite", url: "https://sudowrite.com", description: "AI writing partner for fiction authors and storytellers", category: "Writing", subcategory: "Creative Writing", pricing: "Paid", rating: 4.0, featured: false },
  { name: "Anyword", url: "https://anyword.com", description: "AI copywriting with predictive performance scoring", category: "Writing", subcategory: "Performance Copy", pricing: "Paid", rating: 4.0, featured: false },
  { name: "Wordtune", url: "https://wordtune.com", description: "AI-powered writing companion for rewriting and refining text", category: "Writing", subcategory: "Rewriting", pricing: "Freemium", rating: 4.1, featured: false },

  // Audio & Music
  { name: "ElevenLabs", url: "https://elevenlabs.io", description: "Industry-leading AI voice synthesis and cloning platform", category: "Audio & Music", subcategory: "Voice AI", pricing: "Freemium", rating: 4.7, featured: true },
  { name: "Suno AI", url: "https://suno.com", description: "AI music generator — create full songs from text prompts", category: "Audio & Music", subcategory: "Music Generation", pricing: "Freemium", rating: 4.5, featured: true },
  { name: "Udio", url: "https://udio.com", description: "AI music creation platform with high-quality audio output", category: "Audio & Music", subcategory: "Music Generation", pricing: "Freemium", rating: 4.4, featured: false },
  { name: "Murf AI", url: "https://murf.ai", description: "AI voice generator for professional voiceovers", category: "Audio & Music", subcategory: "Voice AI", pricing: "Freemium", rating: 4.2, featured: false },
  { name: "Play.ht", url: "https://play.ht", description: "AI text-to-speech with ultra-realistic voice cloning", category: "Audio & Music", subcategory: "Voice AI", pricing: "Freemium", rating: 4.1, featured: false },
  { name: "AIVA", url: "https://aiva.ai", description: "AI composer for creating emotional soundtrack music", category: "Audio & Music", subcategory: "Music Generation", pricing: "Freemium", rating: 4.0, featured: false },
  { name: "Descript", url: "https://descript.com", description: "AI-powered audio/video editing with text-based editing", category: "Audio & Music", subcategory: "Audio Editing", pricing: "Freemium", rating: 4.4, featured: false },
  { name: "Speechify", url: "https://speechify.com", description: "AI text-to-speech reader for articles and documents", category: "Audio & Music", subcategory: "Text-to-Speech", pricing: "Freemium", rating: 4.2, featured: false },

  // Research
  { name: "Perplexity Pro", url: "https://perplexity.ai/pro", description: "Pro tier of AI search with access to multiple frontier models", category: "Research", subcategory: "AI Search", pricing: "Paid", rating: 4.6, featured: false },
  { name: "NotebookLM", url: "https://notebooklm.google.com", description: "Google's AI research assistant that works with your documents", category: "Research", subcategory: "Document AI", pricing: "Free", rating: 4.5, featured: true },
  { name: "Elicit", url: "https://elicit.com", description: "AI research assistant for finding and analyzing academic papers", category: "Research", subcategory: "Academic", pricing: "Freemium", rating: 4.3, featured: false },
  { name: "Consensus", url: "https://consensus.app", description: "AI-powered academic search engine with evidence-based answers", category: "Research", subcategory: "Academic", pricing: "Freemium", rating: 4.2, featured: false },
  { name: "SciSpace", url: "https://scispace.com", description: "AI tool to understand, explain, and write research papers", category: "Research", subcategory: "Academic", pricing: "Freemium", rating: 4.1, featured: false },
  { name: "Connected Papers", url: "https://connectedpapers.com", description: "Visual tool to explore academic paper connections and citations", category: "Research", subcategory: "Academic", pricing: "Freemium", rating: 4.0, featured: false },
  { name: "ChatPDF", url: "https://chatpdf.com", description: "Chat with any PDF document using AI for instant answers", category: "Research", subcategory: "Document AI", pricing: "Freemium", rating: 4.1, featured: false },
  { name: "Humata", url: "https://humata.ai", description: "AI-powered document analysis for fast insights from files", category: "Research", subcategory: "Document AI", pricing: "Freemium", rating: 4.0, featured: false },

  // Design
  { name: "Figma AI", url: "https://figma.com", description: "AI features in Figma for auto-layout, content generation", category: "Design", subcategory: "UI/UX Design", pricing: "Freemium", rating: 4.5, featured: false },
  { name: "Framer AI", url: "https://framer.com", description: "AI-powered website builder with stunning templates and animations", category: "Design", subcategory: "Website Builder", pricing: "Freemium", rating: 4.4, featured: false },
  { name: "Looka", url: "https://looka.com", description: "AI logo maker and brand identity designer", category: "Design", subcategory: "Logo Design", pricing: "Paid", rating: 4.0, featured: false },
  { name: "Remove.bg", url: "https://remove.bg", description: "AI-powered instant background removal from images", category: "Design", subcategory: "Background Removal", pricing: "Freemium", rating: 4.3, featured: false },
  { name: "Clipdrop", url: "https://clipdrop.co", description: "AI-powered image editing suite by Stability AI", category: "Design", subcategory: "Image Editing", pricing: "Freemium", rating: 4.2, featured: false },
  { name: "Photoroom", url: "https://photoroom.com", description: "AI background removal and product photography studio", category: "Design", subcategory: "Product Photos", pricing: "Freemium", rating: 4.3, featured: false },
  { name: "Magnific AI", url: "https://magnific.ai", description: "AI image upscaler and enhancer with creative reimagining", category: "Design", subcategory: "Upscaling", pricing: "Paid", rating: 4.4, featured: false },
  { name: "Recraft", url: "https://recraft.ai", description: "AI design tool for generating vector art, icons, and illustrations", category: "Design", subcategory: "Vector & Design", pricing: "Freemium", rating: 4.2, featured: false },
];
