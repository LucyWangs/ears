import React from 'react';
import { FilterItem } from './FilterItem/FilterItem';
// import { PolygonFilter } from './FilterItem/PolygonFilter';
import Switch from "./FilterItem/Switch";

export class Filter extends React.Component {
    state = {
        resource : true, 
        roads: false
    }
  
    // handleFilterToggle (property) {
    //     // const accessor = e.target.getAttribute("property")
    //     const newState = {}
    //     const oldState = this.state[property]
    //     newState[property] = !oldState
    //     this.setState(newState)
    //     console.log(newState)
    // }
    
    render () {
        const {handleToggle, filter} = this.props;
        return (
            <>
                {/* <FilterItem handleToggle={ this.handleFilterToggle.bind(this) } property="resource" title="Food/Water" isOn={ resource }/> */}
                <FilterItem handleToggle={ handleToggle } property="roads" title="Broken Roads" isOn={ filter.roads } />
                {/* <PolygonFilter handleToggle={ handleToggle } property="roads" title="No Network" isOn={ filter.network} /> */}
            </>
        )
    }
}