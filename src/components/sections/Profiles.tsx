import Container from "../ui/Container";
import Section from "../ui/Section";
import { motion } from "framer-motion";

const Profiles = () => {
  return (
    <Section className="pt-32 border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Professional Profiles
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Public repositories, coding platforms, and professional presence.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2">

            {/* Development */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold ">Development</h3>
              <div className="flex flex-col gap-3 text-sm">
                <a href="https://github.com/yourusername" target="_blank" className="hover:underline">
                  GitHub →
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:underline">
                  LinkedIn →
                </a>
              </div>
            </div>

            {/* Competitive / Learning */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Coding Platforms</h3>
              <div className="flex flex-col gap-3 text-sm">
                <a href="https://leetcode.com/yourusername" target="_blank" className="hover:underline">
                  LeetCode →
                </a>
                <a href="https://codechef.com/users/yourusername" target="_blank" className="hover:underline">
                  CodeChef →
                </a>
                <a href="https://geeksforgeeks.org/user/yourusername" target="_blank" className="hover:underline">
                  GeeksforGeeks →
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Profiles;
