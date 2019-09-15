import React, { useState } from 'react';
import Switch from "./Switch";

export class FilterItem extends React.Component {

    handleFilterToggle () {
        const { handleToggle, property } = this.props;
        handleToggle(property)
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

export default FilterItem;