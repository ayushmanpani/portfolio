import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <Section className="pt-32">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl font-bold">Project Not Found</h1>
                    </div>
                </Container>
            </Section>
        );
    }

    return (
        <Section className="pt-32">
            <Container>
                <div className="max-w-5xl mx-auto space-y-28">

                    {/* Back Button */}
                    <div className="text-sm text-muted">
                        <Link to="/projects" className="hover:underline">
                            ← Back to Projects
                        </Link>
                    </div>

                    {/* Overview */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            {project.title}
                        </h1>

                        <p className="text-lg text-muted">
                            {project.subtitle}
                        </p>

                        <p className="leading-7">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm pt-1">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                className="text-accent hover:underline"
                            >
                                GitHub Repository →
                            </a>
                        )}

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                className="text-accent hover:underline"
                            >
                                Live Deployment →
                            </a>
                        )}
                    </div>


                    {/* 01 Problem */}
                    {project.problem && (
                        <div className="space-y-6 border-t border-border pt-16">
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                01. Problem & Constraints
                            </h2>
                            <p className="text-muted leading-7 whitespace-pre-line">
                                {project.problem}
                            </p>
                        </div>
                    )}

                    {/* 02 Architecture */}
                    {(project.architecture || project.diagram) && (
                        <div className="space-y-8 border-t border-border pt-16">
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                02. System Architecture
                            </h2>

                            {project.architecture && (
                                <p className="text-muted leading-7 whitespace-pre-line">
                                    {project.architecture}
                                </p>
                            )}

                            {project.diagram && (
                                <div className="mt-10 border border-border rounded-lg overflow-hidden">
                                    <img
                                        src={project.diagram}
                                        alt={`${project.title} Architecture Diagram`}
                                        className="w-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {/* 03 Implementation */}
                    {project.implementation && (
                        <div className="space-y-6 border-t border-border pt-16">
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                03. Implementation Details
                            </h2>
                            <p className="text-muted leading-7 whitespace-pre-line">
                                {project.implementation}
                            </p>
                        </div>
                    )}

                    {project.screenshots && project.screenshots.length > 0 && (
                        <div className="mt-12 space-y-6">

                            <div
                                className={`grid gap-6 ${project.screenshots.length === 1
                                    ? "grid-cols-1"
                                    : project.screenshots.length === 2
                                        ? "grid-cols-2"
                                        : "grid-cols-2"
                                    }`}
                            >

                                {project.screenshots.slice(0, 4).map((img, index) => (
                                    <div
                                        key={index}
                                        className="border border-border rounded-lg overflow-hidden bg-card"
                                    >
                                        <div className="aspect-[16/9]">
                                            <img
                                                src={img}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 04 Technical Decisions */}
                    {project.decisions && (
                        <div className="space-y-6 border-t border-border pt-16">
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                04. Technical Decisions
                            </h2>
                            <p className="text-muted leading-7 whitespace-pre-line">
                                {project.decisions}
                            </p>
                        </div>
                    )}

                    {/* 05 Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                        <div className="space-y-12 border-t border-border pt-16">
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                05. Performance & Metrics
                            </h2>

                            {project.metrics.map((table, index) => (
                                <div key={index} className="space-y-6">
                                    <h3 className="text-lg font-semibold">
                                        {table.title}
                                    </h3>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr className="border-b border-border">
                                                    {table.columns.map((col, i) => (
                                                        <th
                                                            key={i}
                                                            className="text-left py-3 pr-6 font-medium text-muted"
                                                        >
                                                            {col}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {table.rows.map((row, rIndex) => (
                                                    <tr
                                                        key={rIndex}
                                                        className="border-b border-border"
                                                    >
                                                        {row.map((cell, cIndex) => (
                                                            <td
                                                                key={cIndex}
                                                                className="py-3 pr-6 text-text"
                                                            >
                                                                {cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}



                    {/* 06 Challenges */}
                    {project.challenges && (
                        <div className="space-y-6 border-t border-border pt-16">
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                06. Challenges & Learnings
                            </h2>
                            <p className="text-muted leading-7 whitespace-pre-line">
                                {project.challenges}
                            </p>
                        </div>
                    )}

    

                </div>
            </Container>
        </Section>
    );
};

export default ProjectDetail;
