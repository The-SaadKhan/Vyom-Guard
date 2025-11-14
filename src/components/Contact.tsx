import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Send, Clock, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Missing fields',
        description: 'Please fill in name, email, and message.',
        variant: 'destructive',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Invalid email',
        description: 'Please check your email address.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: 'Message sent',
        description: 'Thanks for reaching out. We\'ll be in touch soon.',
      });
      setFormData({ name: '', company: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tactical-mesh opacity-25" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-bold tracking-widest uppercase px-4 py-2 glass rounded-full border border-primary/30 inline-block"
            >
              Let's Talk
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Have Questions? <span className="text-gradient text-primary">We're Here.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Reach out with questions about our systems, pricing, or just to say hello.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="glass-premium border border-primary/20 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                        Name <span className="text-primary">*</span>
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-card/50 border border-primary/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-3 text-foreground">
                        Company/Organization
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your organization"
                        className="w-full bg-card/50 border border-primary/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                      Work Email <span className="text-primary">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@company.com"
                      className="w-full bg-card/50 border border-primary/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">
                      Message <span className="text-primary">*</span>
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements or ask anything..."
                      className="w-full bg-card/50 border border-primary/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      rows={5}
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-foreground py-3 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 group disabled:opacity-50"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </motion.button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll respond within 24 hours.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact cards */}
              <motion.div
                whileHover={{ y: -8 }}
                className="glass-premium border border-primary/20 rounded-xl p-6 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg icon-bg icon-bg-hover flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Phone</h3>
                    <a
                      href="tel:+918881444693"
                      className="text-muted-foreground hover:text-primary transition-colors font-semibold"
                    >
                      +91 8881444693
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="glass-premium border border-primary/20 rounded-xl p-6 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg icon-bg icon-bg-hover flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:contact@vyomgarud.com"
                      className="text-muted-foreground hover:text-primary transition-colors font-semibold break-all"
                    >
                      contact@vyomgarud.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="glass-premium border border-primary/20 rounded-xl p-6 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg icon-bg icon-bg-hover flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Response Time</h3>
                    <p className="text-muted-foreground text-sm">
                      We usually reply within 24 hours on weekdays.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 24/7 Support badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden glass-premium border border-primary/40 rounded-xl p-6 cursor-pointer"
              >
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-16 -mt-16"
                  style={{ willChange: 'opacity' }}
                />
                <div className="relative space-y-3">
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-primary rounded-full"
                      style={{ willChange: 'transform' }}
                    />
                    <h3 className="font-bold text-foreground">Get Support</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Quick responses for critical issues and deployments.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
