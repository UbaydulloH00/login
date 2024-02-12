import React from 'react'

export default function Button({children,classes ,onClick}) {
  return (
    <button onClick={onClick} className={classes}>{children}</button>
  )
}
