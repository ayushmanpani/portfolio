import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const Contact = () => {
  return (
    <Section className="pt-32">
      <Container>
        <div className="max-w-2xl mx-auto space-y-16">

          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Let’s Connect
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 mt-4 text-sm border rounded-full bg-surface border-border text-muted">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Open to internship & full-time roles
            </div>

            <p className="text-lg leading-relaxed text-muted">
              I’m currently open to internship and full-time opportunities
              in Machine Learning, Systems Engineering, and Full-Stack Development.
              If you’d like to discuss a role or collaboration, feel free to reach out.
            </p>
          </div>

          <div className="w-16 h-[2px] bg-accent mt-6"></div>

          {/* Contact Info */}
          <div className="space-y-10">

            <div className="space-y-2">
              <span className="text-sm tracking-wide uppercase text-muted">
                Email
              </span>
              <a
                href="mailto:your.email@example.com"
                className="pl-4 text-lg font-medium transition-colors duration-200 text-text hover:text-accent"
              >
                your.email@example.com
              </a>
            </div>

            <div className="space-y-2">
              <span className="text-sm tracking-wide uppercase text-muted">
                GitHub
              </span>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="pl-4 text-lg font-medium transition-colors duration-200 text-text hover:text-accent"
              >
                github.com/yourusername
              </a>
            </div>

            <div className="space-y-2">
              <span className="text-sm tracking-wide uppercase text-muted">
                LinkedIn
              </span>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="pl-4 text-lg font-medium transition-colors duration-200 text-text hover:text-accent"
              >
                linkedin.com/in/yourusername
              </a>
            </div>

            {/* Resumes */}
            <div className="pt-8 space-y-4 border-t border-border">
              <span className="text-sm tracking-wide uppercase text-muted">
                Resume
              </span>

              <div className="flex flex-col gap-3 text-lg font-medium">
                <a
                  href="/resume/Resume(ML Engineer).pdf"
                  target="_blank"
                  className="transition-colors duration-200 hover:text-accent"
                >
                  Machine Learning Resume →
                </a>

                <a
                  href="/resume/Resume(Full-Stack).pdf"
                  target="_blank"
                  className="transition-colors duration-200 hover:text-accent"
                >
                  Full-Stack Resume →
                </a>

                <a
                  href="/resume/ayushman-systems.pdf"
                  target="_blank"
                  className="transition-colors duration-200 hover:text-accent"
                >
                  Systems Engineering Resume →
                </a>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
};

export default Contact;