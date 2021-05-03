import React from 'react';
import Contents from './Contents.js';
import action from '../redux/actions';
import {connect} from 'react-redux';

import '../css/Section.css'

class Section extends React.Component {

    constructor(props){

        super(props);
        this.state={
            contents : [
                { id : 0, link : '패키지0', title : '울릉도 3일 #대아리조트#매일출발#왕복셔틀#육로일주관광(관음도,삼선암 경유)#B코스포함#강릉항출발', imgUrl : 'https://image.hanatour.com/usr/cms/resize/400_0/2020/12/02/10000/d02c449d-4744-4658-aeee-3b8be99a74a6.jpg'},
                { id : 1, link : '패키지1', title : '[에어카텔]제주3일 - 소노벨 리조트', imgUrl : 'https://image.hanatour.com/usr/cms/resize/400_0/2020/09/22/10000/2417fe10-e082-4589-9110-11733a85a358.jpg'},
                { id : 2, link : '패키지2', title : '[에어카텔]제주3일 - 소노벨 리조트', imgUrl : 'https://image.hanatour.com/usr/cms/resize/400_0/2016/11/03/10000/7fc5d7c9-ae2d-4c2a-83ed-69c500928a7d.jpg'},
                { id : 3, link : '패키지3', title : '[에어카텔]제주3일 - 소노벨 리조트', imgUrl : 'https://image.hanatour.com/usr/cms/resize/400_0/2020/12/02/10000/d02c449d-4744-4658-aeee-3b8be99a74a6.jpg'},
                { id : 4, link : '패키지4', title : '[에어카텔]제주3일 - 소노벨 리조트', imgUrl : 'https://image.hanatour.com/usr/cms/resize/400_0/2020/12/02/80000/5c011643-7dce-4120-9d32-c7f069948fc8.jpg'},
                { id : 5, link : '패키지5', title : '울릉도 3일 #대아리조트#매일출발#왕복셔틀#육로일주관광(관음도,삼선암 경유)#B코스포함#강릉항출발', imgUrl : 'https://image.hanatour.com/usr/cms/resize/400_0/2018/04/24/10000/a3e94eb1-c9a3-4f5e-a442-adcb7c3f1c26.jpg'},
                { id : 6, link : '패키지6', title : '[에어카텔]제주3일 - 소노벨 리조트', imgUrl : 'https://image.hanatour.com/usr/cms/resize/400_0/2017/10/23/10000/5782da3c-0ab3-4853-bf79-2af5c099ca17.jpg'},
                { id : 7, link : '패키지7', title : '[에어카텔]제주3일 - 소노벨 리조트', imgUrl : 'https://image.hanatour.com/usr/cms/resize/400_0/2011/01/28/10000/548d372c-2950-489c-a19b-77b764b7b359.jpg'},
                { id : 8, link : '패키지8', title : '[에어카텔]제주3일 - 소노벨 리조트', imgUrl : 'https://image.hanatour.com/usr/cms/resize/400_0/2018/04/24/10000/c42ed9cd-034f-4674-81b7-2c31c96db3ab.jpg' },
                { id : 9, link : '패키지9', title : '[에어카텔]제주3일 - 소노벨 리조트', imgUrl : 'https://image.hanatour.com/usr/cms/resize/400_0/2020/09/22/10000/2417fe10-e082-4589-9110-11733a85a358.jpg'},
            ],
            start : 0,            
        }
        this.slideImages = this.slideImages.bind(this);
    }
    
    slideImages(e){

        let data = ''
        if(e.target.textContent==='prev'){
            data = (this.state.start-1 + this.state.contents.length) % this.state.contents.length
        }else{           
            data = (this.state.start+1) % this.state.contents.length
        
        }
        this.setState({
            start : data
        })
    }

    myFuction() {
        console.log(this.props.text);
        this.props.dispatch(action.eventAction.setText({text : "교육끝"}));
    }

    render() {
        // const renders = this.state.renders;
        const renders = [];
        for(var i=this.state.start; i<this.state.start+4;i++){
            renders.push(this.state.contents[i%this.state.contents.length]);
        }

        const contentList = renders.map(
            (content) => <Contents 
                            key={ content.id } 
                            link={ content.link }
                            title={ content.title }
                            imgUrl={ content.imgUrl }></Contents>
        );
        
        return(
            <div className="section_wrap">
                <div className="section_title">{this.props.sectionTitle}</div>
                <div className="sub_wrap">
                    <ol className="sub_list">
                        {contentList}
                    </ol>
                </div>
                {/* <!-- section --> */}
                <button className="prevBtn" onClick={this.slideImages} value="prev">prev</button>
                <button className="nextBtn" onClick={this.slideImages} value="next">next</button>

                <button onClick={()=>this.myFuction()} value="prev">prev</button>
                <button onClick={this.slideImages} value="next">next</button>

            </div>
        );
    }
}

export default connect()(Section);