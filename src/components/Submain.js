import React, { Component } from 'react';
import {Form, Carousel} from '.';

import '../css/Submain.css';

class Submain extends Component{

    render() {

        return(
            <div className="submain">
                <Form></Form>
                <Carousel></Carousel>
            </div>
        );
    }
}

export default Submain;