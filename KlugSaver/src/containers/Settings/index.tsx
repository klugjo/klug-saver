import { connect } from 'react-redux';

import { IMainState, CloudBackup, IAccount, ICurrency } from '../../typings';
import Settings from './Settings';
import { saveDropboxToken, saveDropboxArchive, saveBackupStrategy, restoreDropboxArchive, changeTheme, createNewAccount, switchAccount, deleteCurrentAccount } from '../../actions';
import { ThemeType } from '../../constants/common';

interface IStateProps {
  dropboxToken?: string;
  cloudBackup: CloudBackup;
  theme: ThemeType;
  accounts: IAccount[];
  baseCurrency: ICurrency;
}

interface IDispatchProps {
  saveDropboxToken: (token: string) => void;
  saveDropboxArchive: () => void;
  restoreDropboxArchive: () => void;
  saveBackupStrategy: (cloudBackup: CloudBackup) => void;
  changeTheme: (theme: ThemeType) => void;
  createNewAccount: (ccy: ICurrency) => void;
  switchAccount: (ccy: ICurrency) => void;
  deleteCurrentAccount: () => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    dropboxToken: state.dropboxToken,
    cloudBackup: state.cloudBackup,
    theme: state.theme,
    accounts: state.accounts,
    baseCurrency: state.baseCurrency
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  saveDropboxToken: (token) => dispatch(saveDropboxToken(token)),
  saveDropboxArchive: () => dispatch(saveDropboxArchive()),
  restoreDropboxArchive: () => dispatch(restoreDropboxArchive()),
  saveBackupStrategy: (cloudBackup: CloudBackup) => dispatch(saveBackupStrategy(cloudBackup)),
  changeTheme: (theme: ThemeType) => dispatch(changeTheme(theme)),
  createNewAccount: (ccy: ICurrency) => dispatch(createNewAccount(ccy)),
  switchAccount: (ccy: ICurrency) => dispatch(switchAccount(ccy)),
  deleteCurrentAccount: () => dispatch(deleteCurrentAccount()),
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Settings);
