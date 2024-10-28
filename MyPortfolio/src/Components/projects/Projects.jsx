import React from 'react'
import projectTwo from '../../assets/images/projects/projectTwo.jpg'
// import projectThree from '../../assets/images/projects/projectThree.jpeg'
import desktop from '../../assets/images/projects/desktop.png'
import Calculator from '../../assets/images/projects/Calculator.png'
import operator from '../../assets/images/projects/operator.png'
import www from '../../assets/images/projects/www.jpg'
import quiz from '../../assets/images/projects/quiz.jpg'



import ProjectsCards from './ProjectsCards'


export default function Projects() {
    return (

        <section
            id='projects'
            className='w-full py-10 h-auto' >

            <div>
                <h1 className='text-white text-xl'>Visit my portfolio and keep your feedback </h1>
            </div>

            <div className='flex justify-center items-center mb-5 '>
                <h1 className='text-5xl capitalize text-pink-600 font-bold '>Projects</h1>
            </div>

            {/* <div className='grid grid-cols-3 gap-5 '> */}
            <div className='md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 gap-5 '>
                <ProjectsCards
                    title="Donation App"
                    des="Built a Donation website for islamia college university in React js and Tailwind css in which can donate money from every where"
                    src={operator}
                />

                <ProjectsCards
                    title="Weather App"
                    des="Develop a Weather App using React js which provide a real-time weather information and forcast in the world to every where."
                    src={www}
                />


                <ProjectsCards
                    title="Calculator App"
                    des="Built Calculator App which do Addtion Subtraction Multiplication and Division correctly and easily"
                    src={Calculator}
                />

                <ProjectsCards
                    title="Quiz App"
                    des=" I Built A quiz app is a type of mobile application that allows users to test their knowledge, learn new facts, or have fun with trivia questions. Quiz apps are popular for many reasons"
                    src={quiz}
                />
                <ProjectsCards
                    title="Todo App"
                    des="I always make intermediate level Todo App with the help of React js and tailwind css....Todo App is very tricky and very helpfull for intermediate level developers beacuse in Todo app use statemangement "
                    src={projectTwo}
                />
                <ProjectsCards

                    title="Facebook Clone"
                    des="I built a Facebook clone where we search any thing just like real facebook through the help of React js and Tailwind css exactly . The Facebook Clone which i build in fully responsive  "
                    src={desktop}
                />

            </div>
        </section>
    )
}