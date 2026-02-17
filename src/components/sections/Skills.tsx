import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";


const Skills = () => {
    return (
        <Section className="pt-32 section-alt border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          <div className="max-w-5xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Capabilities
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Core technical competencies spanning machine learning, backend systems, frontend architecture, and deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            <div className="relative p-6 border border-border rounded-lg bg-card hover:-translate-y-1 transition-transform duration-300">

              <div className="absolute left-0 top-6 bottom-6 w-1 bg-accent rounded-r"></div>

              <div className="pl-4 space-y-4">
                <h3 className="text-lg font-semibold">
                  Machine Learning
                </h3>

                <ul className="space-y-2 text-muted text-sm">
                  <li className="border-b border-border pb-2">Model Training & Evaluation</li>
                  <li className="border-b border-border pb-2">Explainability (SHAP)</li>
                  <li className="border-b border-border pb-2">MLOps (MLflow)</li>
                  <li>Feature Integrity & Serving Alignment</li>
                </ul>
              </div>

            </div>
            <div className="relative p-6 border border-border rounded-lg bg-card hover:-translate-y-1 transition-transform duration-300">

              <div className="absolute left-0 top-6 bottom-6 w-1 bg-accent rounded-r"></div>

              <div className="pl-4 space-y-4">
                <h3 className="text-lg font-semibold">
                  Infrastructure
                </h3>

                <ul className="space-y-2 text-muted text-sm">
                  <li className="border-b border-border pb-2">Linux / WSL</li>
                  <li className="border-b border-border pb-2" >Version Control (Git)</li>
                  <li className="border-b border-border pb-2">Cloud Deployment</li>
                  <li>Monitoring & Logging</li>
                </ul>
              </div>

            </div>
            <div className="relative p-6 border border-border rounded-lg bg-card hover:-translate-y-1 transition-transform duration-300">

              <div className="absolute left-0 top-6 bottom-6 w-1 bg-accent rounded-r"></div>

              <div className="pl-4 space-y-4">
                <h3 className="text-lg font-semibold">
                  Frontend
                </h3>

                <ul className="space-y-2 text-muted text-sm">
                  <li className="border-b border-border pb-2">React + TypeScript</li>
                  <li className="border-b border-border pb-2">Component Architecture</li>
                  <li className="border-b border-border pb-2">Theming Systems</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

            </div>
            <div className="relative p-6 border border-border rounded-lg bg-card hover:-translate-y-1 transition-transform duration-300">

              <div className="absolute left-0 top-6 bottom-6 w-1 bg-accent rounded-r"></div>

              <div className="pl-4 space-y-4">
                <h3 className="text-lg font-semibold">
                  Backend Systems
                </h3>

                <ul className="space-y-2 text-muted text-sm">
                  <li className="border-b border-border pb-2">FastAPI</li>
                  <li className="border-b border-border pb-2">RESTful Architecture</li>
                  <li className="border-b border-border pb-2">Authentication & Validation</li>
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