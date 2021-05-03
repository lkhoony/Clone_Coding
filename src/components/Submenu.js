import React from 'react';
import '../css/Submenu.css';
import { Link, useRouteMatch } from 'react-router-dom';

class Submenu extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        
        const items = this.props.items;
        // const { path, url } = useRouteMatch();

        const itemList = items.map(
            (item) => 
                <li className="submenu_item active" 
                    key={item.id}>

                    <Link className="submenu_link" to={this.props.url + "/" + item.id}>
                        <span>{item.title}</span>
                    </Link>
                </li>
        );

        return(
            <ul className="gnb_submenu" onMouseLeave = {this.props.mouseLeave}>
                {itemList}
            </ul>
        );

    }
}

export default Submenu;