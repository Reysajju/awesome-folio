import React from 'react';
import { Code2, Globe, Layout, Linkedin, Mail, ShoppingBag, Github, ArrowDown } from 'lucide-react';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Sajjad Rasool
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Web Designer & Developer
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">WordPress</span>
            <span className="px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">Shopify</span>
            <span className="px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">Web Design</span>
          </div>
          <ArrowDown className="w-6 h-6 mx-auto animate-bounce text-blue-400" />
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all">
              <Layout className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Web Design</h3>
              <p className="text-gray-400">Creating beautiful, responsive, and user-friendly websites that leave a lasting impression.</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all">
              <Code2 className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">WordPress Development</h3>
              <p className="text-gray-400">Building custom WordPress solutions with powerful functionality and seamless user experience.</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all">
              <ShoppingBag className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Shopify Development</h3>
              <p className="text-gray-400">Creating high-converting e-commerce stores with custom Shopify themes and functionality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Project 1"
                className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                  <p className="text-gray-300">Custom Shopify development</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80"
                alt="Project 2"
                className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Corporate Website</h3>
                  <p className="text-gray-300">WordPress development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Client Testimonials</h2>
          <Testimonials />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Let's Work Together</h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;