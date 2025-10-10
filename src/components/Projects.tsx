import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Reliability Estimation on Failure Data',
    description: 'Built a hybrid Weibull-ML model using Random Forest, XGBoost, and LightGBM to predict system reliability with 98% accuracy.',
    technologies: ['Python', 'Random Forest', 'XGBoost', 'LightGBM'],
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    title: 'Sign Language to Text Conversion',
    description: 'Developed a real-time hand gesture recognition system with CNNs and OpenCV to translate gestures into text for improved accessibility.',
    technologies: ['Python', 'CNN', 'OpenCV', 'TensorFlow'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Loan Prediction',
    description: 'Created a Python-based loan prediction model using feature engineering and classification algorithms for accurate financial predictions.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy'],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'E-commerce Website',
    description: 'Developed a full-featured MERN stack e-commerce site with secure authentication, payment integration, and a responsive React UI.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    gradient: 'from-teal-500 to-green-500',
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'Built an interactive Tic Tac Toe game using HTML, CSS, and JavaScript with dynamic game logic, player turns, win/draw detection, and responsive UI for an engaging user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Calculator',
    description: 'Developed a functional calculator using HTML, CSS, and JavaScript, supporting basic arithmetic operations with an intuitive and responsive user interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-emerald-500 to-lime-500',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Showcasing innovative data science solutions and impactful results
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group relative overflow-hidden gradient-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
                
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
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
