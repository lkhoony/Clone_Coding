import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        
        return(
            <div className="inputBox">
                <form action="">
                    <input type="text" placeholder="어디로 떠나세요?"></input>
                    <select>
                        <option value="seoul">서울(인천/김포)</option>
                        <option value="seoul">부산</option>
                        <option value="seoul">대구</option>
                        <option value="seoul">청주</option>
                        <option value="seoul">광주</option>
                        <option value="seoul">제주</option>
                    </select>
                    <input type="date"></input>
                    <input type="submit" value="패키지 검색"></input>
                </form>
            </div>
        );
    }

}   

export default Form