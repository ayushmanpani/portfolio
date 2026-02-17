import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <Section className="pt-32 border-t border-border">
      <Container>
        <div className="max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Open to Opportunities
          </h2>

          <p className="text-muted text-lg leading-relaxed">
            I’m currently seeking roles in machine learning systems,
            backend engineering, and full-stack development.
          </p>

          <Link to="/contact">
            <Button>
              Contact Me →
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default ContactCTA;
