import '../App.css';
import React, { Component } from 'react';

class LeftSide extends Component{
  constructor(props) {
    super(props);
    // this.state = {selectValue: ''};
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
   console.log(this.props)
  }
  handleChange(event) {
    // console.log(event, event.target.value);
    // this.setState({selectValue: event.target.value});
    this.props.changType(event.target.value)
  }
  render(){
    return (
      <div className="leftside">
        {/* <select>
            <option value="volvo">三角形</option>
            <option value="saab">立方形</option>
            <option value="mercedes">圆形</option>
        </select> */}
        <select onChange={this.handleChange}>
           {
             this.props.types.map((item,index)=>{
              return <option value={item.type} key={index}>{item.typeValue}</option>
          })
           }
        </select> 
      </div>
    );
  } 
}

export default LeftSide;
