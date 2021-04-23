import React from 'react';
import '../css/Footer.css';
import Sns from './Sns.js';

class Footer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            snss : [
                {   
                    id : 0,
                    name : 'facebook',
                    url : 'https://www.facebook.com/HanaTour.fb',
                    img : 'https://image.hanatour.com/usr/static/img/pc/com/facebook.png'
                },
                {
                    id : 1,
                    name : 'instagram',
                    url : 'https://www.instagram.com/hanatour_official',
                    img : 'https://image.hanatour.com/usr/static/img/pc/com/instagram.png'
                },
                {
                    id : 2,
                    name : 'blog',
                    url : 'http://blog.hanatour.com/',
                    img : 'https://image.hanatour.com/usr/static/img/pc/com/naverblog.png'
                }
            ]
        }
    }

    render() {
        
        const snss = this.state.snss;
        const snsList = snss.map(
            (sns) => 
                <Sns 
                  key={sns.id} 
                  url={sns.url} 
                  img={sns.img}>
                </Sns>
            
        );

        return(
            <footer id="footer">
                <div className="sns_wrap">
                    {snsList}
                </div>
                <p className="copyright">Copyright © 2021 lkhoony.Ltd. All rights reserved.</p>
                <address className="address">Contact webmaster for more information. 070-1234-5678</address>
            </footer>
        );
    }
}

export default Footer