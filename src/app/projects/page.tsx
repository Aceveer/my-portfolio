import React from 'react'
import ChromaGrid from './components/projectsCard'
import { PageHeader } from '@/components/ui/pageHeader'

const Projects = () => {
  return (
    <div
      className="min-h-screen bg-[#020024] bg-tech-grid"
      style={{ background: 'var(--gradient-brand)' }}
    >
      <PageHeader
        eyebrow="Things I've built"
        title="My Projects"
        intro="Ten projects spanning full-stack web, fintech dashboards and machine learning. Hover to focus, click to open."
      />
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <ChromaGrid />
      </div>
    </div>
  )
}

export default Projects
