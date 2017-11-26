import React from 'react'
import {render} from 'react-dom'
import MSVision from './components/MSVision'

const visionObject={
    API_KEY:'e341428ad33f446fa2f77ee8f504975f',
    API_RESOURCE:"https://samples.clarifai.com/demo-006.jpg"
};

render(
    <MSVision
        visionObject={visionObject}
    />,
    document.getElementById('app')
);