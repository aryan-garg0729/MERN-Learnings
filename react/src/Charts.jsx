import React from 'react'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto' //important to keep this line else charts not made
const Charts = () => {
    return <>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            <div style={{ height: '230px', width: '400px' }}>
                <Line
                    data={{
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [
                            {
                                label: '# of votes',
                                data: [12, 34, 2],
                                backgroundColor: 'purple'
                            },
                            {
                                label: '# of votes',
                                data: [12, 4, 20],
                                backgroundColor: 'red'
                            },
                        ],
                    }}
                />
            </div>


            <div style={{ height: '230px', width: '400px' }}>
                <Bar
                    data={{
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [
                            {
                                label: '# of votes',
                                data: [12, 34, 2],
                                backgroundColor: 'orange',
                            },
                            {
                                label: '# of votes',
                                data: [12, 4, 20],
                                backgroundColor: 'red',
                            },
                        ],
                    }}
                />
            </div>


            <div style={{ height: '230px', width: '400px' }}>
                <Pie
                    data={{
                        labels: ['Red', 'Blue', 'Yellow','green'],
                        datasets: [
                            {
                                label: '# of votes',
                                data: [12, 39, 25,45],
                                backgroundColor: ['orange', 'red', 'black','green'],
                            },
                        ],
                    }}
                />
            </div>


            <div style={{ height: '230px', width: '400px' }}>
                <Doughnut
                    data={{
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [
                            {
                                label: '# of votes',
                                data: [12, 34, 2],
                                backgroundColor: ['rgb(69,19,190)', 'red', 'black'],
                            },
                            {
                                label: '# of votes2',
                                data: [20, 4, 30],
                                backgroundColor: ['rgb(69,19,190)', 'red', 'black'],
                            },
                        ],
                    }}
                />
            </div>


        </div>
    </>
}

export default Charts