import React from 'react'
import SideBarMenu from '../../Layout/SideBarMenu/SideBarMenu';
import ContentBar from '../../Layout/Content/ContentBar';


const HomePage = () => {
    return (
        <>

            <SideBarMenu content={<ContentBar />} />
        </>
    )
}

export default HomePage