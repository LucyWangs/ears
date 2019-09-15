import React, { useState } from 'react';
// import './App.css';
import Switch from "./Switch";
import { bindExpression } from '@babel/types';

export class FilterItem2 extends React.Component {

    handleFilterToggle () {
        const { handleToggle, property } = this.props;
        handleToggle(property)
        // const accessor = e.target.getAttribute("property")
        // const newState = {}
        // const oldState = this.state[accessor]
        // newState[accessor] = !oldState
        // this.setState(newState)
    } 

    render() { 
        const { handleToggle, isOn, title, property} = this.props
        return (
        <div className="filterItem" style={{ marginTop: 5 }}>
            <Switch
                isOn={isOn}
                handleToggle={this.handleFilterToggle.bind(this)}
                title={ title }
                property={ property }
            />
        </div>
        );
    }
}

// export default FilterItem2;