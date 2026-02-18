export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  teaser: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;

  problem?: string;
  architecture?: string;
  diagram?: string;
  implementation?: string;
  screenshots?: string[];
  decisions?: string;
  challenges?: string;
  metrics?: {
    title: string;
    columns: string[];
    rows: string[][];
  }[];



}


export const projects: Project[] = [
  {
    slug: "credit-default-risk",
    title: "Credit Default Risk Prediction System",
    subtitle: "End-to-End ML + MLOps Architecture",
    description:
      "Production-oriented credit risk prediction pipeline with MLflow tracking, SHAP explainability, serving alignment, and FastAPI deployment.",
    teaser:
      "Production-grade ML pipeline with experiment tracking and explainability.",
    tech: ["XGBoost", "MLflow", "FastAPI", "SHAP", "Docker"],
    githubUrl: "https://github.com/yourusername/credit-risk",
    liveUrl: "",
    featured: true,
    diagram: "/diagrams/credit-default.png",
    metrics: [
      {
        title: "Model Comparison",
        columns: ["Model", "ROC-AUC", "PR-AUC", "Inference Latency"],
        rows: [
          ["Logistic Regression (Baseline)", "0.61", "0.11", "~8ms"],
          ["XGBoost (Tuned)", "0.76", "0.24", "~25ms"]
        ]
      }
    ],


    screenshots: ["/screenshots/cd1.png", "/screenshots/cd2.png", "/screenshots/cd4.png", "/screenshots/cd5.png"],
    problem: `Financial institutions require reliable credit risk assessment systems. The challenge was not just predicting default probability, but ensuring training-serving consistency, feature integrity, and explainability under realistic production constraints.`,

    architecture: `
      The system is composed of:

      • Preprocessing pipeline using sklearn ColumnTransformer
      • XGBoost model training
      • MLflow experiment tracking and model registry
      • SHAP explainability module
      • FastAPI serving layer for inference
      • Structured request validation and response formatting

      All components were modular to preserve training-serving alignment.
      `,


    implementation: `
      Feature preprocessing was encapsulated in a Pipeline to ensure identical transformations during inference. MLflow tracked hyperparameters, metrics, and artifacts. The serving API loaded the MLflow model directly to prevent version mismatch.`,

    decisions: `
      XGBoost was selected due to strong performance on tabular financial datasets. MLflow ensured experiment reproducibility. FastAPI was chosen for lightweight, production-ready REST serving.`,

    challenges: `
      The primary challenge was preventing feature mismatch between training and inference. Early versions used inconsistent preprocessing, which caused probability drift. Refactoring into a unified pipeline resolved the issue.`,

  },
  {
    slug: "compliance-rag",
    title: "Financial Compliance RAG System",
    subtitle: "Retrieval-Augmented Generation for Regulatory Documents",
    description:
      "Cost-efficient RAG system using FAISS vector store, metadata filtering, and local LLM inference for regulatory document querying.",
    teaser:
      "Production-grade ML pipeline with experiment tracking and explainability.",
    tech: ["LangChain", "FAISS", "HuggingFace", "FastAPI"],
    githubUrl: "https://github.com/yourusername/compliance-rag",
    liveUrl: "",
    featured: true,
  },
];
