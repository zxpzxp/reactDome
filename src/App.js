import React,{Component}from 'react';
import './App.css';
import  LeftSide from './compents/left'
import  RightSide from './compents/right'
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectValue:'',
      types:[{
        type:'Square',
        typeValue:'正方形'
      },{
        type:'Rectangle',
        typeValue:'长方形'
      },{
        type:'circular',
        typeValue:'圆形'
      }]
    }
    this.handlechangType = this.handlechangType.bind(this)
  }
  handlechangType(type){
    this.setState({selectValue:type });
  }
  render() {
    return (<div>
      <LeftSide className="leftside"  types={this.state.types} changType={(type)=>{this.handlechangType(type)}}></LeftSide>
      <RightSide className="rightside" selectValue={this.state.selectValue}></RightSide>  
    </div>)
  }
}
export default App;