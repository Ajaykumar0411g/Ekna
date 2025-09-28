import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { schedule, DaySchedule } from '@/data/schedule';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

const Schedule = () => {
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

  const getTypeColor = (type: string) => {
    const colors = {
      keynote: "bg-primary/20 text-primary border-primary/30",
      event: "bg-secondary/20 text-secondary border-secondary/30",
      workshop: "bg-accent/20 text-accent border-accent/30",
      break: "bg-muted/40 text-muted-foreground border-muted",
      networking: "bg-primary/10 text-primary border-primary/20",
      closing: "bg-gradient-primary text-primary-foreground border-primary"
    };
    return colors[type as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'keynote': return '🎤';
      case 'event': return '🏆';
      case 'workshop': return '🔧';
      case 'break': return '☕';
      case 'networking': return '🤝';
      case 'closing': return '🎉';
      default: return '📅';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-muted/30">
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
              Event Schedule
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              One Day of
              <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                Engineering Excellence
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive single-day schedule featuring technical competitions, 
              workshops, and networking opportunities designed to maximize your learning experience.
            </p>
          </motion.div>

          {/* Single Day Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Day Header */}
            <div className="text-center bg-gradient-card rounded-xl p-6 border border-border/20 shadow-card">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                {schedule[0].day}
              </h3>
              <p className="text-accent font-medium">{schedule[0].date}</p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

              {/* Schedule Items */}
              <div className="space-y-6">
                {schedule[0].items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full ${getTypeColor(item.type)} flex items-center justify-center text-2xl font-bold border-2 shadow-card`}>
                        {getTypeIcon(item.type)}
                      </div>
                    </div>

                    {/* Content Card */}
                    <Card className="flex-1 hover:shadow-glow-primary/10 transition-all duration-300 border-border/20 bg-gradient-card">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <CardTitle className="text-xl text-foreground">
                              {item.title}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground mt-1">
                              {item.description}
                            </CardDescription>
                          </div>
                          <Badge className={getTypeColor(item.type)}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2 text-primary" />
                            <span>{item.time}</span>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2 text-secondary" />
                            <span>{item.venue}</span>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2 text-accent" />
                            <span>{item.duration}</span>
                          </div>
                          
                          {item.speaker && (
                            <div className="flex items-center text-muted-foreground">
                              <User className="w-4 h-4 mr-2 text-primary" />
                              <span className="font-medium">{item.speaker}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 bg-gradient-primary bg-opacity-10 rounded-2xl p-8 border border-primary/20"
          >
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
              Don't Miss Out!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Register now to secure your spot in all these amazing events. 
              Early registration comes with special benefits and discounts.
            </p>
            <Button 
              size="lg" 
              asChild
              className="bg-gradient-primary hover:shadow-glow-primary/30"
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4faujmREM8u4VlALf-m5Ms5znSD6EPTCB3O_zFAhS_1P1bQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                Register for All Events
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;