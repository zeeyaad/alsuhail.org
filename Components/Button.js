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
        <>
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
                    backgroundColor: isMouseOver ? props.HoverColor : props.NormalColor,
                }}
            >
                {props.Name}
            </button>
        </>
    );
}
export default Button;
