import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import vcubeLogo from '@/assets/vcube-logo.svg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,200,150,0.3),transparent_50%)] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_50%)] animate-pulse delay-2000" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-medium rounded-full text-sm border border-primary/30">
            EEE Department Symposium
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6"
        >
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            EKNA 2025
          </span>
          {/* <center> */}
           {/* <img src={vcubeLogo} alt="V-CUBE Logo" className="w-8 h-8 mr-3" /></center> */}
          <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mt-2">
            Electrical Engineering Excellence
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Join us for the most prestigious electrical and electronic engineering symposium. 
          Experience cutting-edge presentations, innovative workshops, competitive challenges, 
          and networking opportunities with industry leaders.
        </motion.p>

        {/* Event Details */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/20">
            <Calendar className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="font-semibold text-foreground">October 25, 2025</p>
              <p className="text-sm text-muted-foreground">1 Day of Innovation</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/20">
            <MapPin className="w-6 h-6 text-secondary" />
            <div className="text-left">
              <p className="font-semibold text-foreground">Anna University Regional Campus,Coimbatore</p>
              <p className="text-sm text-muted-foreground">Seminar Hall</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/20">
            <Users className="w-6 h-6 text-accent" />
            <div className="text-left">
              <p className="font-semibold text-foreground">500+ Participants</p>
              <p className="text-sm text-muted-foreground">Students & Innovators</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* <Button
            size="lg"
            asChild
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold px-8 py-3 text-lg"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4faujmREM8u4VlALf-m5Ms5znSD6EPTCB3O_zFAhS_1P1bQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button> */}
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('#events')}
            className="border-primary/30 hover:bg-primary/10 font-semibold px-8 py-3 text-lg"
          >
            Explore Events
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <p className="text-sm text-muted-foreground mb-2">Discover More</p>
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors duration-200"
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;