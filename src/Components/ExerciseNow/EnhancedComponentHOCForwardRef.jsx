// EnhancedComponentHOCForwardRef.js
import React from "react";

function withExtraProps(WrappedComponent) {
  const WithExtraProps = (props) => {
    const extraProps = { extraProp: "Some value" };
    return <WrappedComponent {...props} {...extraProps} />;
  };
  return WithExtraProps;
}

const MyComponent = (props) => {
  return <div>My Component with {props.extraProp}</div>;
};

const EnhancedComponentHOCForwardRef = withExtraProps(MyComponent);

export default EnhancedComponentHOCForwardRef;
