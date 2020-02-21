import React from 'react';
import {connect} from 'react-redux'

import {getData} from '../actions';

const SmurfForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }
    return (
    <>
    {props.isFetchingData ? (
        <div>We are fetching Data!</div>
    ) : (
        <button onClick={handleGetData}>Get the Smurfs!</button>
    )}
    </>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, {getData})(SmurfForm);