import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Target, Award, Users, Lightbulb, Globe } from 'lucide-react';
import vcubeLogo from '@/assets/vcube-logo.svg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const stats = [
    { icon: Users, value: "200+", label: "Participants", color: "text-primary" },
    { icon: Lightbulb, value: "50+", label: "Innovation Projects", color: "text-secondary" },
    { icon: Award, value: "₹2L+", label: "Prize Money", color: "text-accent" },
    { icon: Globe, value: "10+", label: "Universities", color: "text-primary" }
  ];

  const features = [
    {
      icon: Target,
      title: "Technical Excellence",
      description: "Showcase cutting-edge projects and innovations in electrical and electronic engineering",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Users,
      title: "Networking Hub",
      description: "Connect with industry leaders, researchers, and fellow engineering enthusiasts",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: Lightbulb,
      title: "Innovation Platform",
      description: "Present groundbreaking ideas and compete with the brightest engineering minds",
      gradient: "from-accent to-accent-glow"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-medium rounded-full text-sm border border-primary/30 mb-4">
              About EKNA 2025
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Powering the Future of
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Electrical Engineering
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              EKNA 2025 is the flagship symposium of the Electrical & Electronic Engineering Department, 
              bringing together brilliant minds to explore innovations, share knowledge, and shape the future 
              of technology through competitive challenges and collaborative learning.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gradient-card rounded-xl border border-border/20 shadow-card"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <img src={vcubeLogo} alt="V-CUBE Logo" className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-display font-bold text-foreground">
                  E-CUBE Excellence
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our Department of Electrical & Electronic Engineering has been at the forefront of 
                technological innovation for over two decades. With state-of-the-art laboratories, 
                world-class faculty, and industry partnerships, we nurture the next generation of 
                engineering leaders.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                EKNA 2025 represents our commitment to excellence in education, research, and 
                innovation. This symposium serves as a bridge between academic knowledge and 
                industry applications, providing students with real-world challenges and 
                opportunities to showcase their technical prowess.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Circuit Design", "Robotics", "AI Integration", "Smart Systems", "IoT Solutions"].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Features */}
            <motion.div variants={itemVariants} className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-gradient-card rounded-xl border border-border/20 shadow-card"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.gradient} bg-opacity-20`}>
                    <feature.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Vision Statement */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-primary bg-opacity-10 rounded-2xl p-8 md:p-12 border border-primary/20 mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-foreground">
              Our Vision
            </h3>
            <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
              "To create a dynamic platform where innovation meets excellence, fostering the next 
              generation of electrical engineers who will design sustainable solutions for a 
              connected and electrified future."
            </p>
          </motion.div>

          {/* YouTube Video */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-foreground">
              Experience EKNA 2025
            </h3>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-glow-primary/20">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&modestbranding=1"
                title="EKNA 2025 Symposium Preview"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Get a glimpse of the excitement and innovation awaiting you at EKNA 2025
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;