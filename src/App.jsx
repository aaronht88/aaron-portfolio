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

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Data: YouTube Videos
  const youtubeVideos = {
    script: [
      { id: 'CoYF0kTI7t8', title: 'USB-C 線材選購指南：2025 新制式全解析', views: '282K views' },
      { id: '-GUynsq2Ps0', title: '2024 平板電腦選購攻略：iPad 以外的頂級選擇', views: '150K views' },
      { id: 'SxYtyf2lbUM', title: '2024 平價智能手錶實測：$500 價位挑戰 Apple Watch', views: '230K views' },
      { id: 'mOOkUhwlq-Q', title: 'AI 工具 10 分鐘速成：一鍵整理文章、Excel 教學', views: '204K views' },
    ],
    host: [
      { id: 'TipaTPc803U', title: '旗艦手機拍攝對決 (Hosting Sample)', views: '85K views' },
      { id: '7EydhuA8gUE', title: '智能家居入門指南 (Hosting Sample)', views: '62K views' },
      { id: 'D6-lGXOqpyM', title: '降噪耳機年度評測 (Hosting Sample)', views: '95K views' },
      { id: '-Hi7Wt10eqM', title: 'Apple Intelligence 廣東話實測：8 大必用功能', views: '168K views' },
    ]
  };

  // Social Media Embeds
  const socialMediaItems = [
    { type: 'post', src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPrice.com.hk%2Fposts%2Fpfbid02DU9Jw4K4ToY9BZCkH2k8phPbPUTK2rX995UftfFrE5petk8W9mNBbi1nnf3Q6Kcul&show_text=true&width=500", height: 621 },
    { type: 'post', src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPrice.com.hk%2Fposts%2Fpfbid0siChATsu5b7TrujEaPqc6TzBxeNqUvP9fu9NEVzkL1XxLASjQc9zA75jnwzGU5gGl&show_text=true&width=500", height: 250 },
    { type: 'reel', src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F793883300471202%2F&show_text=false&width=267&t=0", height: 476, width: 267 },
  ];

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
    <div className="min-h-screen bg-[#050B14] text-slate-200 font-sans">
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

        {/* Mobile Menu */}
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
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 z-10 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 mb-6 border border-amber-500/30 rounded-full bg-amber-500/10 text-amber-400 text-sm">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-400"></div> Available for Opportunities</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                I'm <span className="text-amber-400">Aaron Choi</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-8">
                Experienced Content Creator & Digital Strategist
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3.5 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-all"
                >
                  Contact Me
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-3.5 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all border border-white/10"
                >
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full border-2 border-amber-500/20"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-amber-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Aaron Choi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#08101C]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <p className="text-slate-300 text-center max-w-3xl mx-auto text-lg">
            Experienced content creator with <span className="text-amber-400 font-bold">15+ years</span> in digital media, 
            specializing in video production, social media management, copywriting, and content strategy.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Portfolio</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {youtubeVideos.script.map((video) => (
              <div 
                key={video.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative aspect-video bg-[#0A1625] rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <PlayCircle size={48} className="text-white" />
                  </div>
                </div>
                <h3 className="text-white mt-4 font-medium">{video.title}</h3>
                <p className="text-slate-500 text-sm">{video.views}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-[#08101C]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>

          <div className="space-y-8">
            <div className="bg-[#0F1C2E] p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Senior Editor</h3>
                  <p className="text-slate-400">Price.com.hk Limited</p>
                </div>
                <span className="text-amber-400 text-sm">2024 - Present</span>
              </div>
              <ul className="text-slate-300 list-disc list-inside space-y-2">
                <li>Managed social media channels (FB, IG, YT)</li>
                <li>Leveraged AI tools for content creation</li>
              </ul>
            </div>

            <div className="bg-[#0F1C2E] p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Senior Reporter</h3>
                  <p className="text-slate-400">HK01 Company Limited</p>
                </div>
                <span className="text-slate-500 text-sm">2017 - 2024</span>
              </div>
              <ul className="text-slate-300 list-disc list-inside space-y-2">
                <li>Managed social media presence</li>
                <li>Utilized AI-powered tools for content research</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:aaronht88@gmail.com" className="bg-[#0F1C2E] px-8 py-4 rounded-xl border border-white/10 hover:border-amber-500 transition-all">
              <Mail className="mx-auto mb-2 text-amber-400" size={24} />
              <p className="text-white">aaronht88@gmail.com</p>
            </a>
            
            <a href="tel:+85262877989" className="bg-[#0F1C2E] px-8 py-4 rounded-xl border border-white/10 hover:border-amber-500 transition-all">
              <Phone className="mx-auto mb-2 text-amber-400" size={24} />
              <p className="text-white">+852 6287 7989</p>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-white z-10"
            >
              <XCircle size={32} />
            </button>
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
