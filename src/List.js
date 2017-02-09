import React, { Component } from 'react';

export default function List(props) {
  var list = props.list.map((item, i) => {
    return <li key={i} onClick={props.clickAction.bind(null, item)}>{item}</li>
  })
  return (
    <div>
      <h1>{props.title}</h1>
      <ul className="list">
        {list}
      </ul>
    </div>
  )
}
