import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, Mail, Linkedin, Twitter } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">
              BRUTE FORCE <span className="text-gray-400">CAPITAL</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('philosophy')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Philosophy
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('philosophy')}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Philosophy
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </nav>
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="relative container mx-auto px-6 text-center animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Building the Future,
            <br />
            <span className="text-gradient">One Product at a Time.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            A holding company with a relentless focus on software, innovation,
            and scalable digital products.
          </p>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-sm font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            View Our Companies
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-zinc-950 fade-in-section opacity-0">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-center">
              Brute Force Capital builds and backs software companies designed
              for long-term value creation. We operate lean, move fast, and hold
              a zero-fluff philosophy: make great products, find product-market
              fit, and scale.
            </p>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="py-24 md:py-32 bg-black fade-in-section opacity-0"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 p-8 rounded-sm"
              >
                <div className="h-12 w-12 bg-gradient-to-br from-white to-gray-500 rounded-sm mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Company {index}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Building innovative solutions that solve real problems at
                  scale.
                </p>
                <button className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="philosophy"
        className="py-24 md:py-32 bg-zinc-950 fade-in-section opacity-0"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Execution over ideas',
                description:
                  'Ideas are cheap. Execution is everything. We focus on building, shipping, and iterating.',
              },
              {
                title: 'Speed as a competitive advantage',
                description:
                  'Velocity compounds. We move fast, make decisions quickly, and adapt faster than the competition.',
              },
              {
                title: 'Build simple things that solve real problems',
                description:
                  'Complexity is the enemy of execution. We build elegant solutions to genuine problems.',
              },
              {
                title: 'Keep ownership, keep leverage, keep building',
                description:
                  'We maintain control of our companies and compound value over time through ownership.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-l-2 border-white pl-6 py-2"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-24 md:py-32 bg-black fade-in-section opacity-0"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's Talk
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  For partnerships, acquisitions, or introductions, reach out
                  here.
                </p>
              </div>
              <div className="space-y-6">
                <a
                  href="mailto:Nick@bruteforcecapital.com"
                  className="group flex items-center gap-4 p-6 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 rounded-sm"
                >
                  <Mail className="text-gray-400 group-hover:text-white transition-colors" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email Nick</div>
                    <div className="font-semibold group-hover:text-gradient transition-colors">
                      Nick@bruteforcecapital.com
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:Brennen@bruteforcecapital.com"
                  className="group flex items-center gap-4 p-6 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 rounded-sm"
                >
                  <Mail className="text-gray-400 group-hover:text-white transition-colors" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Email Brennen
                    </div>
                    <div className="font-semibold group-hover:text-gradient transition-colors">
                      Brennen@bruteforcecapital.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-12 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500">
              © {new Date().getFullYear()} Brute Force Capital. All rights
              reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
