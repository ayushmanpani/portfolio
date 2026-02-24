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
  diagramCaption?: string;
  implementation?: string;
  screenshots?: string[];
  decisions?: string;
  challenges?: string;
  metrics?: {
    title: string;
    type?: "table" | "structured";
    columns?: string[];
    rows?: string[][];
    content?: string;
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
    githubUrl: "https://github.com/ayushmanpani/credit-default-risk-ml",
    liveUrl: "https://credit-default-risk-ml.onrender.com/",
    featured: true,
    diagram: "/diagrams/credit-default.png",
    diagramCaption: "End-to-end ML pipeline illustrating data processing, experiment tracking, serving, and monitoring layers.",
    metrics: [
      {
        title: "Model Comparison",
        type: "table",
        columns: ["Model", "ROC-AUC", "PR-AUC", "Model Size(bytes)"],
        rows: [
          ["Logistic Regression (Baseline)", "0.749", "0.229", "14,047"],
          ["XGBoost (Tuned)", "0.758", "0.249", "12,49,606"]
        ]
      }
    ],


    screenshots: ["/screenshots/cd1.png", "/screenshots/cd2.png", "/screenshots/cd4.png", "/screenshots/cd5.png"],
    problem: `## Problem Statement

Financial institutions must assess the probability that a loan applicant will default before approving credit. Traditional rule-based scoring systems often fail to capture complex non-linear risk patterns and may rely on manually engineered thresholds.

The objective of this system is to predict the probability of loan default using structured financial and demographic features available at application time. The solution must balance predictive performance, interpretability, and deployability in a real-world lending workflow.

The system outputs:
- Default probability score (0–1)
- Binary risk classification (HIGH / LOW)

---

## Key Constraints

### 1. Severe Class Imbalance
Loan default cases represent a small minority of the dataset. The model must be robust to imbalance and evaluated using metrics beyond simple accuracy (ROC-AUC, PR-AUC).

### 2. Data Leakage Risk
Many historical financial datasets contain post-approval or externally computed risk indicators. Only application-time-safe features are allowed in the deployable model to prevent unrealistic performance inflation.

### 3. Training-Serving Feature Alignment
Features used during training must exactly match those available during inference. Any mismatch may lead to unstable or incorrect predictions.

### 4. Interpretability Requirements
Financial risk models must provide explainability for regulatory and operational transparency. SHAP-based feature impact analysis is integrated to support model inspection.

### 5. Production Reliability
The system must:
- Validate incoming requests
- Handle missing fields safely
- Ensure consistent preprocessing
- Support monitoring for data drift and performance degradation

### 6. Scalability
The architecture must support:
- Real-time single prediction requests
- Batch inference workflows
- Future retraining and model version upgrades
`,

    architecture: `
## Data Layer
- Structured financial datasets (application_train, bureau, optional external sources)
- Strict separation between training and inference schemas
- Identifier removal to prevent leakage

## Data Processing & Feature Engineering
- Scikit-learn Pipeline + ColumnTransformer
- Median imputation (numerical features)
- Constant imputation (categorical features)
- OneHotEncoding for categorical variables
- StandardScaler for numerical normalization
- Application-time-safe feature selection strategy

## Model Training & Experimentation
- Logistic Regression (baseline model)
- XGBoost (non-linear optimized model)
- Class imbalance handling (class_weight = "balanced")
- Cross-validation & hyperparameter tuning
- Evaluation using ROC-AUC and PR-AUC

## Experiment Tracking (MLflow)
- Parameter logging
- Metric tracking
- Model artifact storage
- Version-controlled experiments
- SHAP explainability artifact logging

## Model Serving Layer
- FastAPI + Uvicorn inference server
- MLflow-registered model loading at startup
- Preprocessing pipeline loaded alongside model
- Pydantic schema validation
- Feature alignment checks
- Probability-based risk classification logic

## Monitoring & Drift Detection
- Population Stability Index (PSI)
- Data drift detection
- Performance monitoring
- Retraining trigger mechanism

## Client Integration
- Swagger UI & Postman support
- Extensible REST API design
- Designed for integration with loan processing systems

      `,


    implementation: `

The system was implemented as an end-to-end machine learning pipeline combining structured data preprocessing, model experimentation, experiment tracking, and API-based deployment. A modular Scikit-learn Pipeline with ColumnTransformer was used to ensure consistent preprocessing across training and inference. Multiple model variants were trained, including a Logistic Regression baseline and an XGBoost classifier for improved non-linear representation. Severe class imbalance was addressed using class weighting and evaluated using ROC-AUC and PR-AUC to ensure reliable performance measurement.

All experiments were tracked using MLflow, enabling parameter logging, metric comparison, artifact versioning, and reproducible model selection. Feature sets were carefully restricted to application-time-safe attributes to prevent data leakage and ensure real-world deployability. The final selected model and preprocessing pipeline were integrated into a FastAPI-based inference service, where the model is loaded at startup and served through validated REST endpoints. SHAP-based explainability analysis was incorporated to provide interpretability and regulatory transparency. The architecture was designed to maintain strict training-serving feature alignment and support future retraining and monitoring workflows.
`,

    decisions: `
## 1. Use of Scikit-learn Pipeline Instead of Manual Preprocessing

All preprocessing logic was encapsulated inside a Scikit-learn Pipeline with ColumnTransformer. This ensures identical transformations during training and inference, preventing feature mismatch bugs.

Alternative considered:
- Manual preprocessing before model training

Reason not chosen:
Manual preprocessing increases the risk of training-serving drift and makes reproducibility harder. The Pipeline abstraction enforces consistency and improves maintainability.

---

## 2. Logistic Regression as Baseline Model

A Logistic Regression model was implemented as a baseline before moving to more complex models.

Alternative considered:
- Directly using XGBoost or deep neural networks

Reason not chosen:
A baseline linear model provides interpretability and establishes a performance reference. Jumping directly to complex models reduces transparency and makes performance gains harder to justify.

---

## 3. XGBoost Instead of Deep Learning Models

The final high-performance model used gradient-boosted decision trees (XGBoost).

Alternative considered:
- Deep Neural Networks
- Random Forest

Reason not chosen:
For structured tabular financial data, gradient-boosted trees consistently outperform neural networks in both performance and stability. Neural networks require heavier tuning and larger datasets, while offering limited gains on this type of problem. Random Forest was considered but XGBoost provides better regularization and optimization control.

---

## 4. Application-Time-Safe Feature Selection

Only features available at the time of loan application were used in the deployable model.

Alternative considered:
- Using all available historical and external risk scores

Reason not chosen:
Including post-decision or externally derived risk indicators introduces data leakage and inflates evaluation metrics unrealistically. The chosen approach prioritizes deployability over artificially high performance.

---

## 5. ROC-AUC and PR-AUC Over Accuracy

Evaluation metrics were selected to reflect real-world class imbalance.

Alternative considered:
- Accuracy as primary metric

Reason not chosen:
In highly imbalanced datasets, accuracy can be misleading. ROC-AUC measures ranking performance, while PR-AUC better captures minority class detection quality.

---

## 6. MLflow for Experiment Tracking

MLflow was integrated for experiment tracking and artifact versioning.

Alternative considered:
- Manual logging or local file storage

Reason not chosen:
Manual tracking reduces reproducibility and makes comparison across experiments inefficient. MLflow provides structured experiment management and supports model version control.

---

## 7. FastAPI Instead of Flask

The inference layer was built using FastAPI.

Alternative considered:
- Flask

Reason not chosen:
FastAPI provides built-in data validation via Pydantic, automatic OpenAPI documentation, and better asynchronous support, making it more suitable for production-oriented ML APIs.

---

## 8. SHAP for Explainability

SHAP was integrated for model interpretability.

Alternative considered:
- Feature importance from tree models only

Reason not chosen:
Standard feature importance lacks local interpretability and can be misleading. SHAP provides consistent, theoretically grounded explanations at both global and individual prediction levels.
`,

    challenges: `
## 1. Training-Serving Feature Mismatch

One of the most critical challenges was ensuring strict alignment between features used during training and those available at inference time. Early iterations revealed that including features not present during deployment led to unstable predictions and unrealistic evaluation metrics.

Learning:
Production ML systems require identical preprocessing logic across environments. Encapsulating transformations inside a unified pipeline eliminated this class of errors and reinforced the importance of reproducibility.

---

## 2. Data Leakage Through External Risk Signals

The original dataset contained external risk indicators that significantly improved model performance. However, many of these signals would not realistically be available at application time.

Learning:
Higher metrics do not always mean better systems. Designing a leakage-aware feature subset resulted in lower ROC-AUC but produced a deployable and realistic model.

---

## 3. Severe Class Imbalance

Loan default cases represented a small minority of the dataset, making accuracy an unreliable metric. Initial experiments showed misleading performance when evaluated using accuracy alone.

Learning:
Metric selection directly influences model interpretation. ROC-AUC and PR-AUC provided a more truthful representation of minority class detection capability.

---

## 4. Experiment Management Complexity

As multiple model variants were trained with different feature sets and hyperparameters, manual tracking became unmanageable.

Learning:
Structured experiment tracking is essential for iterative ML development. Integrating MLflow significantly improved experiment comparison, reproducibility, and model selection clarity.

---

## 5. Model Interpretability Challenges

Tree-based models provided strong performance but required interpretability for financial risk transparency. Raw feature importance values lacked clarity for individual predictions.

Learning:
Explainability tools such as SHAP are critical in regulated domains. Understanding both global and local model behavior improves trust and debugging capability.

---

## 6. Performance vs Deployability Tradeoff

The full-feature model achieved stronger metrics, but relied on signals that would not be available in a real lending workflow.

Learning:
Real-world system design requires balancing theoretical performance with operational constraints. Prioritizing deployability over marginal metric gains resulted in a more production-aligned architecture.
`,

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
    githubUrl: "https://github.com/ayushmanpani/compliance-rag",
    liveUrl: "https://compliance-rag.onrender.com/",
    featured: true,
    diagram: "/diagrams/rag-compliance.png",
    diagramCaption: "End-to-end RAG workflow including ingestion, embedding, retrieval, LLM inference, source attribution, and state management.",
    metrics: [
      {
        title: "System Performance & Evaluation",
        type: "structured",
        content: `
## Retrieval Performance
- Embedding model: intfloat e5-small-v2
- Vector store: FAISS dense similarity search
- Top-k retrieval with metadata filtering

## Latency
- Retrieval time: 50–150 ms (CPU)
- End-to-end response time: 1–3 seconds

## Grounding Controls
- Strict context-constrained generation
- Fallback response when no evidence found
- Source attribution for every answer

## Robustness Improvements
- Query expansion for embedding compatibility
- Token length control to prevent overflow
`
      }
    ]
    ,


    screenshots: ["/screenshots/cr1.png", "/screenshots/cr2.png", "/screenshots/cr3.png"],
    problem: `## Problem Statement

Regulatory and compliance documents are typically long, complex, and difficult to navigate manually. Financial institutions must frequently interpret guidelines such as KYC norms, due diligence requirements, and regulatory circulars, where incorrect interpretation can lead to operational or legal risk.

The objective of this system is to build a Retrieval-Augmented Generation (RAG) pipeline that enables users to query compliance documents using natural language and receive context-grounded, source-attributed responses.

The system must:
- Retrieve relevant document sections accurately
- Generate answers strictly from retrieved context
- Avoid hallucinated or unsupported responses
- Provide transparent source references
- Operate efficiently in a CPU-only environment

`,

    architecture: `
## User Interface Layer

- Streamlit-based frontend
- PDF upload interface
- Document selector for targeted querying
- Natural language question input
- Answer + source citation display
- Reset and delete document controls
- Communication via HTTP / JSON REST API

---

## Application Backend (FastAPI Layer)

The backend exposes structured REST endpoints that orchestrate ingestion, querying, and lifecycle management:

- POST upload → ingest PDF into knowledge base
- POST ask → execute RAG query
- GET documents → list uploaded documents
- DELETE documents → remove document and rebuild index
- POST reset → clear knowledge base
- POST cleanup → enforce retention policy

This layer acts as the control plane for the RAG pipeline.

---

## RAG Orchestration Layer

### Document Ingestion Pipeline
- PDF text extraction
- OCR fallback for scanned documents
- Text cleaning and normalization
- Recursive chunking strategy
- Metadata attachment (doc_id, page, chunk_id)

### Embedding Pipeline
- Passage embedding using E5 model
- FAISS vector insertion
- Batch-safe encoding for stability

### Query Pipeline
- Query normalization for embedding compatibility
- Adaptive top-k retrieval
- FAISS similarity search
- Optional reranking
- Context assembly from retrieved chunks

### LLM Inference Engine
- Prompt templating
- Flan-T5 generation
- Faithfulness constraints (answer only from context)

### Source Attribution Layer
- Chunk tracing
- Sentence-level excerpt extraction
- Metadata mapping for document reference transparency

---

## Data & State Management

### Persistent File Storage
- Uploaded PDF storage
- Scanned image handling
- Temporary OCR artifacts

### Vector Storage
- FAISS index
- Incremental updates on ingestion
- Full rebuild on document deletion or reset

### Metadata & Governance
- metadata.json registry
- doc_id to filename mapping
- upload timestamps
- retention and cleanup rules



      `,


    implementation: `


The system was implemented as a modular Retrieval-Augmented Generation pipeline combining document ingestion, semantic indexing, similarity-based retrieval, and context-grounded language generation. PDF documents were parsed and segmented into manageable text chunks with associated metadata. These chunks were converted into dense vector embeddings and stored in a FAISS index for efficient similarity search.

At query time, user input is embedded and matched against indexed document vectors to retrieve the most relevant context segments. Retrieved passages are then passed to a lightweight language model configured to generate responses strictly constrained to the provided context. The system includes explicit fallback handling to prevent unsupported answers when relevant information is not found.

A FastAPI service wraps the pipeline, providing REST-based access with structured validation and source attribution. The architecture ensures consistency between ingestion, retrieval, and generation components while maintaining CPU-based deployability.

`,

    decisions: `

## 1. Dense Vector Retrieval Instead of Keyword Search

The system uses dense embeddings with FAISS instead of traditional keyword-based search.

Alternative considered:
- TF-IDF or BM25 keyword retrieval

Reason not chosen:
Keyword search struggles with semantic variation and paraphrased queries. Dense embeddings provide semantic similarity matching and improve retrieval robustness.

---

## 2. Chunk-Based Document Segmentation

Documents were split into structured chunks before indexing.

Alternative considered:
- Indexing full documents

Reason not chosen:
Large document embeddings dilute contextual relevance and reduce retrieval precision. Chunking improves retrieval granularity and relevance.

---

## 3. Lightweight Language Model for Generation

A compact sequence-to-sequence model was used for generation.

Alternative considered:
- Large-scale proprietary LLM APIs

Reason not chosen:
The objective was cost-efficient, CPU-compatible deployment. Lightweight models provide acceptable performance while maintaining local control.

---

## 4. Strict Context-Constrained Generation

The model was instructed to generate answers only from retrieved context.

Alternative considered:
- Free-form generative responses

Reason not chosen:
Unconstrained generation increases hallucination risk. Regulatory use cases require grounded, verifiable responses.

---

## 5. Local FAISS Index Instead of Cloud Vector Database

FAISS was used for vector storage.

Alternative considered:
- Cloud-based vector databases

Reason not chosen:
Local FAISS reduces dependency, improves control, and simplifies deployment for small-to-medium document collections.
`,

    challenges: `## 1. Hallucination Risk in Generative Models

Initial generations occasionally introduced unsupported details beyond retrieved context.

Learning:
Strict prompt constraints and fallback handling are essential in compliance-focused RAG systems.

---

## 2. Retrieval Precision vs Chunk Size Tradeoff

Larger chunks improved context completeness but reduced retrieval precision.

Learning:
Chunk size selection significantly impacts retrieval relevance and generation quality.

---

## 3. Token Length Constraints

Long queries combined with multiple context chunks caused token overflow issues.

Learning:
Controlling context size and enforcing maximum token limits is necessary for stable generation.

---

## 4. Embedding Model Sensitivity

Different embedding models produced noticeable variation in retrieval quality.

Learning:
Embedding model selection plays a critical role in overall RAG performance and must be evaluated carefully.

---

## 5. CPU-Based Performance Constraints

Operating without GPU acceleration required balancing model size and response latency.

Learning:
System design must consider hardware constraints early in the architecture phase.
`,

  },
];
