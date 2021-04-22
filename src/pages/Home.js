import React from 'react';
import {Section} from '../components';

class Abroad extends React.Component {

    render() {
        return(
            <div>
                <Section sectionTitle="해외여행"></Section>
                <Section sectionTitle="국내여행"></Section>
                <Section sectionTitle="항공"></Section>
                <Section sectionTitle="호텔/펜션"></Section>
                <Section sectionTitle="투어/입장권"></Section>
                <Section sectionTitle="테마여행"></Section>
            </div>
        );
    }
}

export default Abroad;