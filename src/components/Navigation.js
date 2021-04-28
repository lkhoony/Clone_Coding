import React from 'react';
import Submenu from './Submenu.js';
import { HoleMenu } from '.'
import '../css/Navigation.css';
import App from '../App.js';
import { Link } from "react-router-dom";

class Navigation extends React.Component{

    constructor(props){
        super(props);
        this.state={
            holeMenuOn : false,
            menuList : [
                {   
                    id : 0,
                    title : "해외여행",
                    submenu : [
                        "미리 준비하는 해외여행",
                        "동남아/대만/서남아",
                        "중국/홍콩/극동러시아",
                        "일본",
                        "유럽/아프리카",
                        "남태평양/호주/뉴질랜드",
                        "미주/중남미/하와이"
                    ],
                    active : false,
                    subOn : false,
                    url : '/abroad'
                },
                {   
                    id : 1,
                    title : "국내여행",
                    submenu : [
                        "호텔예약",
                        "펜션/풀빌라 예약",
                        "항공",
                        "제주여행",
                        "투어 입장권"
                    ],
                    active : false,
                    subOn : false,
                    url : '/domestic'
                },
                {   
                    id : 2,
                    title : "항공",
                    submenu : [
                        "항공예약",
                        "전세계 할인 항공",
                        "단체항공 견적문의"
                    ],
                    active : false,
                    subOn : false,
                    url : '/airline'
                },
                {   
                    id : 3,
                    title : "호텔/펜션",
                    submenu : [
                        "호텔예약",
                        "펜션/풀빌라 예약"
                    ],
                    active : false,
                    subOn : false,
                    url : '/hotel'
                },
                {   
                    id : 4,
                    title : "투어/입장권",
                    submenu : [
                        "제주",
                        "서울",
                        "경상",
                        "경기",
                        "전라",
                        "강원",
                        "충청"
                    ],
                    active : false,
                    subOn : false,
                    url : '/tour'
                },
                {   
                    id : 5,
                    title : "테마여행",
                    submenu : [
                        "허니문",
                        "골프"
                    ],
                    active : false,
                    subOn : false,
                    url : '/theme'
                }
            ]
        }
        this.mouseOn = this.mouseOn.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.holeMenuToggle = this.holeMenuToggle.bind(this);
    }

    holeMenuToggle(e){

        console.log(e);

        this.setState({
            holeMenuOn : !this.state.holeMenuOn
        });
    }

    mouseOn(index,e){
        let menuList = this.state.menuList;
        // 이전의 active 제거하고 해당 index에 active 추가
        for(var i=0; i<menuList.length; i++){
            if(menuList[i]['active']===true){
                menuList[i]['active']=false;
            }
        }
        menuList[index]['active'] = true;
        this.setState({
            menuList : menuList
        });
    }

    mouseLeave(){
        let menuList = this.state.menuList;
        // 이전의 active 제거하고 해당 index에 active 추가
        for(var i=0; i<menuList.length; i++){
            menuList[i]['active']=false;
        }
        this.setState({
            menuList : menuList
        });
    }

    render() {

        const menuList = this.state.menuList;
        const menuItems = menuList.map(
            (item,index) => 
                <li className="gnb_menu_item" key={item.id}>
                    <Link to={item.url}
                            onMouseOver = {(e)=>this.mouseOn(index,e)}
                            className={item.active ? "active" : ""}
                            >{item.title}</Link>
                        { item.active && <Submenu items={item.submenu} mouseLeave = {this.mouseLeave}></Submenu>} 
                </li>
        );

        return(
            <div className="gnb_wrap">
                <div className="global_menu_wrap">
                    {/* <!-- login, 회원가입 --> */}
                    <ul className="global_menu">
                        <li className="global_menu_item"><a className="global_menu_link" href="">로그인</a></li>
                        <li className="global_menu_item"><a className="global_menu_link" href="">회원가입</a></li>
                        <li className="global_menu_item"><a className="global_menu_link" href="">고객센터</a></li>
                    </ul>
                </div>
                <div className="local_menu_wrap">
                    {/* <!-- 로고, input, 마이메뉴, 예약내역, 장바구니 wrap--> */}
                    <div className="logo_box">
                        {/* <!-- logo --> */}
                        <h1 className="logo">
                            <a href="/"></a>
                        </h1>
                    </div>
                    <div className="box_search">
                        {/* <!-- input --> */}
                        <input className="search" type="text" placeholder="검색어를 입력해 주세요"></input>
                        <button className="search_btn"></button>
                    </div>
                    <div className="popular">
                        {/* <!-- popular  --> */}
                    </div>
                    <div className="private_menu">
                        {/* <!-- my menu, reserve, cart --> */}
                        <ul>
                            <li className="private_menu_item"><a href="">마이메뉴</a></li>
                            <li className="private_menu_item"><a href="">예약내역</a></li>
                            <li className="private_menu_item"><a href="">장바구니</a></li>
                        </ul>
                    </div>
                </div>
                <div className="gnb_menu_wrap" >
                    {/* <!-- GNB, LNB --> */}
                    
                    {/* <!-- left menu --> */}
                    <div className="gnb_menu_wrap_l">
                        <div className={"hole_menu" + (this.state.holeMenuOn ? " on" : "")} onClick={this.holeMenuToggle}>전체메뉴</div>
                        {this.state.holeMenuOn && <HoleMenu menuList = {this.state.menuList} ></HoleMenu>}
                        
                        <ul className="gnb_menu_list" onMouseLeave = {()=>this.mouseLeave()}>
                            {menuItems}
                        </ul>
                    </div>
                    
                    <div className="gnb_menu_wrap_r"> 
                        {/* <!-- right menu --> */}
                        <ul className="gnb_menu_right">
                            <li><a href="">여행기획전</a></li>
                            <li><a href="">기업여행</a></li>
                        </ul>
                    </div>
                </div>
            {/* gnb menu wrap */}
            </div> 
            
        );

    }
}

export default Navigation