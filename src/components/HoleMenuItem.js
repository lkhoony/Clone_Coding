import React, {useState} from 'react';

const HoleMenuItem = (props) => {

    const submenu = props.submenu.map(
        (submenu, index) => <li key={index}><a href="">{submenu}</a></li>
    );
    
    return(
        <div className="hole_menu_inner_item">
            <dl>
                <dt>{props.title}</dt>
                <dd>
                    <ul>
                        {submenu}
                    </ul>
                </dd>
            </dl>
        </div>
    )
}

export default HoleMenuItem;