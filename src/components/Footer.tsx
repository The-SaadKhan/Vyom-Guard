import { Linkedin, Github, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: 'About', href: '#about' },
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Contact', href: '#contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contact@vyomgarud.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-b from-background to-background/80">
      {/* Background elements */}
      <div className="absolute inset-0 tactical-mesh opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 py-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Vyom<span className="text-primary">Garud</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Engineering autonomous tactical UAV systems for critical missions worldwide.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-lg icon-bg icon-bg-hover flex items-center justify-center transition-all"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div key={category} variants={itemVariants} className="space-y-4">
              <h4 className="font-bold text-foreground text-sm tracking-wider uppercase">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors accent-underline"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div variants={itemVariants} className="text-sm text-muted-foreground">
              <p>
                © {currentYear} VyomGarud. All rights reserved.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-xs text-muted-foreground flex items-center space-x-1"
            >
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-3 h-3 text-primary fill-primary" />
              </motion.div>
              <span>for mission-critical operations</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center space-x-1">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
                <span>System Status: Operational</span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
    </footer>
  );
};

export default Footer;
