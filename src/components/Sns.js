import React, {Component} from 'react';
import '../css/Sns.css';

class Sns extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="sns">
                <a href={this.props.url} onClick={()=>console.log('hi')}> 
                    <img src={this.props.img}></img>
                </a>
            </div>
        );
    }
}

export default Sns;