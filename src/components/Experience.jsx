import React from 'react';
import experienceJson from '../data/experience';

const Experience = () => {

    /*const exData = [
        {
            "id": 1,
            "name": "HTML",
            "style": "shadow-orange-500",
            "image": "html.png"
        },
        {
            "id": 2,
            "name": "CSS",
            "style": "shadow-blue-500",
            "image": "css.png"
        },
        {
            "id": 3,
            "name": "JavaScript",
            "style": "shadow-yellow-500",
            "image": "javascript.png"
        },
        {
            "id": 4,
            "name": "React Js",
            "style": "shadow-cyan-500",
            "image": "react.png"
        },
        {
            "id": 5,
            "name": "Node Js",
            "style": "shadow-green-400",
            "image": "node.png"
        },
        {
            "id": 6,
            "name": "Graph Ql",
            "style": "shadow-pink-400",
            "image": "graphql.png"
        },
        {
            "id": 7,
            "name": "GitHub",
            "style": "shadow-gray-400",
            "image": "github.png"
        },
        {
            "id": 8,
            "name": "Tailwind",
            "style": "shadow-sky-500",
            "image": "tailwind.png"
        },
        {
            "id": 9,
            "name": "Git",
            "style": "shadow-red-500",
            "image": "git.png"
        }
    ];*/

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">

            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6 text-gray-500">These are technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        experienceJson.map((experience) => {
                            const {id, name, image, style} = experience;
                            return (
                                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                    <img src={require(`../assets/${image}`)} className="w-20 mx-auto" alt={name} />
                                    <p className="mt-4">{name}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Experience;