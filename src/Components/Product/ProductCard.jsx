import React from 'react'

const ProductCard = ({ img, title, desc, price, stock,onClick,href }) => {
  return (
    <>


      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5" onClick={onClick}>
        <a href={href}>
          <img className="rounded-t-lg" src={img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Price: {price}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Stock: {stock}</p>
          <a href={href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" > 
            Read more
            
            
          </a>
        </div>
      </div>
    </>
  )
}

export default ProductCard