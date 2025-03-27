import Main from '@/components/main';
import Link from 'next/link';
import React from 'react'

const Home = () => {
    const link_card = [
        {
            image: '🧑‍🎓',
            title: 'Student',
            link: '/login/student'
        },
        {
            image: '🏫',
            title: 'Faculty',
            link: '/login/teacher'
        },
    ];

    return (
        <Main>
            <div className="flex flex-col justify-center items-center text-center gap-5 px-4">
                <h1 className="text-2xl font-bold text-black bg-white/20 backdrop-blur-md px-4 py-2 rounded-md">
                    Welcome to Brainware University Portal
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
                    {
                        link_card.map((item, index) => (
                            <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-md shadow-lg w-72 flex flex-col items-center gap-4">
                                <div className="w-20 h-20 rounded-full bg-gray-300 flex justify-center items-center text-4xl font-bold text-gray-700">
                                    {item.image}
                                </div>
                                <h2 className="text-xl font-bold text-black">
                                    {item.title}
                                </h2>
                                <Link href={item.link} className="px-5 w-full py-2 bg-blue-500 text-white font-bold rounded-full transition-transform hover:scale-105 duration-200 ease-in-out">
                                    {item.title}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Main>
    )
}

export default Home