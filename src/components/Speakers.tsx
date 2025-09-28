import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { speakers } from '@/data/speakers';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Linkedin, Twitter, Github, Globe, Clock } from 'lucide-react';

const Speakers = () => {
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

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin': return Linkedin;
      case 'twitter': return Twitter;
      case 'github': return Github;
      case 'website': return Globe;
      default: return ExternalLink;
    }
  };

  return (
    <section id="speakers" className="py-20">
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
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-medium rounded-full text-sm border border-accent/30 mb-4">
              Keynote Speakers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Learn from
              <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get inspired by renowned experts from leading technology companies who will share 
              their insights on the future of electrical engineering and emerging technologies.
            </p>
          </motion.div>

          {/* Speakers Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {speakers.map((speaker) => (
              <motion.div key={speaker.id} variants={itemVariants}>
                <Card className="h-full group hover:shadow-glow-primary/20 transition-all duration-300 border-border/20 bg-gradient-card overflow-hidden">
                  {/* Speaker Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">
                          {speaker.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="pb-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                        {speaker.name}
                      </CardTitle>
                      <div className="space-y-1">
                        <CardDescription className="font-medium text-foreground">
                          {speaker.designation}
                        </CardDescription>
                        <CardDescription className="text-primary font-medium">
                          {speaker.company}
                        </CardDescription>
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {speaker.expertise.slice(0, 3).map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {speaker.expertise.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{speaker.expertise.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Bio */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {speaker.bio}
                    </p>

                    {/* Talk Information */}
                    <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-foreground text-sm">
                        {speaker.talkTitle}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {speaker.talkDescription}
                      </p>
                      <div className="flex items-center text-xs text-primary">
                        <Clock className="w-3 h-3 mr-1" />
                        {speaker.talkTime}
                      </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/20">
                      <div className="flex space-x-2">
                        {Object.entries(speaker.socialMedia).map(([platform, url]) => {
                          const IconComponent = getSocialIcon(platform);
                          return (
                            <motion.a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-200 group/social"
                            >
                              <IconComponent className="w-4 h-4 text-muted-foreground group-hover/social:text-primary transition-colors duration-200" />
                            </motion.a>
                          );
                        })}
                      </div>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs hover:bg-primary/10 border-primary/30"
                      >
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 bg-gradient-secondary bg-opacity-10 rounded-2xl p-8 border border-secondary/20"
          >
            <h3 className="text-2xl font-display font-bold mb-4">
              Want to Connect with Our Speakers?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Register for the symposium to attend all keynote sessions and get exclusive 
              networking opportunities with industry leaders during break sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-secondary hover:shadow-glow-secondary/30">
                Register for Keynotes
              </Button>
              <Button size="lg" variant="outline" className="border-secondary/30 hover:bg-secondary/10">
                View Full Schedule
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;