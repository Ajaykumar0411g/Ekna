import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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
    <section id="contact" className="py-20">
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
              Register Now
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Join EKNA 2025
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Engineering Excellence
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-8">
            {/* Venue Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Venue Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Anna University Regional Campus</h4>
                    <p className="text-muted-foreground">2VRP+XCW, Maruthamalai Main Road</p>
                    <p className="text-muted-foreground">Navavoor, Coimbatore(Dt), Tamil Nadu 641046</p>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden border border-border/20 relative group cursor-pointer">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.8576658733274!2d76.94293487507898!3d10.89486428930102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85c95d36b0f57%3A0x5c154e9b7c468c5!2sAnna%20University%20Regional%20Campus%20Coimbatore%2C%202VRP%2BXCW%2C%20Maruthamalai%20Main%20Road%2C%20Navavoor%2C%20Tamil%20Nadu%20641046!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Anna University Regional Campus Coimbatore Location"
                    />
                    <div 
                      className="absolute inset-0 bg-transparent hover:bg-primary/10 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100"
                      onClick={() => window.open('https://maps.google.com/?q=2VRP%2BXCW%2C+Maruthamalai+Main+Road%2C+Navavoor%2C+Coimbatore%2C+Tamil+Nadu+641046', '_blank')}
                    >
                      <div className="bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/20">
                        <span className="text-sm font-medium text-foreground">Click to open in Google Maps</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-3 gap-6">
                <Card className="bg-gradient-card border-border/20">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 mx-auto mb-3 text-secondary" />
                    <h4 className="font-semibold mb-2">General</h4>
                    <p className="text-xs text-muted-foreground">Risikeshwaran</p>
                    <p className="text-xs text-muted-foreground">+91 6369160400</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/20">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 mx-auto mb-3 text-accent" />
                    <h4 className="font-semibold mb-2">Technical</h4>
                    <p className="text-xs text-muted-foreground">Kaleeshwaran</p>
                    <p className="text-xs text-muted-foreground">+91 8825614654</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/20">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h4 className="font-semibold mb-2">Non-Tech</h4>
                    <p className="text-xs text-muted-foreground">Naveen</p>
                    <p className="text-xs text-muted-foreground">+91 9043641710</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;