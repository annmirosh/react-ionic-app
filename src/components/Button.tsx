import React, { useCallback, useEffect, useRef } from 'react';

const Button: React.FC = (props: any) => {
  const callProjectApi = useCallback(() => {
    window.dispatchEvent(new CustomEvent("call-project-api", { detail: { data: 'some-data' } }));
  },[]);
  return <button onClick={callProjectApi}>Call Project API</button>;
};

export default Button;
