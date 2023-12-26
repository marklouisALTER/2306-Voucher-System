import React from 'react';
import { Skeleton } from 'antd';

export const SkeletonParagraph = () => (
  <div>
    {Array.from({ length: 6 }, (_, index) => (
      <Skeleton
        key={index}
        paragraph={{ rows: 1 }}
        active={true}
        className='mt-10'
      />
    ))}
    <Skeleton.Button active={true} shape='default' block={false} className='mt-5' />
  </div>
);
