import { Card } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Techie Shubhdeep IT Solutions Pvt. Ltd.',
    period: 'June 2025 – December 2025',
    description: 'Completed a Data Science internship, gaining hands-on experience in machine learning, deep learning, and image processing. Building AI models, handling real-world datasets, and deploying scalable solutions using Python, Flask, OpenCV, and TensorFlow.',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A journey through my career milestones and achievements
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 gradient-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 self-start">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                    <p className="text-lg text-primary mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
