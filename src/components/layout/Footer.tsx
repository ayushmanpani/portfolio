import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-32 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between text-sm text-muted">
          <span>© 2026 Ayushman Pani</span>
          <span>AI & Systems Engineer</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
