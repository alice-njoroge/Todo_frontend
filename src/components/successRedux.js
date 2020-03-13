import React, {Component} from "react";
import { connect } from 'react-redux';

class Success extends Component{

    render() {
        return (
            this.props.success ? (

            <div>
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    {this.props.success}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            ) : ''
        );
    }

}
const mapStateToProps = state => {
    return {
        success: state.success
    };
};

export default connect(mapStateToProps)(Success);