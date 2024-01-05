import React from 'react'
import { Steps } from 'antd'
export const StepsComponent = ({steps}) => {
  return (
    <div>                    
        <Steps
            size="small"
            current={steps}
            direction='horizontal'
            labelPlacement="vertical"
            items={[
            {
                
            },
            {
                
            },
            {
            
            },
            {
                
            },
            {
                
            },
            ]}
        />
    </div>
  )
}
