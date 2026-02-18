import { projects } from "../data/projects";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Section className="pt-32">
      <Container>
        <div className="space-y-24">

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold">
              Selected Systems
            </h1>
            <p className="text-muted text-lg">
              Detailed engineering case studies demonstrating system design,
              deployment, and production-aware implementation.
            </p>
          </div>

          {projects.map((project, index) => (
            <div key={project.slug} className="border-b border-border pb-12 space-y-6">

              <div className="text-muted text-sm font-medium">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className="text-2xl font-semibold">
                {project.title}
              </h2>

              <p className="text-muted leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 text-xs">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 border border-border rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 text-sm">
                <Link to={`/projects/${project.slug}`} className="text-accent hover:underline">
                  View Case Study →
                </Link>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" className="hover:underline">
                    GitHub →
                  </a>
                )}
              </div>

            </div>
          ))}

        </div>
      </Container>
    </Section>
  );
};

export default Projects;
