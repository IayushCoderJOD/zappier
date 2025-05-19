import { ReactFlowProvider } from '@xyflow/react'
import React from 'react'
import ZapComponent from './ZapComponent'

const CreateZap = () => {
    return (
        <ReactFlowProvider>
            <ZapComponent />
        </ReactFlowProvider>

    )
}

export default CreateZap
