import React from 'react'
import ChromaGrid from './components/projectsCard'

const Projects = () => {
  return (
    <div className='my-4'>
        <div>
          <h1 className="text-5xl fade-in-top text-center mt-24 mb-4">My Projects</h1>
          <ChromaGrid />
        </div>
        {/* <SimpleImageCarousel/> */}
    </div>
  )
}

export default Projects
