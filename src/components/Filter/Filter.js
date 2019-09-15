import React from 'react';
import { FilterItem } from './FilterItem/FilterItem';
import { FilterItem2 } from './FilterItem2/FilterItem';
import { FilterItem3 } from './FilterItem3/FilterItem';

export class Filter extends React.Component {
    state = {
        resource : true, 
        roads: false
    }
  
    render () {
        const {handleToggle, filter} = this.props;
        return (
            <>
                <FilterItem3 handleToggle={ handleToggle } property="resource" title="Food/Water" isOn={filter.resource} />
                <FilterItem handleToggle={ handleToggle } property="roads" title="Broken Roads" isOn={ filter.roads } />
                <FilterItem2 handleToggle={ handleToggle } property="network" title="No Network" isOn={ filter.network }/>
            </>
        )
    }
}