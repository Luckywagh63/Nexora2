"use client";
import React, { useState } from 'react';
import { ArrowRight, Users, Brain, Network, Rocket, Target, CheckCircle, Shield, Zap, BarChart3, Globe, Lock, TrendingUp, FileText, MessageSquare, Award, Clock, Search, UserPlus, Briefcase, LineChart } from 'lucide-react';

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState('startup');

  const processSteps = [
    {
      num: '01',
      title: 'Create Your Profile',
      icon: UserPlus,
      startup: 'Build a comprehensive profile showcasing your vision, team, traction, and funding needs. Our guided process ensures you highlight what matters most to investors.',
      investor: 'Set up your investor profile with preferences, investment thesis, ticket sizes, and sector focus. Define exactly what opportunities you want to see.',
      features: ['Guided onboarding', 'Media uploads', 'Verification process', 'Privacy controls'],
      imageStartup: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80',
      imageInvestor: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop&q=80'
    },
    {
      num: '02',
      title: 'AI-Powered Matching',
      icon: Brain,
      startup: 'Our advanced algorithm analyzes your startup against thousands of investor profiles, considering stage, sector, geography, and strategic fit to find your ideal matches.',
      investor: 'Receive curated deal flow based on your criteria. Our AI learns from your behavior to continuously improve match quality and surface the most relevant opportunities.',
      features: ['Smart algorithms', 'Learning system', 'Multi-factor analysis', 'Real-time updates'],
      imageStartup: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80',
      imageInvestor: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80'
    },
    {
      num: '03',
      title: 'Connect & Communicate',
      icon: MessageSquare,
      startup: 'Reach out to matched investors through our secure platform. Share your pitch deck, schedule meetings, and track engagement—all in one place.',
      investor: 'Review opportunities, request additional information, and communicate directly with founders. Our platform facilitates efficient due diligence and decision-making.',
      features: ['Secure messaging', 'Document sharing', 'Meeting scheduler', 'Engagement tracking'],
      imageStartup: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&q=80',
      imageInvestor: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80'
    },
    {
      num: '04',
      title: 'Close & Grow',
      icon: Rocket,
      startup: 'Access legal templates, cap table management, and investor relations tools. After closing, continue using Nexora for ongoing fundraising rounds.',
      investor: 'Streamline deal closing with integrated tools. Track portfolio performance, receive updates, and discover follow-on opportunities from your network.',
      features: ['Deal management', 'Legal templates', 'Portfolio tracking', 'Performance analytics'],
      imageStartup: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
      imageInvestor: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&q=80'
    }
  ];

  const detailedFeatures = {
    startup: [
      {
        icon: Target,
        title: 'Smart Targeting',
        desc: 'Get matched with investors who have funded similar companies in your space, stage, and geography.'
      },
      {
        icon: FileText,
        title: 'Pitch Resources',
        desc: 'Access templates, best practices, and examples from successful fundraises to perfect your pitch.'
      },
      {
        icon: BarChart3,
        title: 'Analytics Dashboard',
        desc: 'Track profile views, investor interest, and engagement metrics to optimize your fundraising strategy.'
      },
      {
        icon: Shield,
        title: 'Secure Data Room',
        desc: 'Share sensitive documents with granular access controls and track who views what and when.'
      },
      {
        icon: Network,
        title: 'Warm Introductions',
        desc: 'Leverage mutual connections and get introduced to investors through trusted intermediaries.'
      },
      {
        icon: Award,
        title: 'Credibility Signals',
        desc: 'Showcase your accelerator backing, customer logos, press mentions, and team credentials.'
      }
    ],
    investor: [
      {
        icon: Search,
        title: 'Advanced Filters',
        desc: 'Search and filter by stage, sector, metrics, location, and dozens of other criteria to find exactly what you want.'
      },
      {
        icon: BarChart3,
        title: 'Due Diligence Suite',
        desc: 'Access comprehensive data rooms, financial models, and market research to evaluate opportunities efficiently.'
      },
      {
        icon: LineChart,
        title: 'Market Intelligence',
        desc: 'Get insights on sector trends, competitive landscape, and market dynamics to inform your decisions.'
      },
      {
        icon: Briefcase,
        title: 'Portfolio Management',
        desc: 'Track all your investments, monitor performance, receive updates, and manage follow-on opportunities.'
      },
      {
        icon: Globe,
        title: 'Global Deal Flow',
        desc: 'Access opportunities from around the world, with local context and market-specific insights.'
      },
      {
        icon: Clock,
        title: 'Time Efficiency',
        desc: 'Save time with pre-screened opportunities, organized data, and streamlined communication workflows.'
      }
    ]
  };

  const successStories = [
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&q=80',
      company: 'TechFlow AI',
      raised: '$2.5M',
      quote: 'Nexora connected us with the perfect investors who understood our vision.',
      founder: 'Sarah Chen, CEO'
    },
    {
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&q=80',
      company: 'GreenEnergy Co',
      raised: '$5M',
      quote: 'The AI matching saved us months of outreach and connected us with strategic partners.',
      founder: 'Michael Rodriguez, Founder'
    },
    {
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&q=80',
      company: 'HealthTech Solutions',
      raised: '$3.8M',
      quote: 'The platform\'s analytics helped us refine our pitch and close our round faster.',
      founder: 'Emily Watson, Co-founder'
    }
  ];

  const timeline = [
    { time: 'Day 1', action: 'Sign up and complete profile', icon: Users },
    { time: 'Day 2-3', action: 'AI analyzes and generates matches', icon: Brain },
    { time: 'Week 1', action: 'Start connecting with matches', icon: MessageSquare },
    { time: 'Week 2-4', action: 'Schedule and conduct meetings', icon: Network },
    { time: 'Month 1-3', action: 'Due diligence and negotiations', icon: Shield },
    { time: 'Month 3+', action: 'Close round and celebrate', icon: Rocket }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white overflow-hidden">
      
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-900/8 rounded-full blur-3xl" style={{ animation: 'float 15s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-600/6 rounded-full blur-3xl" style={{ animation: 'float 20s ease-in-out infinite', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-8" style={{ backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 58, 138, 0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-950/40 rounded-full border border-blue-900/40 backdrop-blur-md mb-8">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm bg-gradient-to-r from-blue-300 to-amber-300 bg-clip-text text-transparent font-medium">Simple, Smart, Successful</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-amber-200 to-blue-200 bg-clip-text text-transparent">
            How Nexora Works
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            From profile creation to successful funding—discover how our platform connects innovation with capital through intelligent matching and seamless workflows.
          </p>

          {/* Tab Selector */}
          <div className="inline-flex items-center gap-4 p-2 bg-slate-900/50 rounded-full border border-blue-900/30 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('startup')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'startup'
                  ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Startups
            </button>
            <button
              onClick={() => setActiveTab('investor')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'investor'
                  ? 'bg-gradient-to-r from-amber-900 to-amber-950 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Investors
            </button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-24">
            {processSteps.map((step, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-4">
                    <span className="text-6xl font-bold text-blue-950/50">{step.num}</span>
                    <step.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                  
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {activeTab === 'startup' ? step.startup : step.investor}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                        <span className="text-sm text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`relative group ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/15 to-amber-600/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                  <div className="relative overflow-hidden rounded-xl border border-blue-900/30 shadow-2xl">
                    <img 
                      src={activeTab === 'startup' ? step.imageStartup : step.imageInvestor} 
                      alt={step.title} 
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">
              {activeTab === 'startup' ? 'Startup Features' : 'Investor Features'}
            </h2>
            <p className="text-xl text-slate-400">Everything you need to succeed</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {detailedFeatures[activeTab].map((feature, i) => (
              <div key={i} className="group p-8 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-blue-900/30 rounded-xl backdrop-blur-sm hover:border-amber-600/40 transform hover:translate-y-[-8px] transition-all duration-500">
                <feature.icon className="w-12 h-12 text-blue-400 mb-6 group-hover:text-amber-400 transition-colors" />
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">Expected Timeline</h2>
            <p className="text-xl text-slate-400">Your journey from signup to success</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-900 via-amber-900 to-blue-900"></div>
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block p-6 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-blue-900/30 rounded-xl backdrop-blur-sm hover:border-amber-600/40 transition-all">
                      <div className="text-amber-400 font-semibold mb-2">{item.time}</div>
                      <div className="text-white text-lg">{item.action}</div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-950 rounded-full border-4 border-slate-950 flex items-center justify-center shadow-lg shadow-blue-900/50">
                      <item.icon className="w-8 h-8 text-blue-200" />
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-slate-950/30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join thousands of {activeTab === 'startup' ? 'startups raising capital' : 'investors finding opportunities'} on Nexora today.
          </p>
   
        </div>
      </section>
    </div>
  );
}