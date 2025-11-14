import { motion } from 'framer-motion';
import { Shield, Zap, Radio, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Built for Reliability',
      description: 'Field-tested systems that work in the toughest conditions',
      color: 'from-blue-500/20 to-blue-600/10',
    },
    {
      icon: Zap,
      title: 'Extended Operation',
      description: 'Long flight times with smart power management',
      color: 'from-yellow-500/20 to-yellow-600/10',
    },
    {
      icon: Radio,
      title: 'Secure & Private',
      description: 'Encrypted communications for sensitive missions',
      color: 'from-cyan-500/20 to-cyan-600/10',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tactical-mesh opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary text-sm font-bold tracking-widest uppercase px-4 py-2 glass rounded-full border border-primary/30"
              >
                About Us
              </motion.span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              We Build Systems You Can Trust
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              VyomGarud makes autonomous systems that work. From the design phase to the field, we focus on building equipment that's reliable, practical, and easy to operate.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-6"
            >
              Whether it's for defense, infrastructure, or emergency response, our systems deliver when it matters. We're backed by teams who care about quality and performance.</motion.p>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden"
              >
                {/* Card background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative p-6 glass-premium border border-primary/20 rounded-xl hover-lift-sm">
                  {/* Icon container */}
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 w-14 h-14 rounded-lg icon-bg icon-bg-hover flex items-center justify-center"
                    >
                      <feature.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="mt-3 flex items-center text-primary text-sm font-semibold"
                      >
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
