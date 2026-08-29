"use client";

import React from 'react'
import { TabsDemo } from './components/tabs'
import { AnimatedTestimonialsDemo } from './components/clients'
import { FocusCardsDemo } from './components/focusCards';
import { PageHeader, SectionHeading } from '@/components/ui/pageHeader';

const Experience = () => {
  return (
    <div
      className="min-h-screen bg-[#020024]"
      style={{ background: 'var(--gradient-brand)' }}
    >
      <PageHeader
        eyebrow="Where I've worked"
        title="My Experience"
        intro="Four years across fintech, healthcare and consulting, plus the study and volunteering along the way."
      />

      <TabsDemo />

      <section className="bg-[#020024]/40 bg-tech-grid py-20">
        <SectionHeading title="Awards and certifications" />
        <FocusCardsDemo />
      </section>

      <section className="py-20">
        <SectionHeading title="Clients" className="mb-4" />
        <AnimatedTestimonialsDemo />
      </section>
    </div>
  )
}

export default Experience
