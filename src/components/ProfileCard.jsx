import React from 'react';
import { Mail, Linkedin, Github, User } from 'lucide-react';

export default function ProfileCard({ name, year, imageUrl, email, linkedin, github }) {
  return (
    <div className="relative w-[260px] h-[300px]">
      {/* Outer glowing border */}
      <div className="absolute inset-0 rounded-2xl blur-md" style={{ background: 'linear-gradient(to bottom right, var(--yellow-shadow), var(--yellow-border-soft), var(--surface-black))' }}></div>
      
      {/* Inner card */}
      <div className="relative rounded-2xl overflow-hidden h-full" style={{ background: 'linear-gradient(to bottom right, var(--black), var(--surface-black), var(--dark-black))', borderWidth: '2px', borderStyle: 'solid', borderColor: 'var(--yellow-primary)', boxShadow: '0 0 6px var(--yellow-shadow)', backdropFilter: 'blur(4px)' }}>
        
        {/* Image section */}
        <div className="relative h-[180px] flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), var(--dark-black))', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'var(--yellow-border-soft)' }}>
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                const yellowPrimary = getComputedStyle(document.documentElement).getPropertyValue('--yellow-primary').trim();
                e.target.parentElement.innerHTML = `<div class="flex items-center justify-center w-full h-full"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="${yellowPrimary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg></div>`;
              }}
            />
          ) : (
            <User className="h-16 w-16" style={{ color: 'var(--yellow-primary)' }} />
          )}
        </div>

        {/* Info section */}
        <div className="relative h-[120px]" style={{ background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), var(--dark-black))' }}>
          {/* Angled line */}
          <svg className="absolute top-0 left-0 w-full" height="40" viewBox="0 0 280 40" preserveAspectRatio="none">
            {/* Top horizontal line on the right */}
            <line x1="110" y1="7" x2="280" y2="7" stroke="var(--yellow-primary)" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            {/* Angled line going upward */}
            <line x1="75" y1="33" x2="110" y2="7" stroke="var(--yellow-hover)" strokeWidth="1" opacity="0.35">
              <animate attributeName="opacity" values="0.35;0.55;0.35" dur="2s" repeatCount="indefinite"/>
            </line>
            {/* Bottom horizontal line on the left */}
            <line x1="0" y1="33" x2="75" y2="33" stroke="var(--yellow-primary)" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            {/* Bottom horizontal line across the full width */}
            <line x1="0" y1="40" x2="280" y2="40" stroke="var(--yellow-soft)" strokeWidth="1" opacity="0.25">
              <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
          </svg>

          {/* Icons */}
          <div className="absolute top-[13px] left-[110px] right-4 flex items-center justify-around px-2">
            <a href={`mailto:${email}`} className="transition-all hover:scale-110" style={{ color: 'var(--yellow-primary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--yellow-hover)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--yellow-primary)'}>
              <Mail className="h-5 w-5" />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-110" style={{ color: 'var(--yellow-primary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--yellow-hover)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--yellow-primary)'}>
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-110" style={{ color: 'var(--yellow-primary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--yellow-hover)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--yellow-primary)'}>
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Text */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-medium mb-1 tracking-wider uppercase" style={{ color: 'var(--yellow-primary)' }}>{year}</p>
            <h2 className="text-lg font-bold tracking-wide" style={{ color: 'var(--yellow-hover)' }}>{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
