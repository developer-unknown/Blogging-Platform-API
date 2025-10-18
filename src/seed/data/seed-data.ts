export interface SeedPost {
    title: string,
    content: string,
    category: string,
    tags: string[],
}

export const initialData: SeedPost[] = [
    {
        title: "Introduction to TypeScript",
        content: "Learn the basics of TypeScript and how it enhances JavaScript.",
        category: "Programming",
        tags: ["typescript", "javascript", "frontend"],
    },
    {
        title: "10 Tips for Writing Better Code",
        content: "Improve your code quality with these practical tips.",
        category: "Development",
        tags: ["best practices", "clean code", "dev"],
    },
    {
        title: "What is Cloud Computing?",
        content: "An overview of the basic concepts of cloud computing.",
        category: "Technology",
        tags: ["cloud", "aws", "azure"],
    },
    {
        title: "Mastering Git Like a Pro",
        content: "Level up your Git skills with essential commands and workflows.",
        category: "Tools",
        tags: ["git", "version control", "github"],
    },
    {
        title: "React vs Vue: Which One to Choose?",
        content: "A comparison between two of the most popular frameworks.",
        category: "Frontend",
        tags: ["react", "vue", "javascript"],
    },
    {
        title: "Python for Data Analysis",
        content: "Use pandas and matplotlib to efficiently analyze data.",
        category: "Data Science",
        tags: ["python", "data", "pandas"],
    },
    {
        title: "Boosting Your Productivity as a Developer",
        content: "Tools and techniques to code more efficiently.",
        category: "Productivity",
        tags: ["productivity", "development", "software"],
    },
    {
        title: "A Complete Guide to Flexbox in CSS",
        content: "Master layout with CSS Flexbox.",
        category: "CSS",
        tags: ["flexbox", "css", "web design"],
    },
    {
        title: "Agile Methodology: Understanding Scrum",
        content: "Learn how Scrum works and why it's effective.",
        category: "Methodologies",
        tags: ["scrum", "agile", "project management"],
    },
    {
        title: "Docker for Beginners",
        content: "Simplify containers: Learn Docker from the ground up.",
        category: "DevOps",
        tags: ["docker", "containers", "devops"],
    },
    {
        title: "What is a REST API?",
        content: "Learn how REST APIs work and how to use them.",
        category: "Backend",
        tags: ["api", "rest", "backend"],
    },
    {
        title: "Building a Basic Server with Node.js and Express",
        content: "Create your first server using Node.js and Express.",
        category: "Backend",
        tags: ["nodejs", "express", "server"],
    },
    {
        title: "Implementing Dark Mode on Your Website",
        content: "Add dark mode using CSS and JavaScript.",
        category: "Frontend",
        tags: ["dark mode", "ux", "javascript"],
    },
    {
        title: "Introduction to NoSQL Databases",
        content: "Understand the differences between SQL and NoSQL.",
        category: "Databases",
        tags: ["nosql", "mongodb", "firebase"],
    },
    {
        title: "Technical Interview Tips",
        content: "Prepare for tech interviews with these actionable tips.",
        category: "Career",
        tags: ["interviews", "job", "tech"],
    },
    {
        title: "Deploying Frontend Apps with Vercel",
        content: "Host and deploy your frontend projects using Vercel.",
        category: "Deployment",
        tags: ["vercel", "deploy", "hosting"],
    },
    {
        title: "JWT Authentication in APIs",
        content: "Use JSON Web Tokens for secure API authentication.",
        category: "Security",
        tags: ["jwt", "authentication", "security"],
    },
    {
        title: "Getting Started with Tailwind CSS",
        content: "Use Tailwind for fast and consistent styling.",
        category: "CSS",
        tags: ["tailwind", "css", "utility-first"],
    },
    {
        title: "Intro to Machine Learning with Python",
        content: "First steps using scikit-learn for ML models.",
        category: "AI & ML",
        tags: ["machine learning", "python", "scikit-learn"],
    },
    {
        title: "Creating an Effective Portfolio Website",
        content: "Design and content tips to stand out as a developer.",
        category: "Career",
        tags: ["portfolio", "design", "frontend"],
    },
];