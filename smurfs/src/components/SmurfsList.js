import React from 'react';
import {connect} from 'react-redux';

const SmurfsList = props => {
    return (
    <>
    {props.error ? (
    <div className='error'>{props.error}</div>
    ) : (
        props.smurfs.map(smurf => (
    <h3>{smurf.name}<br/>{smurf.age}<br/>{smurf.height}</h3>
    )))}
    </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(mapStateToProps, {})(SmurfsList);