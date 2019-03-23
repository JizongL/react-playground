import React from 'react'
import './Demonym.css'

export default function(props){
  console.log(props)
  return(
    <div>
      <span>{props.name} comes from {props.country}</span>
    </div>
  )
}