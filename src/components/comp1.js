import React from 'react'

import { Spring } from 'react-spring'

const Comp1 = () => {
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => <div style={props}>hello</div>}
    </Spring>
}

export default Comp1


