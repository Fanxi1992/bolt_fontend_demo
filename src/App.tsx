import React from 'react';
import { ArrowRight, Code2, Zap, Shield, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">
            Build Something Amazing
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Create stunning applications with our powerful platform. Fast, secure, and scalable solutions for modern developers.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-all">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-800/70 transition-all">
            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
            <p className="text-slate-400">
              Optimized performance that keeps your applications running at peak efficiency.
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-800/70 transition-all">
            <div className="bg-emerald-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Secure by Default</h3>
            <p className="text-slate-400">
              Enterprise-grade security with advanced encryption and protection.
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-800/70 transition-all">
            <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Code2 className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Developer First</h3>
            <p className="text-slate-400">
              Built by developers, for developers. Intuitive APIs and comprehensive documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-12">
            <Users className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Trusted by Thousands</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-slate-800/30 p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=150&h=150&fit=crop`}
                    alt="User"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <p className="text-slate-300 mb-4">
                  "This platform has transformed how we build and deploy applications."
                </p>
                <p className="text-slate-400 text-sm">
                  - John Doe, Tech Lead
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-500">
            <p>© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;