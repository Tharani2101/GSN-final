import { BrowserRouter, Routes, Route } from 'react-router';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { MembershipBenefits } from './components/MembershipBenefits';
import { AINetwork } from './components/AINetwork';
import { SuccessStories } from './components/SuccessStories';
import { Chapters } from './components/Chapters';
import { Events } from './components/Events';
import { Pricing } from './components/Pricing';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Sample1 } from './components/Sample1';
import { Sample2 } from './components/Sample2';
import { Sample3 } from './components/Sample3';
import { Sample4 } from './components/Sample4';
import { Sample5 } from './components/Sample5';
import { Sample6 } from './components/Sample6';
import { Sample7 } from './components/Sample7';
import { Sample8 } from './components/Sample8';
import { Sample9 } from './components/Sample9';
import { Sample10 } from './components/Sample10';
import { Sample11 } from './components/Sample11';

function HomePage() {
  return (
    <>
      {/* Main Content */}
      <main>
        <Hero />
        <Features />
        <About />
        <MembershipBenefits />
        <AINetwork />
        <SuccessStories />
        <Chapters />
        <Events />
        <Pricing />
        <Resources />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll Effects - Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#D4AF37]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }

        html {
          scroll-behavior: smooth;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #050B1A;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.3);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.5);
        }

        /* Selection Color */
        ::selection {
          background: rgba(212, 175, 55, 0.3);
          color: white;
        }
      `}</style>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050B1A] text-white overflow-x-hidden">
        {/* Navigation */}
        <Navigation />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sample-1" element={<Sample1 />} />
          <Route path="/sample-2" element={<Sample2 />} />
          <Route path="/sample-3" element={<Sample3 />} />
          <Route path="/sample-4" element={<Sample4 />} />
          <Route path="/sample-5" element={<Sample5 />} />
          <Route path="/sample-6" element={<Sample6 />} />
          <Route path="/sample-7" element={<Sample7 />} />
          <Route path="/sample-8" element={<Sample8 />} />
          <Route path="/sample-9" element={<Sample9 />} />
          <Route path="/sample-10" element={<Sample10 />} />
          <Route path="/sample-11" element={<Sample11 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
