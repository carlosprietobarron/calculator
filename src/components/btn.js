import React from 'react'

function Btn(props) {
  console.log(props)

  return (
    <div>
      <button>{props.name}</button>
    </div>
  )
}

export { Btn }
