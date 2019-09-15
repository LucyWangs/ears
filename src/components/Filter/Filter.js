import React from 'react';
import { FilterItem } from './FilterItem/FilterItem';
import Switch from "./FilterItem/Switch";

export class Filter extends React.Component {
    state = {
        resource : true, 
        roads: false
    }
  
    handleFilterToggle (property) {
        // const accessor = e.target.getAttribute("property")
        const newState = {}
        const oldState = this.state[property]
        newState[property] = !oldState
        this.setState(newState)
        console.log(newState)
    }
    
    render () {
        const {resource, roads} = this.state;
        return (
            <>
                {/* <FilterItem handleToggle={ this.handleFilterToggle.bind(this) } property="resource" title="Food/Water" isOn={ resource }/> */}
                <FilterItem handleToggle={ this.handleFilterToggle.bind(this) } property="roads" title="Broken Roads" isOn={ roads } />
            </>
        )
    }
}