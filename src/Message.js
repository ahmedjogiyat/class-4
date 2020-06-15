import React from 'react';
import { checkPropTypes } from 'prop-types';

export function Message (props){
    return(
        <div>
            <h3>Value of counter variable is: {props.counter}</h3>
        </div>
    )
}