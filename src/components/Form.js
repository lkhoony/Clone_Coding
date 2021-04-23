import React, {Component} from 'react';
import { DatePicker, Space, Select, Checkbox, Button } from 'antd';
import '../css/Form.css';

class Form extends Component{

    onChange(date, dateString) {
        console.log(date, dateString);
    }

    render() {

        const {Option} = Select;
        const {RangePicker} = DatePicker;

        return(
            <div className="kolon_form">
                <div className="kolon_form_title">
                    <p className="first_title">고객님,</p>
                    <strong className="second_title">어떤 여행을 꿈꾸시나요?</strong>
                </div>
                <Select
                    showSearch
                    style={{ width: 290 , margin : 5}}
                    placeholder="어디로 떠나세요?"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="서울">서울</Option>
                    <Option value="제주">제주</Option>
                    <Option value="부산">부산</Option>
                    <Option value="여수">여수</Option>
                    <Option value="강릉">강릉</Option>
                </Select>
                

                <Select
                    showSearch
                    style={{ width: 140, margin : 5}}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="서울">서울(인천/김포)</Option>
                    <Option value="부산">부산</Option>
                    <Option value="대구">대구</Option>
                    <Option value="청주">광주</Option>
                    <Option value="제주">제주</Option>
                    <Option value="안양">안양</Option>
                    <Option value="강원">강원</Option>
                </Select>
                
                <RangePicker className="test" style={{ width : 140, margin : 5}}></RangePicker>

                <Checkbox style={{ width : 140, margin : 5}}>항공권은 있어요</Checkbox>
                <Checkbox style={{ width : 140, margin : 5}}>우리끼리만 여행할래요</Checkbox>
                <Button type="primary" style={{ width : 290, margin : 5 , backgroundColor : '#333', borderColor : '#333', fontWeight : 'bold'}}>패키지 검색</Button>
            </div>

        );
    }
}

export default Form;