import React from 'react'
import Typewriter from 'typewriter-effect'

const Hero = ({judul, message}) => {
    const strings = [
        'Welcome to my blog.',
        'Disini anda bisa menemukan beberapa foto yang indah.',
        'Selamat melihat-lihat.',
    ];

    return (
        <div id='home' className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover costum-img'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
            <div className='p-5 text-white z-[2] mt-[-10rem] '>
                <h2 className='text-5xl font-bold'>{judul}</h2>
                <div className="py-5 text-xl">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString(strings[0])
                            .pauseFor(2000)
                            .deleteAll()
                            .pauseFor(2000)
                            .typeString(strings[1])
                            .pauseFor(2000)
                            .deleteAll()
                            .pauseFor(2000)
                            .typeString(strings[2])
                            .pauseFor(2000)
                            .deleteAll()
                            .pauseFor(2000)
                            .start();
                        }}
                    />
                </div>
                <button className="px-8 py-2 border costum-button">Deskripsi</button>
            </div>
        </div>
    )
}

export default Hero