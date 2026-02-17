export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: "ml" | "web" | "systems" | "security";
}

export const projects: Project[] = [
  {
    id: "credit-risk",
    title: "Credit Default Risk System",
    shortDescription:
      "End-to-end ML pipeline with MLflow tracking, SHAP explainability, and deployment-ready API serving.",
    tech: ["FastAPI", "MLflow", "XGBoost", "SHAP"],
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/yourusername/credit-risk",
    featured: true,
    category: "ml",
  },
  {
    id: "compliance-rag",
    title: "Compliance RAG System",
    shortDescription:
      "Retrieval-Augmented Generation system with document indexing and source attribution.",
    tech: ["LangChain", "FAISS", "Transformers"],
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/yourusername/compliance-rag",
    featured: true,
    category: "ml",
  },
];

