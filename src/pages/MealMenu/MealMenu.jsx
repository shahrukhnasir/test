import React from 'react'
import SideBarMenu from '../../Layout/SideBarMenu/SideBarMenu'
import MealCategory from './MealCategory'

const MealMenu = () => {
    return (
        <SideBarMenu  content={<MealCategory/>}/>
    )
}

export default MealMenu