import React, { useState } from 'react'
import EducationCard from './EducationCard'
import ProjectsCard from './ProjectsCard'
import ExperienceCard from './ExperienceCard'
import SkillCard from './SkillCard'

export default function Resume() {
  const [education, setEducation] = useState(true)
  const [skills, setSkills] = useState(false)
  const [project, setProjects] = useState(false)
  const [experience, setExperience] = useState(false)


  return (
    <section id='resume' className='w-full   py-16 '  >
      <h1 className='flex justify-center items-center text-5xl text-pink-700 font-semibold'>My Resume</h1>

      <div className=' h-[900px]  lg:flex xl:flex   p-2'>

        <div className='lg:w-1/3  p-2 container mx-auto '>
          <ul className=' flex flex-wrap ml-28 md:block lg:space-y-3 lg:block lg:mt-14 items-center gap-3 lg:ml-24   ' >
            <li
              onClick={() =>
                setEducation(true) &
                setSkills(false) &
                setExperience(false) &
                setProjects(false)
              }
              
              className="ResumeButton">
              Education
            </li>
            <li
              onClick={() =>
                setEducation(false) &
                setSkills(true) &
                setExperience(false) &
                setProjects(false)
              }
              className='ResumeButton '>
              skills
            </li>
            <li
              onClick={() =>
                setEducation(false) &
                setSkills(false) &
                setExperience(true) &
                setProjects(false)
              }
              className='ResumeButton '>
              Experience
            </li>
            <li
              onClick={() =>
                setEducation(false) &
                setSkills(false) &
                setExperience(false) &
                setProjects(true)
              }
              className='ResumeButton'>
              Projects
            </li>
          </ul>
        </div>


        <div className='  text-white lg:w-2/3  h-[500px] px-20 flex  justify-center items-center '>
          <div className='w-[550px] h-[400px] '>
            {education && <EducationCard />}
            {project && <ProjectsCard />}
            {skills && <SkillCard />}
            {experience && <ExperienceCard />}
          </div>
        </div>



      </div>

    </section>
  )

}