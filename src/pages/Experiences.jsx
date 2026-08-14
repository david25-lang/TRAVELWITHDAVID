import React from 'react';
import { ExperienceCard } from '../components/ExperienceCard';
import { PageHero } from '../components/PageHero';
import { experiences, destinations } from '../data/siteData';
import { useSeo } from '../hooks/useSeo';

const Experiences = () => {
  useSeo('Experiences | Voyara Travel', 'Browse editorial travel experience cards for safari, resorts, culture, mountains, and islands.');

  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Experiences"
        title="Different ways to travel, presented with editorial balance"
        description="Use this section to explore the travel styles that sit beneath the destination and tour catalog."
        image={destinations[4].image}
      />

      <section className="shell mt-12 grid gap-6 lg:grid-cols-3 lg:auto-rows-[260px]">
        {experiences.map((experience, index) => (
          <div key={experience.slug} className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}>
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experiences;
