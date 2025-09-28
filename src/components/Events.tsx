import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { events, Event } from '@/data/events';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Clock, Users, Trophy, Phone, Mail, IndianRupee } from 'lucide-react';
import * as Icons from 'lucide-react';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

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

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent || Icons.Zap;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Technical: "bg-primary/20 text-primary border-primary/30",
      Robotics: "bg-secondary/20 text-secondary border-secondary/30",
      Programming: "bg-accent/20 text-accent border-accent/30",
      Innovation: "bg-primary/20 text-primary border-primary/30",
      Quiz: "bg-secondary/20 text-secondary border-secondary/30"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <section id="events" className="py-20">
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
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary font-medium rounded-full text-sm border border-secondary/30 mb-4">
              Competition Events
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Showcase Your
              <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                Engineering Excellence
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Participate in diverse technical competitions designed to challenge your skills, 
              creativity, and problem-solving abilities. Compete with the best and win exciting prizes.
            </p>
          </motion.div>

          {/* Technical Events */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Technical Events
              </h3>
              <p className="text-muted-foreground">
                Challenge your engineering skills in these technical competitions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.filter(event => event.category === 'Technical' || event.category === 'Programming' || event.category === 'Robotics' || event.category === 'Innovation').map((event) => {
                const IconComponent = getIcon(event.icon);
                
                return (
                  <motion.div key={event.id} variants={itemVariants}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="h-full cursor-pointer group hover:shadow-glow-primary/20 transition-all duration-300 border-border/20 bg-gradient-card">
                          <CardHeader className="pb-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="p-3 rounded-lg bg-gradient-primary bg-opacity-20 group-hover:shadow-glow-primary/30 transition-all duration-300">
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <Badge className={getCategoryColor(event.category)}>
                                {event.category}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                              {event.title}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground">
                              {event.shortDescription}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-2" />
                                {event.date}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-2" />
                                {event.venue}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Trophy className="w-4 h-4 mr-2" />
                                {event.prizes.first}
                              </div>
                            </div>
                            <Button 
                              className="w-full mt-6 group-hover:shadow-glow-primary/30 transition-all duration-300"
                              onClick={() => setSelectedEvent(event)}
                            >
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      </DialogTrigger>

                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="p-3 rounded-lg bg-gradient-primary bg-opacity-20">
                              <IconComponent className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                              <DialogTitle className="text-2xl font-display font-bold">
                                {event.title}
                              </DialogTitle>
                              <Badge className={getCategoryColor(event.category)}>
                                {event.category}
                              </Badge>
                            </div>
                          </div>
                          <DialogDescription className="text-base leading-relaxed">
                            {event.fullDescription}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          {/* Event Details */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-primary" />
                                Event Information
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Date:</span>
                                  <span className="font-medium">{event.date}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Time:</span>
                                  <span className="font-medium">{event.time}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Venue:</span>
                                  <span className="font-medium">{event.venue}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Registration Fee:</span>
                                  <span className="font-medium text-primary">{event.registrationFee}</span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Trophy className="w-5 h-5 mr-2 text-accent" />
                                Prizes
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">🥇 First Prize:</span>
                                  <span className="font-medium text-accent">{event.prizes.first}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">🥈 Second Prize:</span>
                                  <span className="font-medium">{event.prizes.second}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">🥉 Third Prize:</span>
                                  <span className="font-medium">{event.prizes.third}</span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Phone className="w-5 h-5 mr-2 text-secondary" />
                                Contact Person
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div>{event.contactPerson.name}</div>
                                <div className="flex items-center text-muted-foreground">
                                  <Mail className="w-4 h-4 mr-2" />
                                  {event.contactPerson.email}
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Phone className="w-4 h-4 mr-2" />
                                  {event.contactPerson.phone}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Requirements and Rules */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Users className="w-5 h-5 mr-2 text-primary" />
                                Eligibility
                              </h4>
                              <ul className="text-sm space-y-1">
                                {event.eligibility.map((item, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span className="text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Rules & Regulations</h4>
                              <ul className="text-sm space-y-1">
                                {event.rules.map((rule, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-accent mr-2">•</span>
                                    <span className="text-muted-foreground">{rule}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                              <ul className="text-sm space-y-1">
                                {event.requirements.map((req, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-secondary mr-2">•</span>
                                    <span className="text-muted-foreground">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                      </DialogContent>
                    </Dialog>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Non-Technical Events */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Non-Technical Events
              </h3>
              <p className="text-muted-foreground">
                Fun and engaging activities for everyone to participate
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.filter(event => event.category === 'Non-Technical').map((event) => {
                const IconComponent = getIcon(event.icon);
                
                return (
                  <motion.div key={event.id} variants={itemVariants}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="h-full cursor-pointer group hover:shadow-glow-primary/20 transition-all duration-300 border-border/20 bg-gradient-card">
                          <CardHeader className="pb-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="p-3 rounded-lg bg-gradient-primary bg-opacity-20 group-hover:shadow-glow-primary/30 transition-all duration-300">
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <Badge className={getCategoryColor(event.category)}>
                                {event.category}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                              {event.title}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground">
                              {event.shortDescription}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-2" />
                                {event.date}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-2" />
                                {event.venue}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Trophy className="w-4 h-4 mr-2" />
                                {event.prizes.first}
                              </div>
                            </div>
                            <Button 
                              className="w-full mt-6 group-hover:shadow-glow-primary/30 transition-all duration-300"
                              onClick={() => setSelectedEvent(event)}
                            >
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      </DialogTrigger>

                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="p-3 rounded-lg bg-gradient-primary bg-opacity-20">
                              <IconComponent className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                              <DialogTitle className="text-2xl font-display font-bold">
                                {event.title}
                              </DialogTitle>
                              <Badge className={getCategoryColor(event.category)}>
                                {event.category}
                              </Badge>
                            </div>
                          </div>
                          <DialogDescription className="text-base leading-relaxed">
                            {event.fullDescription}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          {/* Event Details */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-primary" />
                                Event Information
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Date:</span>
                                  <span className="font-medium">{event.date}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Time:</span>
                                  <span className="font-medium">{event.time}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Venue:</span>
                                  <span className="font-medium">{event.venue}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Registration Fee:</span>
                                  <span className="font-medium text-primary">{event.registrationFee}</span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Trophy className="w-5 h-5 mr-2 text-accent" />
                                Prizes
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">🥇 First Prize:</span>
                                  <span className="font-medium text-accent">{event.prizes.first}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">🥈 Second Prize:</span>
                                  <span className="font-medium">{event.prizes.second}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">🥉 Third Prize:</span>
                                  <span className="font-medium">{event.prizes.third}</span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Phone className="w-5 h-5 mr-2 text-secondary" />
                                Contact Person
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div>{event.contactPerson.name}</div>
                                <div className="flex items-center text-muted-foreground">
                                  <Mail className="w-4 h-4 mr-2" />
                                  {event.contactPerson.email}
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Phone className="w-4 h-4 mr-2" />
                                  {event.contactPerson.phone}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Requirements and Rules */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Users className="w-5 h-5 mr-2 text-primary" />
                                Eligibility
                              </h4>
                              <ul className="text-sm space-y-1">
                                {event.eligibility.map((item, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span className="text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Rules & Regulations</h4>
                              <ul className="text-sm space-y-1">
                                {event.rules.map((rule, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-accent mr-2">•</span>
                                    <span className="text-muted-foreground">{rule}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                              <ul className="text-sm space-y-1">
                                {event.requirements.map((req, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-secondary mr-2">•</span>
                                    <span className="text-muted-foreground">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                      </DialogContent>
                    </Dialog>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;