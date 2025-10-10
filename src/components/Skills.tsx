import { Card } from '@/components/ui/card';
import { Code2, Brain, Database, FileSpreadsheet, Users, Library, Server, FileCode, Workflow, BarChart3, Eye, MessageSquare, Lightbulb, Layers, FileText, Presentation } from 'lucide-react';

const skillCategories = [
  {
    category: 'Core Competencies',
    skills: [
      { name: 'Machine Learning', icon: Brain },
      { name: 'Deep Learning', icon: Brain },
      { name: 'React', icon: Code2 },
      { name: 'Node', icon: Server },
    ],
    icon: Brain,
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Python', icon: Code2 },
      { name: 'C', icon: Code2 },
      { name: 'HTML', icon: FileCode },
      { name: 'CSS', icon: FileCode },
      { name: 'JavaScript', icon: Code2 },
    ],
    icon: Code2,
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'Pandas', icon: Library },
      { name: 'NumPy', icon: Library },
      { name: 'Scikit-Learn', icon: Brain },
      { name: 'Matplotlib', icon: BarChart3 },
      { name: 'Seaborn', icon: BarChart3 },
      { name: 'TensorFlow', icon: Brain },
      { name: 'OpenCV', icon: Eye },
      { name: 'Express js', icon: Server },
    ],
    icon: Library,
  },
  {
    category: 'Databases',
    skills: [
      { name: 'SQL', icon: Database },
      { name: 'MongoDB', icon: Database },
    ],
    icon: Database,
  },
  {
    category: 'Tools',
    skills: [
      { name: 'MS Excel', icon: FileSpreadsheet },
      { name: 'MS Word', icon: FileText },
      { name: 'PowerPoint', icon: Presentation },
    ],
    icon: FileSpreadsheet,
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Research & Paper Writing', icon: FileText },
      { name: 'Communication', icon: MessageSquare },
      { name: 'Problem Solving', icon: Lightbulb },
      { name: 'Multitasking', icon: Layers },
    ],
    icon: Users,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>

          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-4">
                <div className="flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Card
                      key={skill.name}
                      className="p-3 gradient-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow"
                      style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                    >
                      <div className="flex flex-col items-center gap-2 text-center">
                        <skill.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-xs font-medium leading-tight">{skill.name}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
