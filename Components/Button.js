import React, { useState } from "react";

function Button(props) {
    const [isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={props.Class}
            type={props.Type}
            data-bs-toggle={props.Data_Bs_Toggle}
            data-bs-target={props.Data_Bs_Target}
            aria-controls={props.Aria_Controls}
            aria-expanded={props.Aria_Expanded}
            aria-label={props.Aria_Label}
            data-bs-dismiss={props.Data_Bs_Dismiss}
            style={{
                textDecoration: isMouseOver ? "underline" : "none",
                textDecorationColor: isMouseOver ? "#17a2b8" : "initial",
                textUnderlineOffset: isMouseOver ? "10px" : "0px", // this gives "padding" feel
                textDecorationThickness: "1rem",
            }}
        >
            {/* {props.Name} */}
            Zed
        </button>
    );
}

export default Button;
