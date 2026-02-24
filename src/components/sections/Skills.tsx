import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";


const Skills = () => {
    return (
        <Section className="pt-32 border-t section-alt border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          <div className="max-w-5xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Capabilities
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Core technical competencies spanning machine learning, backend systems, frontend architecture, and deployment.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            <div className="relative p-6 transition-transform duration-300 border rounded-lg border-border bg-card hover:-translate-y-1">

              <div className="absolute left-0 w-1 rounded-r top-6 bottom-6 bg-accent"></div>

              <div className="pl-4 space-y-4">
                <h3 className="text-lg font-semibold">
                  Machine Learning
                </h3>

                <ul className="space-y-2 text-sm text-muted">
                  <li className="pb-2 border-b border-border">Model Training & Evaluation</li>
                  <li className="pb-2 border-b border-border">Explainability (SHAP)</li>
                  <li className="pb-2 border-b border-border">MLOps (MLflow)</li>
                  <li>Feature Integrity & Serving Alignment</li>
                </ul>
              </div>

            </div>
            <div className="relative p-6 transition-transform duration-300 border rounded-lg border-border bg-card hover:-translate-y-1">

              <div className="absolute left-0 w-1 rounded-r top-6 bottom-6 bg-accent"></div>

              <div className="pl-4 space-y-4">
                <h3 className="text-lg font-semibold">
                  Infrastructure
                </h3>

                <ul className="space-y-2 text-sm text-muted">
                  <li className="pb-2 border-b border-border">Linux / WSL</li>
                  <li className="pb-2 border-b border-border" >Version Control (Git)</li>
                  <li className="pb-2 border-b border-border">Cloud Deployment</li>
                  <li>Monitoring & Logging</li>
                </ul>
              </div>

            </div>
            <div className="relative p-6 transition-transform duration-300 border rounded-lg border-border bg-card hover:-translate-y-1">

              <div className="absolute left-0 w-1 rounded-r top-6 bottom-6 bg-accent"></div>

              <div className="pl-4 space-y-4">
                <h3 className="text-lg font-semibold">
                  Frontend
                </h3>

                <ul className="space-y-2 text-sm text-muted">
                  <li className="pb-2 border-b border-border">React + TypeScript</li>
                  <li className="pb-2 border-b border-border">Component Architecture</li>
                  <li className="pb-2 border-b border-border">Theming Systems</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

            </div>
            <div className="relative p-6 transition-transform duration-300 border rounded-lg border-border bg-card hover:-translate-y-1">

              <div className="absolute left-0 w-1 rounded-r top-6 bottom-6 bg-accent"></div>

              <div className="pl-4 space-y-4">
                <h3 className="text-lg font-semibold">
                  Backend Systems
                </h3>

                <ul className="space-y-2 text-sm text-muted">
                  <li className="pb-2 border-b border-border">FastAPI</li>
                  <li className="pb-2 border-b border-border">RESTful Architecture</li>
                  <li className="pb-2 border-b border-border">Authentication & Validation</li>
                  <li>API Deployment</li>
                </ul>
              </div>

            </div>

          </div>
        </motion.div>
      </Container>
    </Section>
    )
};

export default Skills;