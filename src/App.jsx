import React, { useState } from 'react';
import { 
  Shield, 
  Target, 
  FileText, 
  CheckCircle, 
  ChevronRight, 
  Menu, 
  X, 
  Award, 
  Cpu, 
  Building2, 
  Briefcase,
  HardHat,
  Search
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo area */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="bg-slate-900 p-2 rounded">
                <HardHat className="w-8 h-8 text-slate-100" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 uppercase leading-none">
                  STONE
                </span>
                <span className="text-sm font-bold tracking-widest text-slate-600 uppercase leading-tight">
                  Procurement Inc.
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">About Us</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="bg-slate-900 text-white px-5 py-2.5 rounded text-sm font-bold hover:bg-slate-800 transition-colors">
                Get an Audit
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-base font-semibold text-slate-600 hover:bg-slate-50">About Us</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-base font-semibold text-slate-600 hover:bg-slate-50">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-base font-semibold text-slate-600 hover:bg-slate-50">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-base font-bold text-slate-900 hover:bg-slate-50">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold tracking-wide text-slate-300 mb-6 uppercase">
              <Award className="w-4 h-4 text-amber-500" />
              IWSCC-Certified Veteran & Disabled-Owned Enterprise
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Mission-Ready Procurement. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                Certified. Compliant. Delivered.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between Canadian government objectives and industrial capability. Secure your place in the public sector supply chain with military-grade precision and AI-driven efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('pricing')} className="bg-white text-slate-900 px-8 py-4 rounded font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                View Retainer Plans <ChevronRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-transparent border-2 border-slate-700 text-white px-8 py-4 rounded font-bold hover:bg-slate-800 transition-colors">
                Request Readiness Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Authority / About Us Section */}
      <section id="about" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">Military-Grade Precision. Bulletproof Compliance.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Stone Procurement Inc. operates at the intersection of public sector demand and industrial capability. Led by a 10-year veteran of the Canadian Armed Forces, our operational DNA is built on the discipline of military resource management and strict mission assurance. We pair this frontline tactical expertise with robust internal financial controls and contract administration, ensuring seamless, compliant execution from the initial bid to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Shield className="w-12 h-12 text-slate-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">The Sovereign Shield</h3>
              <p className="text-slate-600">Navigating the new "Buy Canadian" policy mandates with expert compliance auditing and localized supply chain strategies.</p>
            </div>
            <div className="p-6">
              <Cpu className="w-12 h-12 text-slate-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AI-Powered Precision</h3>
              <p className="text-slate-600">Utilizing advanced LLMs to "shred" complex RFPs in minutes, allowing our compliance team to focus entirely on strategy, mandatory criteria, and ensuring zero administrative errors.</p>
            </div>
            <div className="p-6">
              <Building2 className="w-12 h-12 text-slate-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Strategic Joint Ventures</h3>
              <p className="text-slate-600">The ideal partner for large prime contractors needing to meet federal diversity set-aside mandates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">Bid Management as a Service (BMaaS)</h2>
            <p className="text-lg text-slate-600">We transform the complex, opaque process of government bidding into a streamlined, managed service. From opportunity identification to post-award administration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Search className="w-8 h-8 text-slate-700" />,
                phase: "Phase 1",
                title: "Opportunity Intelligence",
                desc: "Active Opportunity Monitoring: Our team pairs AI-driven tools with expert human analysis to scour third-party platforms, dedicated provincial portals, and municipal tender boards. Receive curated alerts precisely matched to your capabilities."
              },
              {
                icon: <Target className="w-8 h-8 text-slate-700" />,
                phase: "Phase 2",
                title: "Strategic Qualification",
                desc: "Rigorous Bid/No-Bid analysis calculating your Probability of Win (PWin). We stop you from pursuing expensive contracts you cannot win."
              },
              {
                icon: <FileText className="w-8 h-8 text-slate-700" />,
                phase: "Phase 3",
                title: "Narrative Crafting",
                desc: "Our Strategic Capture Team extracts critical technical details from your subject matter experts, translating them into a compelling, compliant narrative engineered around distinct win themes."
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-slate-700" />,
                phase: "Phase 4",
                title: "Administrative Submission",
                desc: "The Last Mile: We handle PKI certificates, formatting rules, and strict upload deadlines ensuring you never fail on a technicality."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="mb-4 inline-block p-3 bg-slate-100 rounded-lg">
                    {service.icon}
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{service.phase}</div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prime Contracting Focus */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Prime Contracting & Logistics</h2>
              <p className="text-slate-400 mb-6 text-lg">
                Beyond consulting, Stone Procurement actively bids and wins contracts directly. When we advise you, we do so with the authority of an active market participant.
              </p>
              <ul className="space-y-4">
                {[
                  "Fitness & Training Equipment",
                  "Uniforms & Tactical Apparel (Buy Canadian Compliant)",
                  "Fleet & Facility Maintenance Retainers",
                  "Joint Venture (JV) 'Diversity Bridge' Coordination"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <h3 className="text-xl font-bold mb-4 text-white">The Diversity Advantage</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  With the federal government mandated to meet aggressive supplier diversity targets, large primes often struggle with compliance. As an IWSCC Veteran-Owned and Disabled-Owned firm, we act as the ideal JV partner, providing the compliance framework and administrative management to secure large-scale set-aside contracts.
                </p>
                <button onClick={() => scrollToSection('contact')} className="text-amber-500 font-bold hover:text-amber-400 flex items-center gap-2">
                  Discuss JV Opportunities <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-sm rounded-full mb-4">
              {/* Market Penetration Pricing */}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">Retainer Packages</h2>
            <p className="text-lg text-slate-600">Recurring bid infrastructure designed to scale your government revenue stream. Eliminate the overhead of an in-house proposal department at below-market rates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tactical */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Tactical (Starter)</h3>
              <p className="text-sm text-slate-500 mb-6 min-h-[40px]">For micro-businesses testing the public sector market.</p>
              <div className="mb-6">
                <div>
                  <span className="text-4xl font-extrabold text-slate-900">$999</span>
                  <span className="text-slate-500">/mo</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-slate-900 mt-1 flex-shrink-0" /> 1 Bid Submission / month</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-slate-900 mt-1 flex-shrink-0" /> Weekly Opportunity Alerts</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-slate-900 mt-1 flex-shrink-0" /> Basic Compliance Check</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full py-3 rounded font-bold border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">Select Plan</button>
            </div>

            {/* Operational */}
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-lg flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Operational (Basic)</h3>
              <p className="text-sm text-slate-400 mb-6 min-h-[40px]">For established SMEs scaling government revenue.</p>
              <div className="mb-6">
                <div>
                  <span className="text-4xl font-extrabold text-white">$1,999</span>
                  <span className="text-slate-400">/mo</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" /> Up to 3 Bid Submissions / mo</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" /> Monthly Strategy Call</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" /> Supplier Coordination</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" /> Competitor Analysis</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full py-3 rounded font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors">Select Plan</button>
            </div>

            {/* Strategic */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Strategic (Standard)</h3>
              <p className="text-sm text-slate-500 mb-6 min-h-[40px]">Outsource your entire proposal department.</p>
              <div className="mb-6">
                <div>
                  <span className="text-4xl font-extrabold text-slate-900">$3,499</span>
                  <span className="text-slate-500">/mo</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-slate-900 mt-1 flex-shrink-0" /> 5+ Bid Submissions / mo</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-slate-900 mt-1 flex-shrink-0" /> Complete Narrative Development & Formatting</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-slate-900 mt-1 flex-shrink-0" /> Post-Award Contract Admin</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-slate-900 mt-1 flex-shrink-0" /> Debrief Analysis</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full py-3 rounded font-bold border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">Select Plan</button>
            </div>

            {/* Command */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Command (Premium)</h3>
              <p className="text-sm text-slate-500 mb-6 min-h-[40px]">For large enterprises or JV consortiums.</p>
              <div className="mb-6">
                <div>
                  <span className="text-4xl font-extrabold text-slate-900">$5,999</span>
                  <span className="text-slate-500">/mo</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-slate-900 mt-1 flex-shrink-0" /> Up to 8 Major Bids / mo</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-slate-900 mt-1 flex-shrink-0" /> Joint Venture Management</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-slate-900 mt-1 flex-shrink-0" /> Priority "Red Team" Reviews</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-slate-900 mt-1 flex-shrink-0" /> Priority Deadline Expediting</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full py-3 rounded font-bold border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">Select Plan</button>
            </div>
          </div>

          {/* Hybrid & Hourly Section */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Hybrid Success-Based */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold mb-4 text-slate-900">Hybrid Success-Based Bidding</h2>
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 font-bold text-sm rounded-full mb-4">
                  Low Risk Entry
                </div>
                <p className="text-lg text-slate-600">Not ready for a retainer? We offer a hybrid pricing model designed to align our success with yours, lowering your upfront risk while we build your public sector pipeline.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">Mobilization Fee</h4>
                    <div className="text-3xl font-extrabold text-slate-900 mb-2">$500 <span className="text-base font-medium text-slate-500">flat</span></div>
                    <p className="text-sm text-slate-600">Covers AI RFP shredding, compliance matrix setup, and initial portal administration.</p>
                  </div>
                  <div className="flex-1 bg-slate-900 p-6 rounded-lg border border-slate-800 text-white">
                    <h4 className="font-bold text-white mb-2">Success Fee</h4>
                    <div className="text-3xl font-extrabold text-white mb-2">5-8%</div>
                    <p className="text-sm text-slate-300">Of total contract value. Payable only upon contract award.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hourly Consulting & Accessibility */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold mb-4 text-slate-900">Hourly & Accessibility Rates</h2>
                <p className="text-lg text-slate-600">We believe in democratizing access to government contracts. For businesses that need ad-hoc guidance rather than full management, we offer transparent hourly billing.</p>
              </div>
              
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-900">Standard Strategy & Bid Support</h4>
                    <p className="text-sm text-slate-500">General procurement consulting and full-service support</p>
                  </div>
                  <div className="text-xl font-extrabold text-slate-900 text-right whitespace-nowrap ml-4">$125<span className="text-sm font-normal text-slate-500">/hr</span></div>
                </div>
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-900">Compliance & Technical Review</h4>
                    <p className="text-sm text-slate-500">Ensuring your drafted bids meet all mandatory criteria</p>
                  </div>
                  <div className="text-xl font-extrabold text-slate-900 text-right whitespace-nowrap ml-4">$100<span className="text-sm font-normal text-slate-500">/hr</span></div>
                </div>
                <div className="p-6 bg-emerald-50 flex justify-between items-center border-l-4 border-emerald-500">
                  <div>
                    <h4 className="font-bold text-emerald-900">Small Business & Accessibility Rate</h4>
                    <p className="text-sm text-emerald-700 mt-1 max-w-sm">Reserved for pre-revenue startups, micro-businesses (&lt;$250k/yr), and certified PWD/Veteran-owned enterprises.</p>
                  </div>
                  <div className="text-xl font-extrabold text-emerald-900 text-right whitespace-nowrap ml-4">$65<span className="text-sm font-normal text-emerald-700">/hr</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold mb-4">Start with an Audit</h2>
              <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                Lost a recent bid? Confused by the new "Buy Canadian" mandates? Get a comprehensive Procurement Readiness Audit. We'll review your capabilities, registrations, and past bids to build your strategy.
              </p>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-amber-500" />
                  Igli Xhango, Director
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-amber-500 mt-1" />
                  <span>3089 Cascade Common<br/>Oakville, ON, L6H 0R7</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-10 bg-slate-50">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Company Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-slate-900 focus:outline-none" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-slate-900 focus:outline-none" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Inquiry Type</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white">
                    <option>Procurement Readiness Audit</option>
                    <option>Retainer Services</option>
                    <option>Joint Venture Partnership</option>
                    <option>Lost Bid Debrief</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                  <textarea rows="3" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-slate-900 focus:outline-none" placeholder="How can we help you win?"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded hover:bg-slate-800 transition-colors">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="bg-slate-800 p-1.5 rounded">
                <HardHat className="w-6 h-6 text-slate-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white uppercase leading-none">
                  STONE
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase leading-tight">
                  Procurement Inc.
                </span>
              </div>
          </div>
          <div className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Stone Procurement Inc. All rights reserved. <br className="md:hidden"/> IWSCC-Certified Veteran-Owned Enterprise.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;