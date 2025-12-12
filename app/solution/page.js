"use client";
import React, { useState } from 'react';
import { ArrowRight, Target, Rocket, TrendingUp, Users, Shield, Zap, BarChart3, Globe, Lock, Award, CheckCircle, Layers, LineChart, Brain, Network, Search, FileText, MessageSquare, Clock, DollarSign, PieChart, Database, Settings, Briefcase, Star, Trophy, BookOpen } from 'lucide-react';

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState('matching');

  const heroSolutions = [
    {
      id: 'matching',
      icon: Brain,
      title: 'AI-Powered Matching',
      desc: 'Intelligent algorithms connect the right startups with the right investors',
      color: 'blue'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Advanced Analytics',
      desc: 'Data-driven insights to make informed investment decisions',
      color: 'amber'
    },
    {
      id: 'workflow',
      icon: Layers,
      title: 'Seamless Workflow',
      desc: 'Streamlined processes from first contact to deal closure',
      color: 'blue'
    }
  ];

  const startupSolutions = [
    {
      icon: Target,
      title: 'Investor Matching',
      desc: 'Connect with investors who have funded companies like yours',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&h=350&fit=crop&q=80',
      features: ['Stage-specific matching', 'Sector alignment', 'Geographic preferences', 'Investment size fit']
    },
    {
      icon: FileText,
      title: 'Pitch Deck Builder',
      desc: 'Create compelling pitch decks with proven templates',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&h=350&fit=crop&q=80',
      features: ['Professional templates', 'Best practice guidance', 'Version control', 'Investor feedback']
    },
    {
      icon: PieChart,
      title: 'Cap Table Management',
      desc: 'Track equity and manage stakeholder relationships',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=350&fit=crop&q=80',
      features: ['Equity tracking', 'Dilution modeling', 'Scenario planning', 'Compliance tools']
    },
    {
      icon: Shield,
      title: 'Secure Data Room',
      desc: 'Share sensitive documents with complete control',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=350&fit=crop&q=80',
      features: ['Granular permissions', 'Access tracking', 'Watermarking', 'Audit trails']
    },
    {
      icon: Network,
      title: 'Warm Introductions',
      desc: 'Get introduced through mutual connections',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=350&fit=crop&q=80',
      features: ['Network mapping', 'Introduction requests', 'Relationship tracking', 'Referral system']
    },
    {
      icon: BarChart3,
      title: 'Fundraising Analytics',
      desc: 'Track your fundraising progress and optimize strategy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop&q=80',
      features: ['Engagement metrics', 'Conversion tracking', 'Investor insights', 'Performance reports']
    }
  ];

  const investorSolutions = [
    {
      icon: Search,
      title: 'Deal Sourcing',
      desc: 'Discover high-quality opportunities matched to your thesis',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop&q=80',
      features: ['Custom filters', 'AI recommendations', 'Saved searches', 'Deal alerts']
    },
    {
      icon: Database,
      title: 'Due Diligence Suite',
      desc: 'Comprehensive tools for evaluating opportunities',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=350&fit=crop&q=80',
      features: ['Financial analysis', 'Market research', 'Competitive intelligence', 'Risk assessment']
    },
    {
      icon: Briefcase,
      title: 'Portfolio Management',
      desc: 'Monitor and optimize your investment portfolio',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=350&fit=crop&q=80',
      features: ['Performance tracking', 'Company updates', 'Follow-on management', 'Exit tracking']
    },
    {
      icon: LineChart,
      title: 'Market Intelligence',
      desc: 'Stay informed with real-time market insights',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=350&fit=crop&q=80',
      features: ['Sector trends', 'Competitor analysis', 'Valuation benchmarks', 'Deal flow reports']
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      desc: 'Centralized platform for founder interactions',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=350&fit=crop&q=80',
      features: ['Unified inbox', 'Meeting scheduling', 'Document exchange', 'Note taking']
    },
    {
      icon: Award,
      title: 'Co-Investment Network',
      desc: 'Collaborate with other investors on deals',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop&q=80',
      features: ['Syndicate formation', 'Lead/follow dynamics', 'Term sheet sharing', 'Deal collaboration']
    }
  ];

  const platformFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      desc: 'Advanced infrastructure ensures instant matching and real-time updates',
      stat: '< 2s',
      label: 'Response Time'
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      desc: 'Enterprise-level encryption and security protocols protect your data',
      stat: '99.99%',
      label: 'Uptime SLA'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      desc: 'Access opportunities and investors from over 150 countries',
      stat: '150+',
      label: 'Countries'
    },
    {
      icon: Users,
      title: 'Growing Network',
      desc: 'Join thousands of active startups and investors on the platform',
      stat: '50K+',
      label: 'Active Users'
    }
  ];

  const integrations = [
    {
      icon: Settings,
      title: 'CRM Integration',
      desc: 'Connect with Salesforce, HubSpot, and more',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80'
    },
    {
      icon: FileText,
      title: 'Document Management',
      desc: 'Sync with Google Drive, Dropbox, and Box',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&q=80'
    },
    {
      icon: DollarSign,
      title: 'Financial Tools',
      desc: 'Integrate with QuickBooks, Xero, and Stripe',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&q=80'
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      desc: 'Works with Slack, Teams, and email platforms',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&h=300&fit=crop&q=80'
    }
  ];

  const successMetrics = [
    { value: '$2.5B+', label: 'Capital Raised', icon: DollarSign },
    { value: '1,200+', label: 'Successful Deals', icon: Trophy },
    { value: '94%', label: 'Match Satisfaction', icon: Star },
    { value: '45 Days', label: 'Avg. Time to Close', icon: Clock }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white overflow-hidden">
      
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-900/8 rounded-full blur-3xl" style={{ animation: 'float 15s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-600/6 rounded-full blur-3xl" style={{ animation: 'float 20s ease-in-out infinite', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-8" style={{ backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 58, 138, 0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-950/40 rounded-full border border-blue-900/40 backdrop-blur-md mb-8">
              <Layers className="w-4 h-4 text-amber-400" />
              <span className="text-sm bg-gradient-to-r from-blue-300 to-amber-300 bg-clip-text text-transparent font-medium">Comprehensive Platform Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-amber-200 to-blue-200 bg-clip-text text-transparent">
              Solutions Built for Success
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to raise capital or invest wisely—all in one powerful platform designed for modern fundraising and investment.
            </p>
          </div>

          {/* Hero Solutions Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {heroSolutions.map((solution, i) => (
              <div 
                key={i} 
                className="group relative cursor-pointer"
                onMouseEnter={() => setActiveSolution(solution.id)}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${solution.color === 'blue' ? 'from-blue-600/20 to-blue-800/20' : 'from-amber-600/20 to-amber-800/20'} rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                <div className={`relative p-8 bg-gradient-to-br from-slate-900/70 to-blue-950/40 border ${activeSolution === solution.id ? 'border-amber-600/60' : 'border-blue-900/30'} rounded-xl backdrop-blur-sm hover:border-amber-600/60 transform hover:translate-y-[-8px] transition-all duration-500`}>
                  <solution.icon className={`w-14 h-14 mb-6 ${solution.color === 'blue' ? 'text-blue-400' : 'text-amber-400'} group-hover:scale-110 transition-transform`} />
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{solution.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Solutions */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 rounded-full border border-blue-900/40 backdrop-blur-md mb-6">
              <Rocket className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">For Startups</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">
              Startup Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to raise capital and manage investor relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {startupSolutions.map((solution, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-xl border border-blue-900/30 hover:border-amber-600/40 transition-all duration-500 mb-4">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <solution.icon className="w-10 h-10 text-amber-400" />
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-blue-900/30 rounded-xl backdrop-blur-sm hover:border-amber-600/40 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{solution.desc}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-xs text-slate-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Solutions */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-950/40 rounded-full border border-amber-900/40 backdrop-blur-md mb-6">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              <span className="text-sm text-amber-300 font-medium">For Investors</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-blue-200 bg-clip-text text-transparent">
              Investor Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Powerful tools to discover, evaluate, and manage investments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investorSolutions.map((solution, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-xl border border-blue-900/30 hover:border-amber-600/40 transition-all duration-500 mb-4">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <solution.icon className="w-10 h-10 text-blue-400" />
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-blue-900/30 rounded-xl backdrop-blur-sm hover:border-amber-600/40 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{solution.desc}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span className="text-xs text-slate-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-400">Connect with your favorite tools</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {integrations.map((integration, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-xl border border-blue-900/30 hover:border-amber-600/40 transition-all duration-500 mb-4">
                  <img 
                    src={integration.image} 
                    alt={integration.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <integration.icon className="w-8 h-8 text-amber-400" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">{integration.title}</h4>
                  <p className="text-sm text-slate-400">{integration.desc}</p>
                </div>
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
            Ready to Experience Our Solutions?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join thousands using Nexora to accelerate their fundraising and investment success.
          </p>

        </div>
      </section>
    </div>
  );
}