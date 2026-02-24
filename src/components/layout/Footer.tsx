import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border">
      <Container>
        <div className="flex flex-col items-center justify-between py-8 text-sm md:flex-row text-muted">
          <p>© {new Date().getFullYear()} Ayushman Pani</p>
          <p>Built with React & Tailwind</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
