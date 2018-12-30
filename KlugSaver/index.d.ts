declare module "redux-persist/integration/react" {
  import { ReactNode, PureComponent } from "react";
  import { Persistor, WebStorage } from "redux-persist";

  /**
   * Properties of @see PersistGate
   */
  export interface PersistGateProps {
      persistor: Persistor;
      onBeforeLift?: Function;
      children?: ReactNode;
      loading?: ReactNode;
  }
  /**
   * State of @see PersistGate
   */
  export interface PersistorGateState { bootstrapped: boolean; }
  /**
   * Entry point of your react application to allow it persist a given store @see Persistor and its configuration.
   * @see Persistor
   * @see PersistGateProps
   * @see PersistGateState
   */
  export class PersistGate extends React.PureComponent<PersistGateProps, PersistorGateState> { }
}
