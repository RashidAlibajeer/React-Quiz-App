import React from 'react';


export default function IconLabelButtons(props) {
  return (
    <div>
      <button onClick={props.next} style={{background:"gray",color:"white",padding:10,borderRadius:5}}>
        {props.val}
      </button>
    </div>
  );
}