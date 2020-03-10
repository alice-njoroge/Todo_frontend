import React from "react";

/**
 * @return {null}
 */

 function FormError(props) {
    if (props.error) {
        return (
            <div className="alert alert-danger" role="alert">
                {props.error}
            </div>
        )
    }
    return null;
}
export default FormError;
