import { connect } from 'react-redux';

import { IMainState } from '../../typings';
import Settings from './Settings';
import { saveDropboxToken, saveDropboxArchive } from '../../actions';

interface IStateProps {
  dropboxToken?: string;
}

interface IDispatchProps {
  saveDropboxToken: (token: string) => void;
  saveDropboxArchive: () => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    dropboxToken: state.dropboxToken
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  saveDropboxToken: (token) => dispatch(saveDropboxToken(token)),
  saveDropboxArchive: () => dispatch(saveDropboxArchive())
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Settings);
