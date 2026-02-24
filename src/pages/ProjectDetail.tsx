import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import ReactMarkdown from "react-markdown";


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
                        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                            {project.title}
                        </h1>

                        <p className="text-lg text-muted">
                            {project.subtitle}
                        </p>

                        <p className="leading-7">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-1 text-sm">
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
                        <div className="pt-16 space-y-6 border-t border-gray-400">
                            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                01. Problem & Constraints
                            </h2>
                            <div className="pl-6 space-y-6 leading-tight text-muted">
                                <ReactMarkdown
                                    components={{
                                        h2: ({ node, ...props }) => (
                                            <h2 className="mt-6 mb-1 text-lg font-semibold text-accent"
                                                {...props} />
                                        ),
                                        ul: ({ node, ...props }) => (
                                            <ul className="pl-6 space-y-1 list-disc " {...props} />
                                        ),
                                        li: ({ node, ...props }) => (
                                            <li className=" text-muted" {...props} />
                                        ),
                                    }}
                                >
                                    {project.problem}

                                </ReactMarkdown>
                            </div>
                        </div>
                    )}

                    {/* 02 Architecture */}
                    {(project.architecture || project.diagram) && (
                        <div className="pt-16 space-y-6 border-t-2 border-gray-400">
                            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                02. System Architecture
                            </h2>

                            {project.architecture && (
                                < div className="pl-6 space-y-6 leading-tight text-muted">
                                    <ReactMarkdown
                                        components={{
                                            h2: ({ node, ...props }) => (
                                                <h2 className="mt-6 mb-1 text-lg font-semibold text-accent"
                                                    {...props} />
                                            ),
                                            ul: ({ node, ...props }) => (
                                                <ul className="pl-6 space-y-1 list-disc " {...props} />
                                            ),
                                            li: ({ node, ...props }) => (
                                                <li className=" text-muted" {...props} />
                                            ),
                                        }}
                                    >
                                        {project.architecture}
                                    </ReactMarkdown>
                                </div>

                            )}

                            {project.diagram && (
                                <div className="mt-10 overflow-hidden border rounded-lg border-border bg-card/40 backdrop-blur-sm">
                                    <div className="flex items-center justify-center p-6">
                                        <img
                                            src={project.diagram}
                                            alt={`${project.title} Architecture Diagram`}
                                            className="max-h-[1200px] w-auto transition-transform duration-300 hover:scale-[1.02]"
                                        />
                                    </div>

                                    {project.diagramCaption && (
                                        <p className="mt-4 text-xs text-center text-muted">
                                            {project.diagramCaption}
                                        </p>
                                    )}


                                </div>
                            )}
                        </div>
                    )}

                    {/* 03 Implementation */}
                    {project.implementation && (
                        <div className="pt-16 space-y-6 border-t-2 border-gray-400">
                            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                03. Implementation Details
                            </h2>
                            < div className="pl-6 space-y-6 leading-7 text-muted">
                                <ReactMarkdown
                                    components={{
                                        h2: ({ node, ...props }) => (
                                            <h2 className="mt-6 mb-1 text-lg font-semibold text-accent"
                                                {...props} />
                                        ),
                                        ul: ({ node, ...props }) => (
                                            <ul className="pl-6 space-y-1 list-disc " {...props} />
                                        ),
                                        li: ({ node, ...props }) => (
                                            <li className=" text-muted" {...props} />
                                        ),
                                    }}
                                >
                                    {project.implementation}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}

                    {project.screenshots && project.screenshots.length > 0 && (
                        <div className="max-w-5xl px-4 mx-auto mt-12 space-y-6">

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
                                        className="overflow-hidden transition-all duration-300 border group rounded-xl border-border bg-card/60 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1"

                                    >
                                        <div className="aspect-[16/9]">
                                            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/10 to-transparent group-hover:opacity-100" />

                                            <img
                                                src={img}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 04 Technical Decisions */}
                    {project.decisions && (
                        <div className="pt-16 space-y-6 border-t-2 border-gray-400">
                            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                04. Technical Decisions
                            </h2>
                            < div className="pl-6 space-y-6 leading-tight text-muted">
                                <ReactMarkdown
                                    components={{
                                        h2: ({ node, ...props }) => (
                                            <h2 className="mt-6 mb-1 text-lg font-semibold text-accent"
                                                {...props} />
                                        ),
                                        ul: ({ node, ...props }) => (
                                            <ul className="pl-6 space-y-1 list-disc " {...props} />
                                        ),
                                        li: ({ node, ...props }) => (
                                            <li className=" text-muted" {...props} />
                                        ),
                                    }}
                                >
                                    {project.decisions}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}

                    {/* 05 Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                        <div className="pt-16 space-y-12 border-t-2 border-gray-400">
                            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                05. Performance & Metrics
                            </h2>

                            <div className="pl-6">
                                {project.metrics.map((section, index) => (
                                    <div key={index} className="space-y-6">
                                        {/* <h3 className="text-lg font-semibold">
                                        {section.title}
                                    </h3> */}

                                        {section.type === "structured" ? (
                                            <div className="space-y-4 leading-6 text-muted">
                                                <ReactMarkdown
                                                    components={{
                                                        ul: ({ ...props }) => (
                                                            <ul className="pl-6 space-y-1 list-disc" {...props} />
                                                        ),
                                                        li: ({ ...props }) => (
                                                            <li className="text-muted" {...props} />
                                                        ),
                                                        h2: ({ ...props }) => (
                                                            <h4 className="mt-6 mb-2 font-semibold text-accent" {...props} />
                                                        ),
                                                    }}
                                                >
                                                    {section.content || ""}
                                                </ReactMarkdown>
                                            </div>
                                        ) : (
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm border-collapse">
                                                    <thead>
                                                        <tr className="border-b border-border">
                                                            {section.columns?.map((col, i) => (
                                                                <th
                                                                    key={i}
                                                                    className="py-3 pr-6 font-medium text-left text-muted"
                                                                >
                                                                    {col}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {section.rows?.map((row, rIndex) => (
                                                            <tr key={rIndex} className="border-b border-border">
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
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>
                    )}



                    {/* 06 Challenges */}
                    {project.challenges && (
                        <div className="pt-16 space-y-6 border-t-2 border-gray-400">
                            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                06. Challenges & Learnings
                            </h2>
                            < div className="pl-6 space-y-6 leading-tight text-muted">
                                <ReactMarkdown
                                    components={{
                                        h2: ({ node, ...props }) => (
                                            <h2 className="mt-6 mb-1 text-lg font-semibold text-accent"
                                                {...props} />
                                        ),
                                        ul: ({ node, ...props }) => (
                                            <ul className="pl-6 space-y-1 list-disc " {...props} />
                                        ),
                                        li: ({ node, ...props }) => (
                                            <li className=" text-muted" {...props} />
                                        ),
                                    }}
                                >
                                    {project.challenges}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}



                </div>
            </Container>
        </Section >
    );
};

export default ProjectDetail;
