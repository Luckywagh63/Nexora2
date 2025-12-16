"use client";
import React, { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, Users, Target, Rocket, Globe, Shield, BarChart3, Award, Brain, Network, Lock, CheckCircle, Zap, LineChart, Layers } from 'lucide-react';

export default function NexoraLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: TrendingUp, label: 'Global Reach', desc: 'Worldwide Connections' },
    { icon: Users, label: 'Growing Network', desc: 'Active Community' },
    { icon: Shield, label: 'Secure Platform', desc: 'Enterprise Grade' },
    { icon: Zap, label: 'Fast Matching', desc: 'AI-Powered' }
  ];

  const steps = [
    { num: '01', title: 'Register', desc: 'Create your professional profile', icon: Users },
    { num: '02', title: 'Match', desc: 'AI analyzes optimal alignment', icon: Brain },
    { num: '03', title: 'Connect', desc: 'Secure communication platform', icon: Network },
    { num: '04', title: 'Grow', desc: 'Access funding opportunities', icon: Rocket }
  ];

  const startupFeatures = ['Investor Matching', 'Pitch Resources', 'Cap Table Tools', 'Legal Support', 'Analytics Dashboard', 'Mentor Access'];
  const investorFeatures = ['Curated Opportunities', 'Due Diligence Suite', 'Portfolio Tracking', 'Market Intelligence', 'Risk Assessment', 'Performance Analytics'];

  const solutions = [
    { icon: LineChart, title: 'Advanced Analytics', desc: 'Real-time market intelligence', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80' },
    { icon: Layers, title: 'Seamless Integration', desc: 'Connect existing tools', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80' },
    { icon: Award, title: 'Proven Results', desc: 'Successful partnerships', img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&q=80' }
  ];

  const trust = [
    { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption' },
    { icon: BarChart3, title: 'Data Intelligence', desc: 'Advanced analytics' },
    { icon: Globe, title: 'Global Reach', desc: 'Worldwide opportunities' },
    { icon: Lock, title: 'Dedicated Support', desc: 'Professional assistance' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white overflow-hidden mt-12">
      
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
      `}</style>

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-900/8 rounded-full blur-3xl" style={{ animation: 'float 15s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-600/6 rounded-full blur-3xl" style={{ animation: 'float 20s ease-in-out infinite', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-8" style={{ backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 58, 138, 0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-950/40 rounded-full border border-blue-900/40 backdrop-blur-md">
              <span className="text-sm bg-gradient-to-r from-blue-300 to-amber-300 bg-clip-text text-transparent font-medium">Connecting Innovation with Capital</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-amber-200 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Allivos
            </h1>
            
            <p className="text-xl text-yellow-200 leading-relaxed">
              A sophisticated platform connecting groundbreaking startups with visionary investors through intelligent matching and strategic insights.
            </p>

            <a href='/dashboard'>
            <button className="group px-10 py-5 bg-gradient-to-r from-blue-900 to-blue-950 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-900/50 border border-blue-800/50 hover:border-amber-500/50 relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0" style={{ animation: 'shimmer 3s infinite linear' }}></div>
              <span className="flex items-center gap-3 relative z-10">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            </a>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/15 to-amber-600/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl border border-blue-900/40 shadow-2xl shadow-blue-900/20 transform group-hover:scale-[1.02] transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=900&fit=crop&q=80" alt="Innovation" className="w-full h-[650px] object-cover" />
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
              <div key={i} className="group p-6 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-blue-900/30 rounded-xl backdrop-blur-sm hover:border-amber-600/40 transform hover:translate-y-[-8px] transition-all duration-500">
                <stat.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:text-amber-400 transition-colors" />
                <h4 className="text-xl font-semibold text-white mb-2">{stat.label}</h4>
                <p className="text-slate-400 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">Your Path to Success</h2>
            <p className="text-xl text-slate-400">A streamlined process designed for results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-amber-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative p-8 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-blue-900/30 rounded-xl backdrop-blur-sm hover:border-amber-600/40 transform hover:translate-y-[-8px] transition-all duration-500">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-bold text-blue-950/50">{step.num}</span>
                    <step.icon className="w-12 h-12 text-blue-400 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Target className="w-14 h-14 text-blue-400" />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">For Startups</h3>
              <p className="text-lg text-slate-300 leading-relaxed">Transform your vision into reality with access to capital, mentorship, and strategic partnerships.</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {startupFeatures.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-900/50 to-blue-950/30 rounded-lg border border-blue-900/30 backdrop-blur-sm hover:border-amber-600/40 transition-all">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/15 to-amber-600/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop&q=80" alt="Startup" className="relative rounded-xl w-full h-96 object-cover border border-blue-900/30 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/15 to-blue-600/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop&q=80" alt="Investors" className="relative rounded-xl w-full h-96 object-cover border border-blue-900/30 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <Rocket className="w-14 h-14 text-amber-400" />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-blue-200 bg-clip-text text-transparent">For Investors</h3>
              <p className="text-lg text-slate-300 leading-relaxed">Discover vetted startups with comprehensive data and market insights.</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {investorFeatures.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-900/50 to-blue-950/30 rounded-lg border border-blue-900/30 backdrop-blur-sm hover:border-amber-600/40 transition-all">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/15 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">Comprehensive Solutions</h2>
            <p className="text-xl text-slate-400">Everything you need in one platform</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((item, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-xl border border-blue-900/30 hover:border-amber-600/40 transition-all duration-500 mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-blue-900/30 rounded-xl backdrop-blur-sm hover:border-amber-600/40 transition-all">
                  <item.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:text-amber-400 transition-colors" />
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">Why Choose Allivos</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {trust.map((item, i) => (
              <div key={i} className="group p-8 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-blue-900/30 rounded-xl backdrop-blur-sm hover:border-amber-600/40 transform hover:translate-y-[-8px] transition-all duration-500">
                <item.icon className="w-12 h-12 text-blue-400 mb-6 group-hover:text-amber-400 transition-colors" />
                <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
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
          <h2 className="text-6xl font-bold leading-tight text-white">Ready to Transform Your Future?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Join a sophisticated platform connecting innovation with capital.</p>
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
