import React from 'react';


export default function ContentBox(props) {
  const borderStyles = {
    boxShadow: "0px 0px 12px 0px rgba(82, 82, 82, 0.20)",
    borderRadius: "15px",
    color: "rgba(70, 70, 70, 0.9)"
  }

    return(
        <div style={borderStyles}>
            {props.children}
        </div>
    )
}