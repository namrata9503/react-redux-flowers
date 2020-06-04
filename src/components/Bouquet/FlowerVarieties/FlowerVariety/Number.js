import React, { Component } from 'react';

class Number extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      value : this.props.value
    }
  }

  onChange(value)
  {
    this.setState({value : value},()=>{
      if(this.props.min && value < this.props.min)
        return;

      if(this.props.max && value > this.props.max)
          return;

      if(this.props.onChange)
        this.props.onChange(value)
    })
  }

  onBlur(value)
  {
    if(this.props.min && value < this.props.min)
      value = this.props.min

    if(this.props.max && value > this.props.max)
        value = this.props.max

    this.setState({value : value},()=>{
      if(this.props.onChange)
        this.props.onChange(value)
    })
  }

  render(){
    return(
      <input type='number'
            value={this.state.value}
            min={this.props.min}
            max={this.props.max}
            onChange={(e)=>this.onChange(e.target.value)}
            onBlur={(e)=>this.onBlur(e.target.value)}
            style={this.props.style}
            />
    )
  }
}

export default Number;





















// import React from 'react';

// import Aux from '../../../../hoc/Auxiliary';

// const count = (props) => {

//     const flowerSummery = Object.keys(props.flowers)
//         .map(flKey => {
//             console.log('flwer count : ', flKey);
//             return (
//                 <p key={flKey}>
//                     {flKey} : {props.flowers[flKey]}
//                 </p>);
//         });
//     return (
      
//                 {flowerSummery}
      
//     );
    

// };

// export default count;














