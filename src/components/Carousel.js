import React, {Component} from 'react'
import { Carousel } from 'antd';

import '../css/Carousel.css';

/*
https://image.hanatour.com/usr/manual/md/2021/04/PL00112650/pc_mb.jpg
https://image.hanatour.com/usr/manual/md/2021/04/PL00112656/pc_mb.jpg
https://image.hanatour.com/usr/manual/md/2021/03/PL00112640/PL00112640.jpg
https://image.hanatour.com/usr/manual/md/2021/04/PL00112655/PL00112655.jpg
*/
class Crousel extends Component {

    constructor(props){
        super(props);
        this.state={
            imgs : [
                {id : 0, url : '../../images/FirstSlideImage.jpg'},
                {id : 1, url : 'https://image.hanatour.com/usr/manual/md/2021/04/PL00112650/pc_mb.jpg'},
                {id : 2, url : 'https://image.hanatour.com/usr/manual/md/2021/04/PL00112656/pc_mb.jpg'},
                {id : 3, url : 'https://image.hanatour.com/usr/manual/md/2021/03/PL00112640/PL00112640.jpg'},
                {id : 4, url : 'https://image.hanatour.com/usr/manual/md/2021/04/PL00112655/PL00112655.jpg'}
            ]
        }
    }
    render() {

        const contentStyle = {
            // width : '200px',
            height: '400px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };

        const imgs = this.state.imgs;
        const imgSlide = imgs.map(
            img => (
                <div key={img.id}>
                    <h3 style={{...contentStyle, backgroundImage : 'url(' + img.url + ')'}}></h3>
                </div>
            )
        );

        return(

            <div className="carouselWrap">

                <Carousel>
                    {imgSlide}
                </Carousel>
            </div>
        );
    }
}

export default Crousel;