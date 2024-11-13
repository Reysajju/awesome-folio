import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'Sajjad transformed our online presence with an exceptional website that perfectly captures our brand identity.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, EcoStore',
    content: 'The Shopify store Sajjad built for us increased our conversion rate by 150%. Incredible work!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Emily Roberts',
    role: 'Marketing Director, Bloom',
    content: 'Working with Sajjad was a pleasure. His attention to detail and technical expertise are unmatched.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 relative">
          <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-400/20" />
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full mb-4 object-cover"
          />
          <p className="text-gray-300 mb-4">{testimonial.content}</p>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}