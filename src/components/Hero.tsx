import { motion } from 'framer-motion';
import { ChevronRight, Shield, Zap, Sparkles, ArrowUpRight, Radar, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroDrone from '@/assets/hero-drone.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Blurred drone image background */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('${heroDrone}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'blur(40px)',
          willChange: 'auto',
          backfaceVisibility: 'hidden'
        }}
      />

      {/* Optimized background layers */}
      <div className="absolute inset-0 tactical-grid opacity-20" style={{ willChange: 'auto', backfaceVisibility: 'hidden' }} />
      <div className="absolute inset-0 tactical-mesh opacity-30" style={{ willChange: 'auto', backfaceVisibility: 'hidden' }} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/40" style={{ willChange: 'auto', backfaceVisibility: 'hidden' }} />
      
      {/* Reduced animated orbs - single simple animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 w-80 h-80 bg-gradient-radial opacity-15 blur-3xl pointer-events-none"
        style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 0.5 }}
        className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-radial opacity-10 blur-3xl pointer-events-none"
        style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
      />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content with enhanced design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Animated tech badge with scan effect */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 glass-premium px-6 py-4 rounded-full border border-primary/40 relative overflow-hidden group"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 text-primary flex-shrink-0"
              >
                <Radar className="w-5 h-5" />
              </motion.div>
              <span className="text-sm font-semibold text-foreground">Advanced Autonomous Systems</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Main heading with character-by-character animation */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="block"
                  >
                    Next-Gen
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="block"
                  >
                    <span className="text-gradient text-primary relative inline-block">
                      Autonomous
                    </span>
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="block"
                  >
                    Tactical UAVs
                  </motion.span>
                </h1>
              </motion.div>

              {/* Dynamic subtitle with highlight */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="space-y-4"
              >
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Built for <span className="text-primary font-semibold">precision</span>, designed for <span className="text-primary font-semibold">reliability</span>, trusted by experts worldwide.
                </p>
                <div className="flex items-center space-x-2 text-sm text-primary font-semibold">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-primary rounded-full"
                  />
                  <span>Deployed in 30+ countries • 99.9% uptime</span>
                </div>
              </motion.div>
            </div>

            {/* Enhanced CTAs with different styles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="btn-primary group relative text-base font-bold px-8 py-6 rounded-lg w-full sm:w-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/40 hover:border-primary hover:bg-primary/5 group text-base font-bold px-8 py-6 rounded-lg w-full sm:w-auto transition-all"
                  onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Systems
                  <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-2"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Premium stats grid with icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/20"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-12 h-12 rounded-lg icon-bg flex items-center justify-center"
                    style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                  >
                    <Zap className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">500+</div>
                    <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">km range</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                    className="w-12 h-12 rounded-lg icon-bg flex items-center justify-center"
                    style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                  >
                    <Shield className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">Secure</div>
                    <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Encrypted</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                    className="w-12 h-12 rounded-lg icon-bg flex items-center justify-center"
                    style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                  >
                    <Cpu className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">AI</div>
                    <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Powered</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Premium Hero Image with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-full"
          >
            {/* Subtle glow background effects */}
            <div
              className="absolute -inset-20 bg-gradient-to-r from-primary/15 via-primary/3 to-transparent rounded-full blur-3xl pointer-events-none"
              style={{ backfaceVisibility: 'hidden' }}
            />

            {/* Main image container */}
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl"
                style={{ boxShadow: '0 0 30px rgba(255, 123, 0, 0.2)' }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                  className="relative"
                >
                  <img
                    src={heroDrone}
                    alt="VyomGarud tactical UAV"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  
                  {/* Tech grid overlay */}
                  <motion.div
                    animate={{ opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, transparent 24%, rgba(255, 123, 0, 0.03) 25%, rgba(255, 123, 0, 0.03) 26%, transparent 27%, transparent 74%, rgba(255, 123, 0, 0.03) 75%, rgba(255, 123, 0, 0.03) 76%, transparent 77%, transparent), linear-gradient(0deg, transparent 24%, rgba(255, 123, 0, 0.03) 25%, rgba(255, 123, 0, 0.03) 26%, transparent 27%, transparent 74%, rgba(255, 123, 0, 0.03) 75%, rgba(255, 123, 0, 0.03) 76%, transparent 77%, transparent)',
                      backgroundSize: '50px 50px',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                </motion.div>
              </div>

              {/* Enhanced floating stats badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="absolute -bottom-8 -left-8 glass-premium border-2 border-primary/50 rounded-xl p-6 backdrop-blur-xl shadow-2xl max-w-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-black text-primary">99.9%</div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wider">Uptime</div>
                    </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-4 h-4 bg-primary rounded-full"
                  style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                />
                  </div>
                  <p className="text-xs text-muted-foreground">Mission-critical reliability</p>
                </div>
              </motion.div>

              {/* Corner accent elements */}
              <div
                className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-br-lg pointer-events-none opacity-50"
              />
              <div
                className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-tr-lg pointer-events-none opacity-50"
              />
            </div>

            {/* Floating tech icons */}
            <div
              className="absolute -top-10 -right-10 w-24 h-24 glass-premium border border-primary/20 rounded-xl flex items-center justify-center opacity-40 pointer-events-none"
            >
              <Radar className="w-12 h-12 text-primary" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skip link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
    </section>
  );
};

export default Hero;
