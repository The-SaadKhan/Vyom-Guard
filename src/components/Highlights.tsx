import { motion } from 'framer-motion';
import { Shield, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Mission-Ready Autonomy',
      description: 'Advanced AI for independent operation in contested environments',
      color: 'from-emerald-500/20 to-emerald-600/5',
    },
    {
      icon: Zap,
      title: 'Military-Grade Encryption',
      description: 'Secure end-to-end communication protocols for sensitive operations',
      color: 'from-yellow-500/20 to-yellow-600/5',
    },
    {
      icon: TrendingUp,
      title: 'Rapid Deployment',
      description: 'Quick-response systems operational in harsh field conditions',
      color: 'from-violet-500/20 to-violet-600/5',
    },
  ];

  const benefits = [
    'Combat-proven reliability',
    'Cutting-edge technology',
    'Global support network',
    '24/7 operational readiness',
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 tactical-mesh opacity-30" style={{ willChange: 'auto' }} />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        style={{ willChange: 'transform' }}
      />

      <div className="container mx-auto px-6 relative z-10">
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
            ⭐ Why Choose VyomGarud
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Why Defense Forces <span className="text-gradient text-primary">Trust Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Combat-proven reliability meets cutting-edge technology
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-br ${highlight.color} rounded-2xl blur-xl`}
                style={{ willChange: 'opacity' }}
              />

              <div className="relative glass-premium border border-primary/20 rounded-2xl p-8 h-full flex flex-col text-center space-y-6 hover-lift">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex items-center justify-center mx-auto"
                  style={{ willChange: 'transform' }}
                >
                  <div className="relative w-20 h-20 rounded-2xl icon-bg icon-bg-hover flex items-center justify-center">
                    <highlight.icon className="w-10 h-10 text-primary" />
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 rounded-2xl border-2 border-primary"
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                </motion.div>

                <div className="space-y-3">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl font-bold group-hover:text-primary transition-colors"
                  >
                    {highlight.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {highlight.description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: 0.3 }}
                  className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"
                  style={{ willChange: 'transform' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center space-x-3 glass-premium border border-primary/40 px-6 py-4 rounded-xl mb-8"
              style={{ willChange: 'transform' }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-3 h-3 bg-primary rounded-full"
                style={{ willChange: 'transform' }}
              />
              <span className="font-semibold text-foreground">
                Trusted by defense and critical infrastructure operators
              </span>
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Global Trust. <span className="text-gradient text-primary">Local Support.</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With installations across 30+ countries and 24/7 operational support, VyomGarud delivers 
              mission-critical reliability when it matters most.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center space-x-4 p-4 glass-premium border border-primary/20 rounded-xl hover-lift"
                style={{ willChange: 'transform' }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2, ease: 'easeInOut' }}
                  className="flex-shrink-0"
                  style={{ willChange: 'transform' }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="font-semibold text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: '30+', label: 'Countries Deployed' },
            { number: '99.9%', label: 'Uptime Guarantee' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-premium border border-primary/20 rounded-xl p-8 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="text-4xl md:text-5xl font-bold text-gradient text-primary mb-2"
                style={{ willChange: 'transform' }}
              >
                {stat.number}
              </motion.div>
              <p className="text-muted-foreground font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
