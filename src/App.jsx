import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Video, 
  PenTool, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown,
  Linkedin,
  Instagram,
  PlayCircle,
  Award,
  Globe,
  Facebook,
  MonitorPlay,
  Mic,
  XCircle,
  Eye,
  Star
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Data: YouTube Videos with Verified Views
  const youtubeVideos = {
    script: [
      { id: 'CoYF0kTI7t8', title: 'USB-C 線材選購指南：2025 又轉新制式！全解析', views: '35K views' },
      { id: '-GUynsq2Ps0', title: '2024 平板電腦選購攻略：iPad 以外的頂級選擇', views: '185K views' },
      { id: 'SxYtyf2lbUM', title: '2024 平價智能手錶實測：$500 價位挑戰 Apple Watch', views: '230K views' },
      { id: 'mOOkUhwlq-Q', title: 'AI 工具 10 分鐘速成：一鍵整理文章、Excel 教學', views: '204K views' },
    ],
    host: [
      { id: 'TipaTPc803U', title: '旗艦手機拍攝對決 (Hosting Highlight)', views: '85K views' },
      { id: '7EydhuA8gUE', title: '智能家居入門指南 (Hosting Highlight)', views: '62K views' },
      { id: 'D6-lGXOqpyM', title: '降噪耳機年度評測 (Hosting Highlight)', views: '95K views' },
      { id: '-Hi7Wt10eqM', title: 'Apple Intelligence 終於有廣東話！實測iPhone 8大必用新功能', views: '168K views' },
    ]
  };

  // Data: Social Media Embeds
  const socialMediaItems = [
    { type: 'post', src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPrice.com.hk%2Fposts%2Fpfbid02DU9Jw4K4ToY9BZCkH2k8phPbPUTK2rX995UftfFrE5petk8W9mNBbi1nnf3Q6Kcul&show_text=true&width=500", height: 621 },
    { type: 'post', src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPrice.com.hk%2Fposts%2Fpfbid0siChATsu5b7TrujEaPqc6TzBxeNqUvP9fu9NEVzkL1XxLASjQc9zA75jnwzGU5gGl&show_text=true&width=500", height: 250 },
    { type: 'post', src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPrice.com.hk%2Fposts%2Fpfbid02GwdtCyoFJdkwkHKHfUEJL4bFSQJyKqbmftKSaJJoavjiQsaSao3Cfs3mZNapBeiPl&show_text=true&width=500", height: 750 },
    { type: 'post', src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPrice.com.hk%2Fposts%2Fpfbid025KBchfrVPuFUhdprAAEkkmADjY31HkUZX5t1wXFaD7QsiQqv3DWTMJ3GPZRyJwRl&show_text=true&width=500", height: 250 },
    { type: 'post', src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPrice.com.hk%2Fposts%2Fpfbid02kPoz7g5Y19DoJjskchUzGm9WQAt6MQ1acpEyjnt66Mnr2FEzcbWXomy6uyha764Sl&show_text=true&width=500", height: 489 },
    { type: 'reel', src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F793883300471202%2F&show_text=false&width=267&t=0", height: 476, width: 267 },
    { type: 'reel', src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F758035947110820%2F&show_text=false&width=267&t=0", height: 476, width: 267 },
    { type: 'reel', src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1930263527522762%2F&show_text=false&width=267&t=0", height: 476, width: 267 },
    { type: 'video', src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent('https://www.facebook.com/01hashtech/videos/259117678080967/')}&show_text=false&width=500`, height: 300 },
    { type: 'post', src: `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent('https://www.facebook.com/01hashtech/posts/pfbid0mwFk6t77mat7at6q8RZxxLFWD96VeXBkE1zyJPfPRu3oBvyVSECSGAXxCFEwpDh9l')}&show_text=true&width=500`, height: 600 },
    { type: 'reel', src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent('https://www.facebook.com/reel/1611312290309475')}&show_text=false&width=267`, height: 476, width: 267 },
    { type: 'post', src: `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent('https://www.facebook.com/hk01wemedia/posts/pfbid0ZTJQ4AL1mU2BUGTGcSdUFkyKRG1Q2tHLsjiwBA4hBC8RZSxS6WJN7iK1ikHYpztWl')}&show_text=true&width=500`, height: 500 },
    { type: 'post', src: `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent('https://www.facebook.com/hk01wemedia/posts/pfbid0QpuA3Y8fynVYscK3mULcy3dGdMBrkRTcyWi4NFnefbjnEuDxBtpCjYbPEXpZqimzl')}&show_text=true&width=500`, height: 300 },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'portfolio', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    // Updated background to Deep Blue (slate-950/custom) and text colors
    <div className="min-h-screen bg-[#050B14] text-slate-200 font-sans selection:bg-amber-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050B14]/95 backdrop-blur-sm shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold tracking-tighter text-amber-400 cursor-pointer" onClick={() => scrollToSection('home')}>
              AC<span className="text-white">.</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              {['Home', 'About', 'Portfolio', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-amber-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-amber-400' : 'text-slate-400'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-200 hover:text-amber-400">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0A1625] border-t border-white/10 absolute w-full shadow-2xl">
            <div className="px-6 py-4 space-y-4 flex flex-col">
              {['Home', 'About', 'Portfolio', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-slate-300 hover:text-amber-400 py-2 border-b border-white/5 last:border-0"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Updated Background Elements - Gold & Blue glows */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-6 z-10 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 mb-6 border border-amber-500/30 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium tracking-wide">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div> Available for Opportunities</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">Aaron Choi</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light max-w-2xl mx-auto md:mx-0">
                Experienced Content Creator & <br className="hidden md:block"/> Digital Strategist specialized in video production.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20"
                >
                  Contact Me
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium transition-all border border-white/10 hover:border-amber-500/50 backdrop-blur-sm"
                >
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Profile Image - Updated with user provided URL */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full border-2 border-amber-500/20"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-amber-500/20">
                  <img 
                    src="https://raw.githubusercontent.com/aaronht88/aaron-portfolio/main/Profile_hero.jpg" 
                    alt="Aaron Choi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
          
          <div className="mt-20 md:mt-32 animate-bounce text-slate-500 hidden md:block text-center">
            <ChevronDown size={24} className="mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#08101C]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-[#0F1C2E] p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Star className="text-amber-400 fill-amber-400" size={20}/> Profile Summary
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Experienced content creator with <span className="text-amber-400 font-bold">15+ years</span> in digital media, specializing in video production, social media management, copywriting, and content strategy.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Proven track record of driving engagement through compelling storytelling, SEO-optimized content, data-driven editorial strategies, and multi-platform social media campaigns.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                    <MapPin size={16} className="text-amber-400" /> Hong Kong
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                    <Globe size={16} className="text-amber-400" /> Native Cantonese
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                    <Globe size={16} className="text-amber-400" /> Fluent English & Mandarin
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Video size={32} />, title: "Video Production", desc: "Script to Screen" },
                { icon: <TrendingUp size={32} />, title: "Content Strategy", desc: "Data-Driven Growth" },
                { icon: <PenTool size={32} />, title: "Copywriting", desc: "SEO Optimized" },
                { icon: <Camera size={32} />, title: "Social Media", desc: "Multi-Platform Mgmt" }
              ].map((item, index) => (
                <div key={index} className="bg-[#0F1C2E] p-6 rounded-xl border border-white/5 hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-1">
                  <div className="text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">{item.icon}</div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-[#050B14]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm border-b border-amber-400 pb-1">Selected Works</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">Portfolio Highlights</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A curated selection of video production and social media campaigns from Price.com.hk and HK01.
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-l-4 border-amber-500 pl-4 bg-gradient-to-r from-amber-500/10 to-transparent py-2">
              <MonitorPlay className="text-amber-400" /> Price.com.hk Video Highlights
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Scriptwriting */}
              <div>
                <h4 className="text-lg font-semibold text-slate-300 mb-6 flex items-center gap-2">
                  <PenTool size={18} className="text-amber-500" /> Scriptwriting & Production
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {youtubeVideos.script.map((video) => (
                    <div 
                      key={video.id} 
                      className="group cursor-pointer flex flex-col h-full"
                      onClick={() => setSelectedVideo(video.id)}
                    >
                      <div className="relative aspect-video bg-[#0A1625] rounded-lg overflow-hidden border border-white/10 shadow-lg group-hover:border-amber-500 transition-all duration-300 mb-4">
                        <img 
                          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                          alt="Thumbnail" 
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                          <PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:text-amber-400 transition-all" />
                        </div>
                      </div>
                      <h5 className="text-white font-medium leading-tight group-hover:text-amber-400 transition-colors mb-2">{video.title}</h5>
                      <p className="text-slate-500 text-sm flex items-center gap-1 mt-auto">
                        <Eye size={14} className="text-slate-600" /> {video.views}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hosting */}
              <div>
                <h4 className="text-lg font-semibold text-slate-300 mb-6 flex items-center gap-2">
                  <Mic size={18} className="text-amber-500" /> Hosting & Performance
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {youtubeVideos.host.map((video) => (
                    <div 
                      key={video.id} 
                      className="group cursor-pointer flex flex-col h-full"
                      onClick={() => setSelectedVideo(video.id)}
                    >
                      <div className="relative aspect-video bg-[#0A1625] rounded-lg overflow-hidden border border-white/10 shadow-lg group-hover:border-amber-500 transition-all duration-300 mb-4">
                        <img 
                          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                          alt="Thumbnail" 
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                          <PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:text-amber-400 transition-all" />
                        </div>
                      </div>
                      <h5 className="text-white font-medium leading-tight group-hover:text-amber-400 transition-colors mb-2">{video.title}</h5>
                      <p className="text-slate-500 text-sm flex items-center gap-1 mt-auto">
                         <Eye size={14} className="text-slate-600" /> {video.views}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-l-4 border-blue-500 pl-4 bg-gradient-to-r from-blue-900/20 to-transparent py-2">
              <Facebook className="text-blue-500" /> Social Media Strategy
            </h3>
            
            {/* Masonry-style grid for social embeds */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {socialMediaItems.map((item, idx) => (
                <div key={idx} className="break-inside-avoid bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-shadow duration-300 flex justify-center">
                  <iframe 
                    src={item.src} 
                    width={item.width || 500} 
                    height={item.height} 
                    style={{border:'none', overflow:'hidden', maxWidth: '100%'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-[#08101C]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Award className="text-amber-400" /> Professional Experience
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            
            {/* Job 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#0A1625] bg-[#0F1C2E] group-[.is-active]:border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#0F1C2E] p-6 rounded-xl border border-white/5 shadow-lg hover:border-amber-500/30 transition-all">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="font-bold text-xl text-white">Senior Editor</h3>
                  <span className="text-amber-400 text-sm font-medium px-2 py-1 bg-amber-500/10 rounded border border-amber-500/20">Feb 2024 – Present</span>
                </div>
                <h4 className="text-slate-300 font-medium mb-4">Price.com.hk Limited</h4>
                <ul className="space-y-2 text-slate-400 text-sm list-disc list-outside pl-4">
                  <li>Produced engaging video content including scriptwriting, filming direction, and post-production editing.</li>
                  <li>Managed social media channels (FB, IG, YT) creating and scheduling content.</li>
                  <li>Leveraged AI tools (ChatGPT, Claude) to streamline content creation workflow.</li>
                  <li>Analyzed content performance metrics and social media analytics.</li>
                </ul>
              </div>
            </div>

            {/* Job 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#0A1625] bg-[#0F1C2E] group-[.is-active]:border-amber-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-slate-500 rounded-full group-hover:bg-amber-400 transition-colors"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#0F1C2E] p-6 rounded-xl border border-white/5 shadow-lg hover:border-amber-500/30 transition-all">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="font-bold text-xl text-white">Senior Reporter</h3>
                  <span className="text-slate-400 text-sm font-medium px-2 py-1 bg-white/5 rounded">Aug 2017 – Feb 2024</span>
                </div>
                <h4 className="text-slate-300 font-medium mb-4">HK01 Company Limited</h4>
                <ul className="space-y-2 text-slate-400 text-sm list-disc list-outside pl-4">
                  <li>Published web and live news articles across multiple digital platforms.</li>
                  <li>Managed and grew social media presence for Facebook, Instagram, and YouTube.</li>
                  <li>Utilized AI-powered tools for content research and editorial assistance.</li>
                  <li>Developed content partnerships with clients and brands.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#0A1625] bg-[#0F1C2E] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Award size={18} className="text-slate-400 group-hover:text-amber-400 transition-colors" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#0F1C2E] p-6 rounded-xl border border-white/5 shadow-lg hover:border-amber-500/30 transition-all">
                <h3 className="font-bold text-lg text-white mb-2">Education</h3>
                <div className="mb-4">
                  <p className="text-amber-400 font-medium">Metropolitan University (2010)</p>
                  <p className="text-slate-400 text-sm">Bachelor's Degree in Multimedia and Entertainment Technology</p>
                </div>
                <div>
                  <p className="text-amber-400 font-medium">IVE (2007)</p>
                  <p className="text-slate-400 text-sm">Higher Diploma in Multimedia Technology and Digital Entertainment</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[#050B14]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Key Skills</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Combining technical proficiency with creative strategy to deliver high-quality content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tech Skills */}
            <div className="bg-[#0F1C2E] rounded-xl p-6 border-t-4 border-amber-500 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">Production Tools</h3>
              <div className="space-y-4">
                {[
                  { name: "Adobe Premiere Pro", level: 90 },
                  { name: "Adobe Photoshop", level: 85 },
                  { name: "AI Tools (ChatGPT/Claude)", level: 95 },
                  { name: "Video Editing", level: 90 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#050B14] rounded-full h-2 border border-white/5">
                      <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(245,158,11,0.3)]" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Skills */}
            <div className="bg-[#0F1C2E] rounded-xl p-6 border-t-4 border-blue-500 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">Strategy & Growth</h3>
              <div className="flex flex-wrap gap-2">
                {['Content Strategy', 'SEO Optimization', 'Copywriting', 'Social Media Management', 'Team Leadership', 'Data Analysis', 'Storytelling', 'Brand Partnerships'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#050B14] text-slate-300 rounded-full text-sm border border-white/5 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-[#0F1C2E] rounded-xl p-6 border-t-4 border-purple-500 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">Languages</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#050B14] rounded-full flex items-center justify-center text-purple-400 font-bold border border-purple-500/20">CN</div>
                  <div>
                    <h4 className="text-white font-medium">Cantonese</h4>
                    <p className="text-slate-400 text-sm">Native Proficiency</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#050B14] rounded-full flex items-center justify-center text-purple-400 font-bold border border-purple-500/20">EN</div>
                  <div>
                    <h4 className="text-white font-medium">English</h4>
                    <p className="text-slate-400 text-sm">Fluent Proficiency</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#050B14] rounded-full flex items-center justify-center text-purple-400 font-bold border border-purple-500/20">MN</div>
                  <div>
                    <h4 className="text-white font-medium">Mandarin</h4>
                    <p className="text-slate-400 text-sm">Fluent Proficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#050B14] to-[#02050A]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Collaborate</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Looking for a content strategist or video producer to elevate your brand? 
            <br />I'm currently available for new opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:aaronht88@gmail.com" className="group bg-[#0F1C2E] p-8 rounded-2xl hover:bg-[#15233b] transition-all border border-white/5 hover:border-amber-500 shadow-lg hover:shadow-amber-500/10">
              <div className="w-16 h-16 bg-[#050B14] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-white/5 group-hover:border-amber-500/50">
                <Mail className="text-amber-400" size={32} />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Email</h3>
              <p className="text-slate-400 group-hover:text-amber-400 transition-colors">aaronht88@gmail.com</p>
            </a>
            <a href="tel:+85262877989" className="group bg-[#0F1C2E] p-8 rounded-2xl hover:bg-[#15233b] transition-all border border-white/5 hover:border-amber-500 shadow-lg hover:shadow-amber-500/10">
              <div className="w-16 h-16 bg-[#050B14] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-white/5 group-hover:border-amber-500/50">
                <Phone className="text-amber-400" size={32} />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
              <p className="text-slate-400 group-hover:text-amber-400 transition-colors">+852 6287 7989</p>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 bg-[#0F1C2E] rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all border border-white/5 hover:border-blue-500">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-[#0F1C2E] rounded-full flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all border border-white/5 hover:border-pink-500">
              <Instagram size={20} />
            </a>
          </div>

          <footer className="mt-20 pt-8 border-t border-white/10 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Aaron Choi. All rights reserved.</p>
          </footer>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white z-10 bg-black/50 rounded-full p-1"
            >
              <XCircle size={32} />
            </button>
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
