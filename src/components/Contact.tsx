import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all fields.');
      return;
    }

    emailjs
      .send(
        'service_bnas0nu',   // your EmailJS service ID
        'template_kaakeoc',  // your EmailJS template ID
        formData,
        'Fu8LK1vZv5o8bDy-J'  // your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully! I'll get back to you soon.");
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error(error.text);
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's just drop a message for further talk...
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-6 md:p-8 gradient-card border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 shadow-glow transition-smooth"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 gradient-card border-border/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:jitendra223258@gmail.com" className="text-muted-foreground hover:text-primary">
                      jitendra223258@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card border-border/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+917037435047" className="text-muted-foreground hover:text-primary">
                      +91 7037435047
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card border-border/50">
                <h3 className="font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/jitendra-kumar-167143309" 
                    target="_blank"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-smooth group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
                  </a>
                  <a
                    href="https://github.com/Jitendra8247" 
                    target="_blank"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-smooth group"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
                  </a>
                  <a
                    href="https://x.com/DEVILRO48900004" 
                    target="_blank"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-smooth group"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
                  </a>
                  <a
                    href="https://instagram.com/ig_devilroy" 
                    target="_blank"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-smooth group"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
