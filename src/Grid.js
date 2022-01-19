import React from "react"

const Grid = ({ config, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {config.map((configObj, i) => {
            return <th key={i}>{configObj.field}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((dataObj, j) => {
          return (
            <tr key={j}>
              {config.map((configObj, z) => {
                if (configObj.field === "Trailer") {
                  const data = dataObj.Trailer
                  return <td key={z}>{configObj.component({ data })}</td>
                } else {
                  return <td key={z}>{dataObj[`${configObj.field}`]}</td>
                }
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Grid
