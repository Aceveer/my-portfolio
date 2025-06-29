"use client";

import React from 'react'
import { TabsDemo } from './components/tabs'
import { AnimatedTestimonialsDemo } from './components/clients'
import { FocusCardsDemo } from './components/focusCards';

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4"
        style={{
        background: 'linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(2, 0, 36, 1) 100%)'
      }}>
        <h1 className="text-5xl fade-in-top text-center mt-24">My Experience</h1>
        <TabsDemo />
          <h2 className="text-5xl text-center fade-in-top">
            Awards and Certifications
          </h2>
        <FocusCardsDemo/>
        <h2 className="text-5xl text-center fade-in-top mt-8">
            Clients
          </h2>
        <AnimatedTestimonialsDemo/>
    </div>

  )
}

export default Experience
