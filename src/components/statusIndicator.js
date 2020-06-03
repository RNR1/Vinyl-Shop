import React from "react"

export default function StatusIndicator({ color }) {
  return (
    <div
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        marginLeft: 5,
        backgroundColor: color,
      }}
    />
  )
}
