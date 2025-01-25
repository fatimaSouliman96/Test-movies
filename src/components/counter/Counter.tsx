import React, { ReactNode } from "react"
import "./counter.css"
interface CounterParams {
    count: number,
    title: string,
    color: string,
    icon: ReactNode
}

const Counter: React.FC<CounterParams> = ({ count, color, title, icon }) => {
   
  return (
    <div className="counter" style={{backgroundColor: color}} >
        {icon}
        <p className="count">{count}</p>
        <p className="title">{title}</p>
    </div>
  )
}
export default Counter
