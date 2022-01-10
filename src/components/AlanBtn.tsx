import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router';

const AlanBtn: React.FC = (props: any) => {
  const alanBtnComponent = useRef<any>(null);

  useEffect(() => {
    alanBtnComponent.current.addEventListener(
      'command',
      (data: CustomEvent) => {
        const commandData = data.detail;

        if (commandData.command === 'command') {
          /* Call client code that will react to the received command */
        }
      }
    );
  }, []);

  useEffect(() => {
    window.addEventListener('call-project-api', (e: any) => {
      alanBtnComponent.current.callProjectApi(
        'myApi',
        e.detail.data,
        (e: any, r: any) => {
          alert('Project API was called');
        }
      );
    });
  }, []);

  return (
    <alan-button
      ref={alanBtnComponent}
      alan-key="d9ddd8de675e5d5956b1cbd1c96e3cc02e956eca572e1d8b807a3e2338fdd0dc/stage"
    />
  );
};

export default withRouter(AlanBtn);
