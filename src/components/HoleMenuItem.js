import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const HoleMenuItem = (props) => {

    const submenu = props.submenu.map(
        (submenu) => <li key={submenu.id}><a href={props.url + "/" + submenu.id}>{submenu.title}</a></li>
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