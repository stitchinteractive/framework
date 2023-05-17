import React from "react"
import "./custom.css"

export const MyComponent = ({ columnCount }) => {
  const renderColumns = () => {
    const columns = []
    for (let i = 1; i <= columnCount; i++) {
      columns.push(<FlexCol key={i}>{i}</FlexCol>)
    }

    return columns
  }

  return <div className="container grid-container">{renderColumns()}</div>
}

const FlexCol = ({ children, className, style }) => {
  return (
    <div className={`grid-item ${className}`} style={style}>
      {children}
    </div>
  )
}

export default MyComponent
