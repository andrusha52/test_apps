import React, { Component } from "react";
import MyChart from "./components/Chart";
import MyChartSecond from "./components/Chart2";
import css from "./app.module.css"

const initState = {
  data: "",
  month: "",
  year: "",
  dataArr: [],
  openChart: false,
  GRK: "",
  GRL: "",
  mk:"",
  god:"",
  openChart2:false,
  summaryValue:""
};

class MainChart extends Component {
  state = { ...initState };

  handleChange(pole, value) {
    this.setState({
      [pole]: value.toString(),
    });
  }
  handeSubmit = async (e) => {
    e.preventDefault();

    let { data, month, year } = this.state;
    data = data.length === 1 ? "0" + data : data;
    month = month.length === 1 ? "0" + month : month;
    const resultDataMonth = data + month;
    let GRK = Number(resultDataMonth) * Number(year);

    let GRL = Number(month) * Number(data) * Number(year);

    if (GRL.toString().length === 6) {
      GRL = GRL.toString() + "0";
    } else if (GRL.toString().length === 5) {
      GRL = GRL.toString() + "00";
    } else {
      GRL = GRL.toString();
    }
    if (GRK.toString().length === 6) {
      GRK = GRK.toString() + "0";
    } else if (GRK.toString().length === 5) {
      GRK = GRK.toString() + "00";
    } else {
      GRK = GRK.toString();
    }

    GRL = GRL.split("").map((el) => {
      return Number(el);
    });
    GRK = GRK.split("").map((el) => {
      return Number(el);
    });

    await this.setState({ GRL: GRL, GRK: GRK, openChart: true });
  };
  onClickBTN(e) {
    e.preventDefault();
    this.setState({ GRL: "", GRK: "", openChart: false , data:"",month:"", year:""});
  }

  submitSecond(e){
e.preventDefault()
    let{god, mk}=this.state

    let summaryValue = Number(mk)* Number(god)*52
    summaryValue= summaryValue.toString()
    if(summaryValue.length<7){
      summaryValue = summaryValue+"0"
      if(summaryValue.length<7){
        summaryValue = summaryValue+"0"
      }
    }
   this.setState({
    summaryValue: summaryValue, openChart2:true
   })
  }



  onClickBTNSecond(e){
    e.preventDefault()
    this.setState({
      mk:"",god:"", openChart2:false, summaryValue:""
    })
  }

  render() {
    const { data, month, year, god, mk } = this.state;
    return (
      <div>
      <div className={css.divInput}>
        <form onSubmit={(e) => this.handeSubmit(e)}>
          <input
            type='number'
            value={data}
            onChange={(e) => this.handleChange("data", e.target.value)}
          />
          <input
            type='number'
            value={month}
            onChange={(e) => this.handleChange("month", e.target.value)}
          />
          <input
            type='number'
            value={year}
            onChange={(e) => this.handleChange("year", e.target.value)}
          />
          <button type='submit'>посчитать</button>
        </form>
        <button onClick={(e) => this.onClickBTN(e)}>CLEAR ALL</button>
        </div>
        <div id='chart' className={css.chart}>
          {this.state.openChart && 
            <MyChart grkLine={this.state.GRL} grlLine={this.state.GRK} />
          }
        </div>

      <div>
        
        <form onSubmit={(e)=>this.submitSecond(e)} className={css.divInput2}>
          <p>MK</p>
          <input placeholder="MK" value={mk} onChange={(e) => this.handleChange("mk", e.target.value)}/>
          <p>ГОД</p>
          <input  placeholder="год" valye={god} onChange={(e) => this.handleChange("god", e.target.value)}/>
          <button type="submit">посчитать</button>
          <button onClick={(e) => this.onClickBTNSecond(e)}>CLEAR ALL</button>
        </form>
        {this.state.openChart2 &&
        <div id='chart' className={css.chart2}>
        <MyChartSecond summaryValue={this.state.summaryValue} />
        </div>}
        </div>
      </div>
    );
  }
}

export default MainChart;
