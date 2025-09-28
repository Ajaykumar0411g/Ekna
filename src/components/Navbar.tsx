import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '/events', isRoute: true },
    { name: 'Timeline', href: '/timeline', isRoute: true },
    { name: 'Brochure', href: '/brochure', isRoute: true },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // If on home page, just scroll to section
      scrollToSection(sectionId);
    } else {
      // If on other pages, navigate to home then scroll to section
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  const handleNavClick = (item: any) => {
    if (item.isRoute) {
      // For route navigation, we'll handle it in the Link component
      setIsMobileMenuOpen(false);
    } else {
      // For section scrolling
      handleSectionClick(item.href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-card'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
                <img src="/ekna-logo.svg" alt="EKNA Logo" className="w-8 h-8" />
                <span className="text-xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
                  EKNA 2025
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.isRoute ? (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item)}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </motion.button>
                )
              ))}
            </div>

            {/* Register Button & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                asChild
                className="hidden md:flex font-medium bg-gradient-primary text-primary-foreground border-primary hover:shadow-glow-primary/30"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4faujmREM8u4VlALf-m5Ms5znSD6EPTCB3O_zFAhS_1P1bQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-muted transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    item.isRoute ? (
                      <motion.div
                        key={item.name}
                        whileHover={{ x: 10 }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.button
                        key={item.name}
                        whileHover={{ x: 10 }}
                        onClick={() => handleNavClick(item)}
                        className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                      >
                        {item.name}
                      </motion.button>
                    )
                  ))}
                  <Button
                    asChild
                    className="w-full mt-4 bg-gradient-primary text-primary-foreground"
                  >
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4faujmREM8u4VlALf-m5Ms5znSD6EPTCB3O_zFAhS_1P1bQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                      Register Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;