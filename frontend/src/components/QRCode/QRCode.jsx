import React from 'react';
import { QRCode } from 'antd';

export const QrCode = ({value}) => {

    return (
        <QRCode
        errorLevel="H"
        value={value}   
        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    />
    );

  
};
