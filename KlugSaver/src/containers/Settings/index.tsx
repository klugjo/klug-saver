import { connect } from 'react-redux';

import { IMainState, CloudBackup } from '../../typings';
import Settings from './Settings';
import { saveDropboxToken, saveDropboxArchive, saveBackupStrategy, restoreDropboxArchive } from '../../actions';

interface IStateProps {
  dropboxToken?: string;
  cloudBackup: CloudBackup;
}

interface IDispatchProps {
  saveDropboxToken: (token: string) => void;
  saveDropboxArchive: () => void;
  restoreDropboxArchive: () => void;
  saveBackupStrategy: (cloudBackup: CloudBackup) => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    dropboxToken: state.dropboxToken,
    cloudBackup: state.cloudBackup
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  saveDropboxToken: (token) => dispatch(saveDropboxToken(token)),
  saveDropboxArchive: () => dispatch(saveDropboxArchive()),
  restoreDropboxArchive: () => dispatch(restoreDropboxArchive()),
  saveBackupStrategy: (cloudBackup: CloudBackup) => dispatch(saveBackupStrategy(cloudBackup))
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Settings);
