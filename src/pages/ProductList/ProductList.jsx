import React from 'react'
import SideBarMenu from '../../Layout/SideBarMenu/SideBarMenu'
import ProductListing from './poductListing'

const ProductList = () => {
  return (
    <>       

    
            <SideBarMenu  content={<ProductListing/>}/>

    </>
  )
}

export default ProductList