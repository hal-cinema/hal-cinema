import React, { ComponentProps, forwardRef} from 'react';

export const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, ref) => {
  return <input {...props} ref={ref} />;
});
