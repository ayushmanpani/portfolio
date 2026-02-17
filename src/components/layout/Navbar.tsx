import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useTheme } from "../../theme/ThemeProvider";

const Navbar = () => {
  const { toggleTheme } = useTheme();

  return (
    <nav className="border-b border-border bg-bg sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="text-lg font-semibold">
            Ayushman.dev
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/projects" className="relative group">
              <span className="hover:text-accent transition-colors">
                Projects
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
            <Link to="/projects" className="relative group">
              <span className="hover:text-accent transition-colors">
                Blog
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
            <Link to="/projects" className="relative group">
              <span className="hover:text-accent transition-colors">
                Contact
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>

            <Button variant="secondary" onClick={toggleTheme}>
              Theme
            </Button>
          </div>

        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

