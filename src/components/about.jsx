import React from 'react';
import Navbar2 from './navbar2';

const About = () => {
  return (
    <div className='container mx-auto p-4'>
      <Navbar2 />
      <div className="mx-auto mt-8 border-2 border-black p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-6 border-b-2 border-black border-dashed pb-4">
          About Blume
        </h1>
        
        <div className="text-black">
          <li className="mb-4">
            Welcome to Blume, your ultimate destination for stunning images and artistic inspiration! We are dedicated to curating a diverse collection of high-quality photos that cater to a variety of creative needs, whether you're looking for imagery for a project, a presentation, or simply seeking visual delight.
          </li>

          <li className="mb-4">
            At Blume, we believe in the power of visuals to tell stories and evoke emotions. Our mission is to provide a platform where photographers and artists can showcase their work, allowing you to discover new perspectives and creative ideas. We strive to connect art enthusiasts with breathtaking images that inspire and captivate.
          </li>

          <li className="mb-4">
            We value your input and continuously seek to enhance our platform. If you have any feedback or suggestions, please don't hesitate to reach out via our contact page. Your insights help us improve and grow as a community.
          </li>
        </div>
        
        <div className="border-t-2 border-black pt-4 mt-6 border-dashed">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="mb-4">
            To be a leading platform that empowers individuals to explore and express their creativity through stunning imagery.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Creativity: We celebrate artistic expression and encourage creativity in all forms.</li>
            <li>Community: We foster a welcoming environment for artists and art lovers alike to connect and share.</li>
            <li>Quality: We prioritize providing a curated selection of high-quality images to enrich your creative projects.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
