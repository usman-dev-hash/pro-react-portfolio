import React from "react";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>

                <p className="text-xl mt-20">
                    ~ 4 years experience in the field of web development.
                    I've a clear logical mind with a practical approach to problem solving.
                    I enjoy working on my own initiative or in a team.
                    I'm not a language or technology restricted programmer as i used to analyze the problem and choose a technology accordingly to solve that problem.
                    I've worked on a lot of open source technologies/languages.
                </p>

                <br />

                <p className="text-xl">
                    <span className="text-gray-500">Click the button to see skills/stack I've acquired so far</span>
                    <Link to="experience" smooth={true} duration={500} className="group text-white w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Skills
                        <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default About