import React from "react";

/**
 * @return {null}
 */
function SuccessBox(props) {
    if (props.success){
        return(
            <div className="alert alert-success" role="alert">
                A simple success alert—check it out!
            </div>
        )
    }
    return null;

}
export default SuccessBox;