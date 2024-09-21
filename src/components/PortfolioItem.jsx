import React, { useState } from 'react';

function PortfolioItem({ title, imgUrl, stack, link, description }) {
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      <div className="border-2 border-stone-900 gradient-text dark:border-white rounded-md overflow-hidden">
         <img
            src={imgUrl}
            alt="portfolio" 
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
         />
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
               {stack.map((item, index) => (
                  <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
               ))}
            </p>
            {isExpanded && (
               <div className="mt-4">
                  <p className="text-sm dark:text-white mb-2">{description}</p>
                  {link && (
                     <a 
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                     >
                        View Project
                     </a>
                  )}
               </div>
            )}
         </div>
      </div>
   )
}

export default PortfolioItem;