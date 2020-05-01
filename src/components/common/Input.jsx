import React from "react";

const Input = ({ onKeyPress, onChange, ...rest }, ref) => {
  return (
    <input {...rest} ref={ref} onKeyPress={onKeyPress} onChange={onChange} />
  );
};

const forwardRef = React.forwardRef(Input);

export default forwardRef;
