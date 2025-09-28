import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Users, Trophy, IndianRupee } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { technicalEvents, nonTechnicalEvents } from '@/data/events';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EventsPage = () => {
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

  const EventSection = ({ title, events, gradient }: { title: string, events: any[], gradient: string }) => (
    <motion.div
      variants={itemVariants}
      className="mb-16"
    >
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 bg-${gradient} bg-clip-text text-transparent`}>
          {title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {title === 'Technical Events' 
            ? 'Challenge your technical skills and engineering expertise'
            : 'Showcase creativity, communication, and innovative thinking'
          }
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full hover:shadow-glow-primary/10 transition-all duration-300 border-border/20 bg-gradient-card">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-${gradient.includes('primary') ? 'primary' : 'secondary'}/20 text-${gradient.includes('primary') ? 'primary' : 'secondary'}`}>
                    <div className="w-6 h-6">⚡</div>
                  </div>
                  <Badge variant="outline" className={`bg-${gradient.includes('primary') ? 'primary' : 'secondary'}/10 text-${gradient.includes('primary') ? 'primary' : 'secondary'}`}>
                    {event.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {event.shortDescription}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-secondary" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-accent" />
                    <span>{event.eligibility[1] || 'Open to all'}</span>
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="w-4 h-4 mr-2 text-primary" />
                    <span>{event.registrationFee}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-4 h-4 mr-2 text-accent" />
                    <span className="text-sm font-medium text-foreground">Prizes</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    🥇 {event.prizes.first.split(' + ')[0]}
                  </div>
                </div>

                <Button 
                  asChild
                  className="w-full mt-4 bg-gradient-primary hover:shadow-glow-primary/30"
                >
                  <Link to={`/event/${event.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

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
            className="text-center"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary-glow transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Competition
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join exciting competitions designed to challenge your skills, showcase your talent, 
              and connect with fellow engineers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            <EventSection 
              title="Technical Events" 
              events={technicalEvents} 
              gradient="gradient-primary"
            />
            <EventSection 
              title="Non-Technical Events" 
              events={nonTechnicalEvents} 
              gradient="gradient-secondary"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;