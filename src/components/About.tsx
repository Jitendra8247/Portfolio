import { Card } from '@/components/ui/card';
import { User, GraduationCap } from 'lucide-react';
import profilePic from '@/assets/profile-picture.png';

const education = [
  {
    institution: 'ISBM University',
    location: 'Lucknow, UP',
    degree: 'Master of Computer Applications (MCA)',
    duration: '2025 – 2027',
    description: 'Engaging in the study of advanced computer application, software and emerging technologies.',
  },
  {
    institution: 'Dayalbagh Educational Institute',
    location: 'Agra, UP',
    degree: 'Postgraduate Diploma in Artificial Intelligence (PGDAI)',
    duration: '2024 – 2025',
    description: 'Learned about Artificial Intelligence (AI), machine learning, and problem-solving using data.',
  },
  {
    institution: 'Dayalbagh Educational Institute',
    location: 'Agra, UP',
    degree: 'Bachelor of Science - Mathematics (B.Sc. Hons)',
    duration: '2021 – 2024',
    description: 'Established solid mathematical, analytical, and quantitative problem-solving skills.',
  },
];

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

          {/* Biography Card */}
          <div className="flex justify-center mb-8">
            <Card className="p-8 gradient-card border-border/50 hover:border-primary/50 transition-smooth w-full mx-auto">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Biography</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate learner, always eager to explore new things, gain experience, and grow through continuous learning and hands-on practice. I love taking on challenges that help me improve my skills and push my boundaries.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Education Section */}
          <div className="w-full mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border/60 hidden md:block" />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="p-6 gradient-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow md:ml-10 relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[2.85rem] top-6 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block" />

                    <div className="flex flex-col gap-1 mb-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <h4 className="text-lg font-semibold text-foreground">{edu.institution}</h4>
                        <p className="text-sm text-muted-foreground sm:text-right shrink-0">{edu.location}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <p className="text-primary font-medium text-sm">{edu.degree}</p>
                        <p className="text-sm text-accent font-medium sm:text-right shrink-0">{edu.duration}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2 pl-3 border-l-2 border-primary/30">
                      {edu.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
