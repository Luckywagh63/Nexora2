"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Users, Briefcase, ArrowRight, CheckCircle, Clock, Globe, Zap } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    userType: 'startup',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        userType: 'startup',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'allivosavl@gmail.com',
      link: 'mailto:allivosavl@gmail.com',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+91 86522 90058',
      link: 'tel:+918652290058',
      color: 'amber'
    },
    {
      icon: Phone,
      title: 'Alternative',
      detail: '+91 75071 23309',
      link: 'tel:+917507123309',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Support',
      detail: '+91 84849 22955',
      link: 'tel:+918484922955',
      color: 'amber'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Quick Response',
      desc: 'We respond within 24 hours'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      desc: 'Personal assistance from our team'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      desc: 'Supporting clients worldwide'
    },
    {
      icon: Zap,
      title: 'Fast Solutions',
      desc: 'Efficient problem resolution'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started?',
      answer: 'Simply reach out via email or phone, and our team will guide you through the onboarding process.'
    },
    {
      question: 'What are your support hours?',
      answer: 'We provide support Monday-Friday, 9 AM to 6 PM IST, with email support available 24/7.'
    },
    {
      question: 'Do you offer demos?',
      answer: 'Yes! Contact us to schedule a personalized demo of our platform.'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white overflow-hidden">
      
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-900/8 rounded-full blur-3xl" style={{ animation: 'float 15s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-600/6 rounded-full blur-3xl" style={{ animation: 'float 20s ease-in-out infinite', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-8" style={{ backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 58, 138, 0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-950/40 rounded-full border border-blue-900/40 backdrop-blur-md mb-8">
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span className="text-sm bg-gradient-to-r from-blue-300 to-amber-300 bg-clip-text text-transparent font-medium">We're Here to Help</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-amber-200 to-blue-200 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Have questions about Nexora? We'd love to hear from you. Reach out to our team and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <a 
                key={i} 
                href={info.link}
                className="group p-8 bg-gradient-to-br from-slate-900/70 to-blue-950/40 border border-blue-900/30 rounded-xl backdrop-blur-sm hover:border-amber-600/60 transform hover:translate-y-[-8px] transition-all duration-500"
              >
                <div className={`w-14 h-14 mb-6 rounded-full bg-gradient-to-br ${info.color === 'blue' ? 'from-blue-900/50 to-blue-800/50' : 'from-amber-900/50 to-amber-800/50'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <info.icon className={`w-7 h-7 ${info.color === 'blue' ? 'text-blue-400' : 'text-amber-400'}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-slate-400 text-sm break-all">{info.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-amber-600/10 rounded-2xl blur-xl"></div>
              <div className="relative p-8 bg-gradient-to-br from-slate-900/70 to-blue-950/40 border border-blue-900/30 rounded-xl backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
                <p className="text-slate-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>
                
                {submitted ? (
                  <div className="py-20 text-center" style={{ animation: 'slideIn 0.5s ease-out' }}>
                    <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-blue-900/30 rounded-lg text-white placeholder-slate-500 focus:border-amber-600/60 focus:outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-blue-900/30 rounded-lg text-white placeholder-slate-500 focus:border-amber-600/60 focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-blue-900/30 rounded-lg text-white placeholder-slate-500 focus:border-amber-600/60 focus:outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-blue-900/30 rounded-lg text-white placeholder-slate-500 focus:border-amber-600/60 focus:outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">I am a *</label>
                      <div className="flex gap-4">
                        <label className="flex-1">
                          <input
                            type="radio"
                            name="userType"
                            value="startup"
                            checked={formData.userType === 'startup'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`p-4 border rounded-lg text-center cursor-pointer transition-all ${formData.userType === 'startup' ? 'border-blue-600 bg-blue-900/20' : 'border-blue-900/30 bg-slate-900/20'}`}>
                            <Briefcase className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                            <span className="text-sm text-white">Startup</span>
                          </div>
                        </label>
                        <label className="flex-1">
                          <input
                            type="radio"
                            name="userType"
                            value="investor"
                            checked={formData.userType === 'investor'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`p-4 border rounded-lg text-center cursor-pointer transition-all ${formData.userType === 'investor' ? 'border-amber-600 bg-amber-900/20' : 'border-blue-900/30 bg-slate-900/20'}`}>
                            <Users className="w-6 h-6 mx-auto mb-2 text-amber-400" />
                            <span className="text-sm text-white">Investor</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-slate-900/50 border border-blue-900/30 rounded-lg text-white placeholder-slate-500 focus:border-amber-600/60 focus:outline-none transition-all resize-none"
                        placeholder="Tell us about your needs..."
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="group w-full px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-950 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-900/50 border border-blue-800/50 hover:border-amber-500/50 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Info & Image */}
            <div className="space-y-8">
              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/15 to-blue-600/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-xl border border-blue-900/30 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=500&fit=crop&q=80" 
                    alt="Contact Us" 
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="p-6 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-blue-900/30 rounded-xl backdrop-blur-sm">
                    <feature.icon className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-xs text-slate-400">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <div className="p-8 bg-gradient-to-br from-slate-900/70 to-blue-950/40 border border-blue-900/30 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Answers</h3>
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <h4 className="text-amber-400 font-semibold mb-2">{faq.question}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent">
              Visit Our Office
            </h2>
            <p className="text-xl text-slate-400">We'd love to meet you in person</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-blue-900/30 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-slate-900/50 to-blue-950/30 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Allivos Headquarters</h3>
                <p className="text-slate-400">Contact us for our office location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-slate-950/30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Whether you're a startup looking for funding or an investor seeking opportunities, we're here to help.
          </p>
          <a href='/'>
          <button className="group px-12 py-6 bg-gradient-to-r from-blue-900 to-blue-950 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-blue-900/50 border border-blue-800/50 hover:border-amber-600 transition-all">
            <span className="flex items-center gap-3">
              Explore Our Platform
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          </a>
        </div>
      </section>
    </div>
  );
}
