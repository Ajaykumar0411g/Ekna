import { motion } from 'framer-motion';
import { Zap, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Custom X (Twitter) icon component
const TwitterXIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/_ekna2k25_/?utm_source=ig_web_button_share_sheet", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@eknasympo2k25?feature=shared", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ekna-sympo", label: "LinkedIn" },
    { icon: Mail, href: "mailto:eknasympo@gmail.com", label: "Email" },
    { icon: TwitterXIcon, href: "https://x.com/eknasympo", label: "X (Twitter)" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-hero text-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,200,150,0.3),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <img src="/ekna-logo.svg" alt="EKNA Logo" className="w-10 h-10" />
                <span className="text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
                  EKNA 2025
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The premier symposium of the Electrical & Electronic Engineering Department, 
                bringing together brilliant minds to shape the future of technology.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-white/10 hover:bg-primary/20 transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-display font-bold text-foreground">Contact Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 hover-scale">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Anna University Regional Campus</p>
                    <p className="text-sm text-muted-foreground">Maruthamalai Main Road, Navavoor</p>
                    <p className="text-sm text-muted-foreground">Coimbatore, Tamil Nadu 641046</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 hover-scale">
                  <Mail className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:eknasympo@gmail.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors story-link"
                    >
                      eknasympo@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 hover-scale">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">General Contact</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Risikeshwaran: +91 6369160400</p>
                      <p>Mahesh: +91 7639857325</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 hover-scale">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Technical Events</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Kaleeshwaran: +91 8825614654</p>
                      <p>Priyanka: +91 6374849144</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 hover-scale">
                  <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Non-Technical Events</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Naveen: +91 9043641710</p>
                      <p>Anandharubi: +91 8667232871</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* EEE Themed Animation */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              {/* Animated Circuit Pattern */}
              <div className="relative w-48 h-48 mx-auto">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    x: [0, 20, 0, -20, 0],
                    y: [0, -15, 0, 15, 0],
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 border-2 border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                    x: [0, -25, 0, 25, 0],
                    y: [0, 20, 0, -20, 0],
                    scale: [1, 1.1, 1, 0.9, 1],
                  }}
                  transition={{
                    rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                    x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-4 border-2 border-secondary/30 rounded-full"
                />
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    x: [0, 15, 0, -15, 0],
                    y: [0, -25, 0, 25, 0],
                    scale: [1, 0.8, 1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    x: { duration: 16, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 9, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-8 border-2 border-accent/30 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="flex items-center justify-center"
                  >
                    <Zap className="w-12 h-12 text-primary" />
                  </motion.div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Powering Innovation
                </h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Where electrical engineering meets innovation, creating circuits of endless possibilities
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/20 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 EKNA Symposium. All rights reserved. | EEE Department
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Made with ❤️ for engineering excellence</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;