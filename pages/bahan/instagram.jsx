import React from 'react'
import Image1 from '../../public/ig-img-1.jpeg'
import Image2 from '../../public/ig-img-2.jpeg'
import Image3 from '../../public/ig-img-3.jpeg'
import Image4 from '../../public/ig-img-4.jpeg'
import Image5 from '../../public/ig-img-5.jpeg'
import Image6 from '../../public/ig-img-6.jpeg'
import InstagramImg from './instagramImg'

const instagram = () => {
    return (
        <div className='max-w-[1240px] mx-auto text-center py-24'>
            <h2 className='text-4xl font-bold'>My Instagram</h2>
            <p className='pb-4'>@a.jann26</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <InstagramImg socialImg={Image1}/>
                <InstagramImg socialImg={Image2}/>
                <InstagramImg socialImg={Image3}/>
                <InstagramImg socialImg={Image4}/>
                <InstagramImg socialImg={Image5}/>
                <InstagramImg socialImg={Image6}/>
            </div>
        </div>
    )
}

export default instagram