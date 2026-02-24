import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";

const Philosophy = () => {
  return (
    <Section className="pt-20 border-t border-b section-alt border-border">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {}}
          }
          className="space-y-20">
          <div className="max-w-4xl space-y-4">
            <span className="text-sm font-medium tracking-wider uppercase text-accent">
              {/* Philosophy */}
            </span>
            <motion.h2 
              className="text-3xl font-bold tracking-tight md:text-4xl"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeOut", staggerChildren: 0.15 }
              }}}> 
              Engineering Approach
            </motion.h2>
            <motion.p 
              className="text-lg leading-relaxed text-muted"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeOut", staggerChildren: 0.15 }
              }}}>
              I build systems that prioritize production realism,
              long-term maintainability, and operational clarity.
            </motion.p>
          </div>

          <div className="space-y-16">

            {[
              {
                number: "01",
                title: "Production-Oriented ML",
                text: "Model accuracy is only part of the system. I design for feature alignment, monitoring, explainability, and deployment stability."
              },
              {
                number: "02",
                title: "Scalable Web Architecture",
                text: "Frontend and backend systems are structured around modularity, clean APIs, and maintainable component boundaries."
              },
              {
                number: "03",
                title: "Security & Reliability",
                text: "Systems are built with validation layers, observability, and architectural awareness to ensure resilience."
              }
            ].map((item) => (
              <div 
                key={item.number} 
                className="grid items-start gap-8 md:grid-cols-12">

                <motion.div 
                  className="pt-1 text-3xl font-semibold md:col-span-2 text-accent"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeOut", staggerChildren: 0.20 }
                  }}}>
                  {item.number}
                </motion.div>

                <motion.div
                  className="space-y-3 md:col-span-10"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeOut", staggerChildren: 0.20} }
                  }}>
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted">
                    {item.text}
                  </p>
                </motion.div>

              </div>
            ))}

          </div>

        </motion.div>
      </Container>
    </Section>
  );
};

export default Philosophy;
