import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';
import profilePic from '@/assets/profile-picture.png';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="text-center md:text-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                I'm <span className="text-gradient">Jitendra Kumar</span>
              </h2>
              <p className="text-xl text-primary">Want to know more about me ? then go below...</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <img
                src={profilePic}
                alt="Jitendra Kumar - Data Scientist"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-glow"
              />
            </div>
          </div>

          {/* Single Full-Width Biography Card */}
          <div className="flex justify-center">
            <Card className="p-8 gradient-card border-border/50 hover:border-primary/50 transition-smooth w-full md:w-[90vw] mx-auto">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Biography</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I’m a passionate learner, always eager to explore new things, gain experience, and grow through continuous learning and hands-on practice. I love taking on challenges that help me improve my skills and push my boundaries.
                  </p>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
