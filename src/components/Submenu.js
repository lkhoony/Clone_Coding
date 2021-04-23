import React from 'react';
import '../css/Submenu.css';

class Submenu extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        
        const items = this.props.items;
        const itemList = items.map(
            (item, index) => 
                <li className="submenu_item active" 
                    key={index}>
                    <a href="" className="submenu_link">
                        <span>{item}</span>
                    </a>
                </li>
        );

        return(
            <ul className="gnb_submenu">
                {itemList}
            </ul>
        );

    }
}

export default Submenu;