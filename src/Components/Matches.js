import React from "react";

const Matches = ({ filteredData }) => {
    if (filteredData.length === 0) {
      return (
        <div>
          There are no cities that meet the current search criteria
        </div>
      )
    }
    else if (filteredData.length > 0) {
      return (
        <div>
          {filteredData.length} cities match the search criteria
        </div>
      )
    }
  }


export default Matches