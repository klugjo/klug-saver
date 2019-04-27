import { connect } from 'react-redux';

import { IMainState, CloudBackup } from '../../typings';
import Settings from './Settings';
import { saveDropboxToken, saveDropboxArchive, saveBackupStrategy, restoreDropboxArchive, changeTheme } from '../../actions';
import { ThemeType } from '../../constants/common';

interface IStateProps {
  dropboxToken?: string;
  cloudBackup: CloudBackup;
  theme: ThemeType;
}

interface IDispatchProps {
  saveDropboxToken: (token: string) => void;
  saveDropboxArchive: () => void;
  restoreDropboxArchive: () => void;
  saveBackupStrategy: (cloudBackup: CloudBackup) => void;
  changeTheme: (theme: ThemeType) => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    dropboxToken: state.dropboxToken,
    cloudBackup: state.cloudBackup,
    theme: state.theme
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  saveDropboxToken: (token) => dispatch(saveDropboxToken(token)),
  saveDropboxArchive: () => dispatch(saveDropboxArchive()),
  restoreDropboxArchive: () => dispatch(restoreDropboxArchive()),
  saveBackupStrategy: (cloudBackup: CloudBackup) => dispatch(saveBackupStrategy(cloudBackup)),
  changeTheme: (theme: ThemeType) => dispatch(changeTheme(theme))
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Settings);
