import { motion } from 'framer-motion';
import { ArrowRight, Eye, Target, Radio, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Capabilities = () => {
  const products = [
    {
      icon: Eye,
      name: 'Scout',
      tagline: 'Reconnaissance',
      specs: [
        '500+ km range',
        '15 kg payload',
        'Autonomous navigation',
      ],
      color: 'from-blue-500/20 to-blue-600/5',
      accentColor: 'text-blue-400',
    },
    {
      icon: Target,
      name: 'Sentinel',
      tagline: 'Surveillance',
      specs: [
        '800+ km range',
        '25 kg payload',
        'Advanced autonomy',
      ],
      color: 'from-orange-500/20 to-orange-600/5',
      accentColor: 'text-orange-400',
      featured: true,
    },
    {
      icon: Radio,
      name: 'Relay',
      tagline: 'Communications',
      specs: [
        '1000+ km range',
        '20 kg payload',
        'Mesh networking',
      ],
      color: 'from-purple-500/20 to-purple-600/5',
      accentColor: 'text-purple-400',
    },
  ];

  return (
    <section id="capabilities" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tactical-mesh opacity-25" />

      <div className="container mx-auto px-6 relative z-10">
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
            Our Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Proven Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Each system is designed for real-world deployment and mission success
          </motion.p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative group ${product.featured ? 'md:col-span-1 lg:row-span-2' : ''}`}
            >
              {/* Card glow background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <Card className="relative h-full p-8 glass-premium border border-primary/20 hover-lift cursor-pointer overflow-hidden">
                {/* Decorative corner element */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl`}
                />

                {/* Content */}
                <div className="relative space-y-6 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-lg icon-bg icon-bg-hover flex items-center justify-center group-hover:shadow-lg transition-all"
                  >
                    <product.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold mb-2 text-foreground"
                    >
                      {product.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="text-muted-foreground text-sm mb-6"
                    >
                      {product.tagline}
                    </motion.p>

                    {/* Specs */}
                    <div className="space-y-2 mb-6">
                      {product.specs.map((spec) => (
                        <motion.li
                          key={spec}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-muted-foreground list-none"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
                            className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"
                          />
                          {spec}
                        </motion.li>
                      ))}
                    </div>
                  </div>

                  {/* Learn more link */}
                  <motion.a
                    href="#contact"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-sm text-primary font-bold group/link accent-underline mt-auto"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Featured badge */}
                {product.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4"
                  >
                    <span className="bg-gradient-to-r from-primary to-primary/70 text-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Zap className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">Ready to deploy next-generation UAV systems?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary text-foreground px-8 py-3 rounded-lg font-semibold inline-block"
          >
            Schedule a Demo
            <ArrowRight className="inline ml-2 w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
