import * as React from 'react';
import KSContext from './KSContext';

export const withTheme = (Component: any) => {
  return (props: any) => {
    return (
      <KSContext.Consumer>
        {(contexts) => <Component {...props} {...contexts} />
        }
      </KSContext.Consumer>
    );
  };
};
