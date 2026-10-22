import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Award, ExternalLink, X } from 'lucide-react';
import mlCert from '@/assets/machine-learning.png';
import csCert from '@/assets/cs-application.png';
import dsCert from '@/assets/data-science.png';
import cCert from '@/assets/c-programming.png';

const certificates = [
  {
    title: 'Machine Learning',
    issuer: 'SkillUp By SimpleLearn',
    year: '2025',
    image: mlCert,
    link: '', // paste your certificate URL here
  },
  {
    title: 'Computer Science and Application',
    issuer: 'Dayalbagh Educational Institute Work Experience',
    year: '2024',
    image: csCert,
    link: '', // paste your certificate URL here
  },
  {
    title: 'Data Science Intern',
    issuer: 'Saanvi Innovation',
    year: '2025',
    image: dsCert,
    link: '', // paste your certificate URL here
  },
  {
    title: 'C Programming',
    issuer: 'Great Learning',
    year: '2024',
    image: cCert,
    link: '', // paste your certificate URL here
  },
];

export const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleLinkClick = (
    e: React.MouseEvent,
    link: string,
    image: string
  ) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      // fallback: open local image in lightbox if no link set
      setSelectedImage(image);
    }
  };

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
                className="group gradient-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Certificate image — click to open lightbox */}
                <div
                  className="relative w-full h-48 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                      Click to view
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                          {cert.title}
                        </h3>
                        {/* External link icon — opens URL or lightbox */}
                        <button
                          onClick={(e) => handleLinkClick(e, cert.link, cert.image)}
                          title={cert.link ? 'View certificate online' : 'View certificate'}
                          className="ml-2 flex-shrink-0 text-muted-foreground hover:text-primary transition-smooth"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.year}</p>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-xs text-primary hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Certificate →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white hover:text-primary transition-smooth"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
