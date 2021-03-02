import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import '../../css/defaults.css';

const state = {
    labels: ['JavaScript ES6', 'node.js', 'Full MERN Stack', 'HTML5/CSS3', 'MySQL/Sequelize', 'Github + VSCode', 'Java', 'C++'],
    datasets: [
        {
            label: "Languages/Tools",
            backgroundColor: 'rgba(94, 118, 253, 0.2)',
            borderColor: 'rgb(79, 91, 255)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(70, 73, 250, 0.4)',
            hoverBorderColor: 'rgb(54, 40, 255)',
            data: [90, 90, 85, 80, 75, 100, 60, 50]
        },
    ],
}
const options = { 
    scales: { 
        xAxes: [{
             ticks: {
                beginAtZero: true, 
                max: 100
                } 
            }] 
        } 
    };

export default class Bar extends Component {
    render() {
        return (
            <>
            <h2 className= "font">Technical Skills</h2>
            <HorizontalBar options={options} data={state} />
            </>
        )
    }
}