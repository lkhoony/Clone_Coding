import React, { useState } from 'react';
import { HoleMenuItem } from '.'

const HoleMenu = (props) => {
    
    const menuList = props.menuList.map(
        (menu) => <HoleMenuItem title={menu.title} submenu={menu.submenu} key={menu.id}></HoleMenuItem>
    );

    return(
        
        <div className="hole_menu_wrap">
            <div className="hole_menu_inner"> 
                {/* <!-- 전체메뉴 inner --> */}
                {menuList}
                {/* <HoleMenuItem title={props.title} submenu={props.submenu}></HoleMenuItem> */}
                {/* <!-- 전체메뉴 inner --> */}
            </div>
        </div>
    );
};

export default HoleMenu;