import { motion } from 'framer-motion';
import { Download, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import brochureImage from '@/assets/ekna-brochure.jpg';

const BrochurePage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = brochureImage;
    link.download = 'EKNA-2K25-Brochure.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary-glow transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                EKNA 2K25 Brochure
              </h1>
              <p className="text-xl text-muted-foreground">
                Download and share our event brochure
              </p>
            </div>

            <Card className="bg-gradient-card border-border/20">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <img 
                    src={brochureImage}
                    alt="EKNA 2K25 Event Brochure"
                    className="max-w-full h-auto mx-auto rounded-lg shadow-elegant border border-border/20"
                  />
                </div>
                
                <div className="text-center">
                  <Button
                    onClick={handleDownload}
                    size="lg"
                    className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrochurePage;