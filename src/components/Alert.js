import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show " role="alert" style={{backgroundColor:"#f7ebe8"}} >
 <strong>{props.alert.type}</strong> : {props.alert.msg}
 
</div>
  )
}
