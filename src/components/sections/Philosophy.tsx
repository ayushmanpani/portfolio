import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";

const Philosophy = () => {
  return (
    <Section className="pt-20 section-alt border-t border-b border-border">
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
            <span className="text-sm uppercase tracking-wider text-accent font-medium">
              {/* Philosophy */}
            </span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeOut", staggerChildren: 0.15 }
              }}}> 
              Engineering Approach
            </motion.h2>
            <motion.p 
              className="text-muted text-lg leading-relaxed"
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
                className="grid md:grid-cols-12 gap-8 items-start">

                <motion.div 
                  className="md:col-span-2 text-accent font-semibold text-3xl pt-1"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeOut", staggerChildren: 0.20 }
                  }}}>
                  {item.number}
                </motion.div>

                <motion.div
                  className="md:col-span-10 space-y-3"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeOut", staggerChildren: 0.20} }
                  }}>
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
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
