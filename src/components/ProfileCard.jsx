import React from 'react';
import { Mail, Linkedin, Github, User } from 'lucide-react';

export default function ProfileCard({ name, year, imageUrl, email, linkedin, github }) {
  return (
    <div className="relative w-[260px] h-[300px]">
      {/* Outer glowing border */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-800/30 via-teal-900/30 to-slate-900/30 rounded-2xl blur-md"></div>
      
      {/* Inner card */}
      <div className="relative bg-linear-to-br from-gray-950 via-slate-950 to-gray-950 border-2 border-teal-800 shadow-[0_0_6px_rgba(17,94,89,0.3)] backdrop-blur-sm rounded-2xl overflow-hidden h-full">
        
        {/* Image section */}
        <div className="relative h-[180px] bg-linear-to-br from-black/60 to-slate-900/40 flex items-center justify-center border-b border-cyan-400/20">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400/70"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg></div>';
              }}
            />
          ) : (
            <User className="h-16 w-16 text-cyan-400/70" />
          )}
        </div>

        {/* Info section */}
        <div className="relative h-[120px] bg-linear-to-br from-black/60 to-slate-900/40">
          {/* Angled line */}
          <svg className="absolute top-0 left-0 w-full" height="40" viewBox="0 0 280 40" preserveAspectRatio="none">
            {/* Top horizontal line on the right */}
            <line x1="110" y1="7" x2="280" y2="7" stroke="#22d3ee" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            {/* Angled line going upward */}
            <line x1="75" y1="33" x2="110" y2="7" stroke="#06b6d4" strokeWidth="1" opacity="0.35">
              <animate attributeName="opacity" values="0.35;0.55;0.35" dur="2s" repeatCount="indefinite"/>
            </line>
            {/* Bottom horizontal line on the left */}
            <line x1="0" y1="33" x2="75" y2="33" stroke="#22d3ee" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            {/* Bottom horizontal line across the full width */}
            <line x1="0" y1="40" x2="280" y2="40" stroke="#0ea5e9" strokeWidth="1" opacity="0.25">
              <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
          </svg>

          {/* Icons */}
          <div className="absolute top-[13px] left-[110px] right-4 flex items-center justify-around px-2">
            <a href={`mailto:${email}`} className="hover:text-cyan-300 text-cyan-400/90 transition-all hover:scale-110">
              <Mail className="h-5 w-5" />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 text-cyan-400/90 transition-all hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 text-cyan-400/90 transition-all hover:scale-110">
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Text */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-medium text-cyan-400 mb-1 tracking-wider uppercase">{year}</p>
            <h2 className="text-lg font-bold text-cyan-300 tracking-wide">{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
