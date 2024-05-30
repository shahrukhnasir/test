import React from 'react'
import MyFavList from './MyFavList'
import SideBarMenu from '../../Layout/SideBarMenu/SideBarMenu'

const MyFavoritesList = () => {
    return (
        <>

            <SideBarMenu content={<MyFavList />} />

        </>
    )
}

export default MyFavoritesList