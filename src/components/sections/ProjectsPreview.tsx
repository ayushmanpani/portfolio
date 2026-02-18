import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { projects } from "../../data/projects";
import { Link } from "react-router-dom";

const ProjectsPreview = () => {
  return (
    <Section className="pt-20 border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>

            <p className="text-muted text-lg leading-relaxed">
              A selection of systems designed with real-world constraints,
              monitoring, and scalability in mind.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <Card
                  key={project.slug}
                  className="space-y-4 hover:-translate-y-1 transition-transform duration-300"
                >
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-muted text-sm">
                    {project.teaser}
                  </p>

                  {/* <div className="flex flex-wrap gap-2 text-xs">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-card border border-border rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}

                  <div className="flex gap-4 pt-2 text-sm">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-accent hover:underline"
                    >
                      Case Study →
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-muted hover:text-accent"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </Card>
              ))}
          </div>

          {/* View All */}
          <div>
            <Link
              to="/projects"
              className="text-sm text-accent hover:underline"
            >
              View All Projects →
            </Link>
          </div>

        </motion.div>
      </Container>
    </Section>
  );
};

export default ProjectsPreview;
