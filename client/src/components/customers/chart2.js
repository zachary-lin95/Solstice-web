import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class Chart2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            customers1:[],
            chartData:{
                labels:[],
                datasets:[{
                    label:'bill',
                    data:[],
                    backgroundColor:[                            
                    'rgba(38,188,213,0.6)',
                    'rgba(214,200,75,0.6)',
                    'rgba(167,220,224,0.6)',
                    'rgba(225,233,220,0.6)',
                    'rgba(28,120,135,0.6)']
                }],
            }  

        }
    }

    componentDidMount(){
        fetch('/api/customers')
        .then(res => res.json())
        .then(customers2 => this.setState({customers1:customers2},() =>console.log('Customers fetched..', customers2)))
        //.then(this.getChartData());
    }


    render(){

        console.log('2');
        console.log(this.state.customers1);

        var len = this.state.customers1.length;
        var monthlabels = [];
        for(var i = 0; i<len; i++){
            monthlabels[i]= this.state.customers1[i]['month']
         };
        var yearlabels = [];
        for(var i = 0; i<len; i++){
            yearlabels[i]= this.state.customers1[i]['year']
        }
        var labels = [];
        for(var i = 0; i<len; i++){
            labels[i] = yearlabels[i] + '.' + monthlabels[i]
        }
        this.state.chartData.labels = labels;

        var data1 = [];
        for(var i = 0; i<len;i++){
        data1[i]= this.state.customers1[i]['kwh']
         };
        this.state.chartData.datasets[0].data = data1;

        var billdata = [];
        for(var i = 0; i<len;i++){
            billdata[i] = this.state.customers1[i]['bill']
        }
        this.state.chartData.datasets[0].data = billdata;
        var savingdata = [];
        for(var i = 0; i<len;i++){
            savingdata[i] = this.state.customers1[i]['savings']
        }

        
        return(
            <div className="chart">
            <Bar
               data={this.state.chartData}
               options={{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                },
                title:{
                    display:true,
                    text:'BILL PER MOUTH ',
                    frontsize:25,
                },
                legend:{
                    display:true,
                    position:'right'
                }
               }
               }

            />
            </div>
        )
    }
}

export default Chart2;