import React from 'react';
import { PageHero } from '../components/PageHero';
import { FAQ } from '../components/FAQ';
import { StatGrid } from '../components/StatGrid';
import { SectionHeading } from '../components/SectionHeading';
import { team, stats, faqs, destinations } from '../data/siteData';
import { useSeo } from '../hooks/useSeo';

const About = () => {
  useSeo('About Voyara Travel', 'Learn about Voyara Travel, our mission, values, and premium travel philosophy.');

  return (
    <div className="pb-24">
      <PageHero
        eyebrow="About"
        title="A travel company built around taste, trust, and thoughtful service"
        description="Voyara Travel is a fictional premium agency concept designed to feel modern, mature, and quietly confident."
        image={destinations[2].image}
      />

      <section className="shell mt-12 space-y-10">
        <StatGrid stats={stats} />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading eyebrow="Our Story" title="Why Voyara exists" description="To make premium travel planning feel clear, human, and visually refined." />
            <p className="mt-6 text-sm leading-7 text-slate-300">
              Voyara exists as a frontend case study for a company that treats travel as an experience worth designing carefully. The brand balances luxury and practicality, with a visual system that feels calm rather than flashy.
            </p>
          </div>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading eyebrow="Our Mission" title="Better journeys through better planning" description="Every interaction should feel dependable, accessible, and easy to scan." />
            <p className="mt-6 text-sm leading-7 text-slate-300">
              The site architecture emphasizes reusable components, content-driven layouts, and responsive detail pages that could support a real commercial travel brand.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading eyebrow="Our Values" title="Design, trust, and service standards" description="The brand language is intentionally premium and composed." />
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <li>Premium, but not overdesigned.</li>
              <li>Useful, but still emotionally engaging.</li>
              <li>Responsive, accessible, and built for real frontend workflows.</li>
            </ul>
          </div>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading eyebrow="Team" title="A small group with a consistent service mindset" description="Sample team members help the page feel like a real company profile." />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {team.map((member) => (
                <div key={member.name} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-lg font-semibold text-white">{member.name}</p>
                  <p className="mt-2 text-sm text-slate-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="faq" className="surface-strong rounded-[2rem] p-6 lg:p-8">
          <SectionHeading eyebrow="FAQ" title="Common questions" description="These answers are demo content for the frontend experience." />
          <div className="mt-8">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
