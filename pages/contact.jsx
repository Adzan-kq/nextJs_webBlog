import React from 'react'
import Hero from './bahan/Hero';
import Contact from './bahan/Contact';

const contact = () => {
  return (
    <div>
      <Hero judul="Ini halaman Contact" message="Describe Here"/>
      <Contact/>
    </div>
  )
}

export default contact