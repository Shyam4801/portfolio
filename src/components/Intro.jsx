import React from 'react';

function Intro() {
   return (
      // <section class="banner" id="home">
      //   <div class="banner-content">
      //       <h1 class="gradient-text">Welcome to My Portfolio</h1>
      //   </div>
      // </section>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl gradient-text dark:text-white mb-1 md:mb-3 font-bold">Shyam Sundar</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Machine learning Software Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm an experienced ML software developer experienced in developing and deploying production ready ML 
            solutions on low compute Edge platforms. I specialize in Optimization with an inclination to Operations research problems.
         </p>
      </div>
      
      )
}

export default Intro;