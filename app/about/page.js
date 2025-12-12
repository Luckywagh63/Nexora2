"use client";
import React, { useState } from 'react';
import { Target, Rocket, Users, Award, TrendingUp, Globe, Shield, Zap, Heart, Lightbulb, Eye, ArrowRight, CheckCircle, Star, Trophy, Clock, BarChart3, Network, Brain, Briefcase } from 'lucide-react';

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);

  const stats = [
    { value: '2024', label: 'Founded', icon: Rocket },
    { value: 'Global', label: 'Platform Reach', icon: Globe },
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '100%', label: 'Commitment', icon: Heart }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      desc: 'We constantly push boundaries to create cutting-edge solutions that transform the fundraising landscape.',
      color: 'amber'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      desc: 'We prioritize the safety and privacy of our users with enterprise-grade security and transparency.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Community Driven',
      desc: 'Our platform thrives on the success of our community—startups and investors growing together.',
      color: 'amber'
    },
    {
      icon: Heart,
      title: 'Empowerment',
      desc: 'We believe in democratizing access to capital and opportunities for innovators worldwide.',
      color: 'blue'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'The Vision',
      desc: 'Nexora was founded with a bold vision to revolutionize how startups connect with investors through intelligent technology.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&q=80'
    },
    {
      year: 'Q1 2024',
      title: 'Platform Development',
      desc: 'Built cutting-edge AI-powered matching algorithms and secure infrastructure designed for the future of fundraising.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80'
    },
    {
      year: 'Q2 2024',
      title: 'Beta Testing',
      desc: 'Launched private beta with select startups and investors to refine our platform and ensure exceptional user experience.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop&q=80'
    },
    {
      year: 'Q3 2024',
      title: 'Feature Enhancement',
      desc: 'Expanded capabilities with advanced analytics, portfolio management tools, and comprehensive due diligence features.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80'
    },
    {
      year: 'Now',
      title: 'Ready to Launch',
      desc: 'Prepared to welcome our first wave of users with a world-class platform that transforms the fundraising experience.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&q=80'
    }
  ];

  

  const achievements = [
    {
      icon: Award,
      title: 'Innovation Excellence',
      org: 'Tech Innovation Summit 2024'
    },
    {
      icon: Star,
      title: 'Best New Platform',
      org: 'Startup Ecosystem Awards'
    },
    {
      icon: Trophy,
      title: 'Emerging Technology',
      org: 'Global Fintech Forum'
    },
    {
      icon: Target,
      title: 'AI Innovation Award',
      org: 'AI & ML Conference 2024'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      desc: 'Advanced algorithms ensure perfect startup-investor alignment'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      desc: 'Comprehensive analytics for informed decision-making'
    },
    {
      icon: Network,
      title: 'Global Network',
      desc: 'Connect with opportunities across 150+ countries'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      desc: 'Bank-grade security protecting your sensitive data'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white overflow-hidden">
      
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-900/8 rounded-full blur-3xl" style={{ animation: 'float 15s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-600/6 rounded-full blur-3xl" style={{ animation: 'float 20s ease-in-out infinite', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-8" style={{ backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 58, 138, 0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-950/40 rounded-full border border-blue-900/40 backdrop-blur-md">
              <Rocket className="w-4 h-4 text-amber-400" />
              <span className="text-sm bg-gradient-to-r from-blue-300 to-amber-300 bg-clip-text text-transparent font-medium">Empowering Innovation Since 2020</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-200 via-amber-200 to-blue-200 bg-clip-text text-transparent">
              About Nexora
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              We're on a mission to democratize access to capital and create a world where every great idea has the opportunity to become reality. By connecting innovative startups with visionary investors through cutting-edge technology, we're building the future of fundraising.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-900/30 to-blue-950/30 rounded-lg border border-blue-900/30">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-300">Global Reach</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-900/30 to-amber-950/30 rounded-lg border border-amber-900/30">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                <span className="text-sm text-slate-300">AI-Powered</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-900/30 to-blue-950/30 rounded-lg border border-blue-900/30">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-300">Trusted Platform</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/15 to-amber-600/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl border border-blue-900/40 shadow-2xl shadow-blue-900/20">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop&q=80" alt="Team collaboration" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="group text-center p-8 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-blue-900/30 rounded-xl backdrop-blur-sm hover:border-amber-600/40 transform hover:translate-y-[-8px] transition-all duration-500">
                <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:text-amber-400 transition-colors" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/15 to-amber-600/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
              <div className="relative p-10 bg-gradient-to-br from-slate-900/70 to-blue-950/40 border border-blue-900/30 rounded-xl backdrop-blur-sm">
                <Target className="w-14 h-14 text-blue-400 mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  To revolutionize the fundraising ecosystem by creating an intelligent, transparent, and efficient platform that connects groundbreaking startups with the right investors, accelerating innovation and economic growth worldwide.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/15 to-blue-600/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
              <div className="relative p-10 bg-gradient-to-br from-slate-900/70 to-blue-950/40 border border-blue-900/30 rounded-xl backdrop-blur-sm">
                <Eye className="w-14 h-14 text-amber-400 mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  A world where capital flows freely to the most promising ideas, regardless of geography or network. Where every entrepreneur with a great vision has access to the resources they need to succeed, and every investor can discover opportunities aligned with their thesis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div 
                key={i} 
                className="group cursor-pointer"
                onMouseEnter={() => setActiveValue(i)}
              >
                <div className={`relative p-8 bg-gradient-to-br from-slate-900/70 to-blue-950/40 border ${activeValue === i ? 'border-amber-600/60' : 'border-blue-900/30'} rounded-xl backdrop-blur-sm hover:border-amber-600/60 transform hover:translate-y-[-8px] transition-all duration-500`}>
                  <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${value.color === 'blue' ? 'from-blue-900/50 to-blue-800/50' : 'from-amber-900/50 to-amber-800/50'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <value.icon className={`w-8 h-8 ${value.color === 'blue' ? 'text-blue-400' : 'text-amber-400'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From a bold idea to a global platform
            </p>
          </div>

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`space-y-4 ${i % 2 === 1 ? 'md:order-2 md:text-right' : ''}`}>
                  <div className={`inline-block px-6 py-2 bg-gradient-to-r from-amber-900/30 to-amber-950/30 rounded-full border border-amber-900/40`}>
                    <span className="text-2xl font-bold text-amber-400">{item.year}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                  <p className="text-lg text-slate-300 leading-relaxed">{item.desc}</p>
                </div>

                <div className={`relative group ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/15 to-amber-600/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                  <div className="relative overflow-hidden rounded-xl border border-blue-900/30 shadow-2xl">
                    <img src={item.image} alt={item.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Achievements */}
      

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">
              Why Choose Nexora
            </h2>
            <p className="text-xl text-slate-400">
              What sets us apart from the rest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group p-8 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-blue-900/30 rounded-xl backdrop-blur-sm hover:border-amber-600/40 transform hover:translate-y-[-8px] transition-all duration-500">
                <feature.icon className="w-12 h-12 text-blue-400 mb-6 group-hover:text-amber-400 transition-colors" />
                <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-slate-950/30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Join Us on Our Mission
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Be part of a revolutionary platform that's transforming how startups raise capital and investors discover opportunities.
          </p>
         <a href='/dashboard'>
          <button className="group px-12 py-6 bg-gradient-to-r from-blue-900 to-blue-950 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-blue-900/50 border border-blue-800/50 hover:border-amber-600 transition-all">
            <span className="flex items-center gap-3">
              Get Started Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </a>
        </div>
      </section>
    </div>
  );
}
