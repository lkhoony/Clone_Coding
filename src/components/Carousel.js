import React, {Component} from 'react'
import { Carousel } from 'antd';

class Crousel extends Component {

    render() {

        const contentStyle = {
            // width : '200px',
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79'
        };

        const onChange = function(a,b,c){
            console.log(a,b,c);
        }

        return(

            <div className="carouselWrap">

                <Carousel afterChange={onChange}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Crousel;