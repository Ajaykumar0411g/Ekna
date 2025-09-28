import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { schedule } from '@/data/schedule';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TimelinePage = () => {
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
      case 'keynote': 
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L8 5h3v4h2V5h3l-4-4zM8 15v6h2v-4h4v4h2v-6H8z"/>
          </svg>
        );
      case 'event': 
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V6C3 4.9 3.9 4 5 4H7ZM5 10V20H19V10H5ZM7 12H17V18H7V12Z"/>
          </svg>
        );
      case 'workshop': 
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.61 19.31L13.77 10.47C13.87 10.18 13.92 9.86 13.92 9.54C13.92 8.58 13.54 7.67 12.84 6.97L12.13 6.26C11.43 5.56 10.52 5.18 9.56 5.18C8.6 5.18 7.69 5.56 6.99 6.26L6.28 6.97C5.58 7.67 5.2 8.58 5.2 9.54C5.2 10.5 5.58 11.41 6.28 12.11L6.99 12.82C7.69 13.52 8.6 13.9 9.56 13.9C9.88 13.9 10.2 13.85 10.49 13.75L19.33 22.59C19.72 22.98 20.35 22.98 20.74 22.59L22.61 20.72C23 20.33 23 19.7 22.61 19.31ZM9.56 11.9C9.05 11.9 8.56 11.7 8.2 11.34L7.49 10.63C7.13 10.27 6.93 9.78 6.93 9.27C6.93 8.76 7.13 8.27 7.49 7.91L8.2 7.2C8.56 6.84 9.05 6.64 9.56 6.64C10.07 6.64 10.56 6.84 10.92 7.2L11.63 7.91C11.99 8.27 12.19 8.76 12.19 9.27C12.19 9.78 11.99 10.27 11.63 10.63L10.92 11.34C10.56 11.7 10.07 11.9 9.56 11.9Z"/>
          </svg>
        );
      case 'break': 
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.5 3H6C4.35 3 3 4.35 3 6V18C3 19.65 4.35 21 6 21H18.5C19.88 21 21 19.88 21 18.5V5.5C21 4.12 19.88 3 18.5 3ZM19 18.5C19 18.78 18.78 19 18.5 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H18.5C18.78 5 19 5.22 19 5.5V18.5ZM16 11.5C16 12.33 15.33 13 14.5 13S13 12.33 13 11.5S13.67 10 14.5 10S16 10.67 16 11.5ZM11 11.5C11 12.33 10.33 13 9.5 13S8 12.33 8 11.5S8.67 10 9.5 10S11 10.67 11 11.5Z"/>
          </svg>
        );
      case 'networking': 
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9V3H7V21C7 21.6 7.4 22 8 22H16C16.6 22 17 21.6 17 21V16H19V14H17V12H19V10H17V9H21ZM15 3L19 7H15V3ZM9 5V7H11V19H15V9H9V5Z"/>
          </svg>
        );
      case 'closing': 
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 16L3 5L8.5 12L12 4L15.5 12L21 5L19 16H5ZM12 18C10.9 18 10 18.9 10 20S10.9 22 12 22S14 21.1 14 20S13.1 18 12 18Z"/>
          </svg>
        );
      default: 
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H9V12H7V10ZM11 10H13V12H11V10ZM15 10H17V12H15V10Z"/>
          </svg>
        );
    }
  };

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
              Event
              <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                Timeline
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete schedule for Ekna 2025 symposium with all events, workshops, and activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Day Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-gradient-card rounded-xl p-8 border border-border/20 shadow-card mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {schedule[0].day}
              </h2>
              <p className="text-accent font-medium text-lg">{schedule[0].date}</p>
              <p className="text-muted-foreground mt-2">
                A comprehensive single-day schedule featuring technical competitions, 
                workshops, and networking opportunities
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 rounded-full" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {schedule[0].items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-20 h-20 rounded-full ${getTypeColor(item.type)} flex flex-col items-center justify-center text-xs font-bold border-2 shadow-card backdrop-blur-sm`}>
                        {getTypeIcon(item.type)}
                        <div className="text-center leading-tight mt-1">
                          {item.time.split(' - ')[0]}
                        </div>
                        {item.time.includes(' - ') && (
                          <div className="text-center leading-tight opacity-80 text-[10px]">
                            {item.time.split(' - ')[1]}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="flex-1"
                    >
                      <Card className="hover:shadow-glow-primary/10 transition-all duration-300 border-border/20 bg-gradient-card">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1">
                              <CardTitle className="text-xl text-foreground mb-2">
                                {item.title}
                              </CardTitle>
                              <CardDescription className="text-muted-foreground">
                                {item.description}
                              </CardDescription>
                            </div>
                            <Badge className={getTypeColor(item.type)}>
                              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </Badge>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="w-4 h-4 mr-2 text-primary" />
                              <span className="font-medium">{item.time}</span>
                            </div>
                            
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-2 text-secondary" />
                              <span className="font-medium">{item.venue}</span>
                            </div>
                            
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2 text-accent" />
                              <span className="font-medium">{item.duration}</span>
                            </div>
                            
                            {item.speaker && (
                              <div className="flex items-center text-muted-foreground sm:col-span-2 lg:col-span-3">
                                <User className="w-4 h-4 mr-2 text-primary" />
                                <span className="font-medium text-foreground">{item.speaker}</span>
                              </div>
                            )}
                          </div>

                          {/* Additional Details for Events */}
                          {item.type === 'event' && (
                            <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                              <p className="text-sm text-primary font-medium">
                                💡 This is a competition event with prizes and certificates for winners
                              </p>
                            </div>
                          )}

                          {item.type === 'workshop' && (
                            <div className="mt-4 p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                              <p className="text-sm text-secondary font-medium">
                                🛠️ Hands-on workshop - bring your laptop and be ready to learn!
                              </p>
                            </div>
                          )}

                          {item.type === 'networking' && (
                            <div className="mt-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                              <p className="text-sm text-accent font-medium">
                                🤝 Great opportunity to connect with peers and industry professionals
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 bg-gradient-primary bg-opacity-10 rounded-2xl p-8 border border-primary/20 text-center"
            >
              <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                Full Day of Engineering Excellence
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join us for an intensive day of learning, competing, and networking. 
                From technical challenges to innovative workshops, every moment is designed 
                to enhance your engineering journey.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">7+</div>
                  <div className="text-sm text-muted-foreground">Events</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">3+</div>
                  <div className="text-sm text-muted-foreground">Workshops</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Participants</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">9</div>
                  <div className="text-sm text-muted-foreground">Hours</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TimelinePage;