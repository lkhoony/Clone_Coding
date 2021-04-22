import React from 'react';
import '../css/Contents.css';

class Contents extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
        // this.xPosition = this.props.x;
    }

    render() {
        
        return(
            <li>
                <a href="#" className="sub_link">
                    <div className="img_box">
                        <img src={this.props.imgUrl}></img>
                    </div>
                </a>
                <div className="info">
                    <a href="#" className="category_link">{this.props.link}</a>
                    <a href="#" className="title">{this.props.title}</a>
                </div>
            </li>
        );
    }
}

export default Contents;