import { Card } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Machine Learning',
    issuer: 'SkillUp By SimpleLearn',
    year: '2025',
  },
  {
    title: 'Computer Science and application',
    issuer: 'Dayalbagh Eductional Institute Work Experience',
    year: '2024',
  },
  {
    title: 'Data Science Intern',
    issuer: 'TechieShubhdeep',
    year: '2025',
  },
  {
    title: 'Mastering Coding Skills',
    issuer: 'Online BootCamp',
    year: '2024',
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="group p-6 gradient-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                        {cert.title}
                      </h3>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.year}</p>
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
