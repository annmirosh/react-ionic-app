import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, children }) => {
  return (
    <div className="container">
      {children ? (
        children
      ) : (
        <React.Fragment>
          <strong>{name}</strong>
          <p>
            Explore{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ionicframework.com/docs/components"
            >
              UI Components
            </a>
          </p>
        </React.Fragment>
      )}
    </div>
  );
};

export default ExploreContainer;
