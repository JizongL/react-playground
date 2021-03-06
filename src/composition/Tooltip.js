import React from 'react'
import './Tooltip.css'

class TooltipClass extends React.Component{
  static defaultProps = {
    color: '#01A800',};

  render(){
    
    return <span className='Tooltip'>
    <span className='Tooltip-content'
    style={{color:this.props.color}}>
      {this.props.children}
    </span>
    <span className='Tooltip-message'>
      {this.props.message}
    </span>
  </span>
  }
}

// function Tooltip(props){
//   return(
//     <span className='Tooltip'>
//       <span className='Tooltip-content'
//       style={{color:props.color}}>
//         {props.children}
//       </span>
//       <span className='Tooltip-message'>
//         {props.message}
//       </span>
//     </span>
//   )
// }

export default TooltipClass;