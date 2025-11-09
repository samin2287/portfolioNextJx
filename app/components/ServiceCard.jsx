import React from 'react'
const ServiceCard = ({Icon,title,description}) => {
  return (

  

    <div className="flex flex-col items-center bg-gray-800 p-6 md:p-8 lg:p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
     
      {Icon && <Icon className="text-amber-600 text-4xl md:text-7xl lg:text-8xl font-bold" />}

      <h2 className="text-amber-600 text-2xl md:text-3xl lg:text-4xl font-bold py-4 md:py-5">
        {title}
      </h2>

      <p className="text-gray-400 text-center text-sm md:text-base leading-6">
        {description}
      </p>
    </div>
     
  )
}

export default ServiceCard
