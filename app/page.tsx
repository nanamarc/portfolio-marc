import React from 'react';
import { ModernNavbar, ScrollProgress } from '@/components/layout/modern-navbar';
import { ModernHero } from '@/components/sections/modern-hero';
import { ModernAbout } from '@/components/sections/modern-about';
import { ModernProjects } from '@/components/sections/modern-projects';
import { ModernServices } from '@/components/sections/modern-services';
import { ModernSkills } from '@/components/sections/modern-skills';
import { ModernContact } from '@/components/sections/modern-contact';
import { ModernFooter } from '@/components/sections/modern-footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <ModernNavbar />
      <ScrollProgress />
      
      {/* Main Content */}
      <main>
        <ModernHero />
        <ModernAbout />
        <ModernProjects />
        <ModernServices />
        <ModernSkills />
        <ModernContact />
      </main>
      
      {/* Footer */}
      <ModernFooter />
    </div>
  );
}