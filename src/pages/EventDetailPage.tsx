import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Users, Trophy, IndianRupee, Phone, Mail, CheckCircle, AlertCircle, Target, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { events } from '@/data/events';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EventDetailPage = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Event Not Found</h1>
          <Link to="/events" className="text-primary hover:text-primary-glow">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.4),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(120,200,150,0.4),transparent_70%)]" />
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/events" 
              className="inline-flex items-center text-primary hover:text-primary-glow transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Events
            </Link>
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                  {event.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-foreground">
                  {event.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {event.shortDescription}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-secondary" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <IndianRupee className="w-4 h-4 mr-2 text-accent" />
                    <span>{event.registrationFee}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span>Team Event</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-80">
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 mr-2 text-accent" />
                      Prize Pool
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center text-sm">
                        🥇 <span className="ml-1">First Prize</span>
                      </span>
                      <span className="font-semibold text-primary">{event.prizes.first}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center text-sm">
                        🥈 <span className="ml-1">Second Prize</span>
                      </span>
                      <span className="font-semibold text-secondary">{event.prizes.second}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center text-sm">
                        🥉 <span className="ml-1">Third Prize</span>
                      </span>
                      <span className="font-semibold text-accent">{event.prizes.third}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 mr-2 text-primary" />
                      Event Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.fullDescription}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Eligibility */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                      Eligibility Criteria
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {event.eligibility.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-secondary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Rules */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-accent" />
                      Rules & Regulations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {event.rules.map((rule, index) => (
                        <li key={index} className="flex items-start">
                          <AlertCircle className="w-4 h-4 mr-2 text-accent mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {event.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <Users className="w-4 h-4 mr-2 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle>Contact Person</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{event.contactPerson.name}</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-primary" />
                          <span>{event.contactPerson.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-secondary" />
                          <span>{event.contactPerson.phone}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Event Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle>Event Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium text-foreground">{event.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time</span>
                        <span className="font-medium text-foreground">{event.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Venue</span>
                        <span className="font-medium text-foreground">{event.venue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Registration Fee</span>
                        <span className="font-medium text-primary">{event.registrationFee}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetailPage;