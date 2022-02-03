import React from "react";

function ErrorBoundary(props) {
  const OopsText = () => {
    return (
      <h2>
        OOps,something went wrong...We are doing our best to fix the issue
      </h2>
    );
  };
  let isEverythingOk = true;
  return <>{isEverythingOk ? props.children : <OopsText />}</>;
}
export default ErrorBoundary;
