import React from "react";

const Scroll = (Props) => {
return(
    <div style={{ overflowY: 'scroll', border: '2px Solid black', height: '800px' }}>
        {Props.children}
    </div>
);
}

export default Scroll;

