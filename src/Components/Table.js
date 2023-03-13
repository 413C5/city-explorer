import React from "react";

const Table = ({ filteredData }) => {
    return (
      <div className="App">
        <table>
          <tbody>
          <tr>
            <th>City</th>
            <th>Country</th>
            <th>Population</th>
          </tr>
          {filteredData.map((data) => {
            return (
              <tr key={data.city}>
                <td>{data.city}</td>
                <td>{data.country}</td>
                <td>{data.populationCounts[0].value}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }

export default Table