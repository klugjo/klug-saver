import { connect } from 'react-redux';
import { ThemeType } from '../../constants/common';
import { IMainState } from '../../typings';
import ThemeProvider from './ThemeProvider';

interface IStateProps {
  theme: ThemeType;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    theme: state.theme
  };
};

const mapDispatchToProps = (_dispatch: any): any => ({});

export default connect<IStateProps, {}, {}, IMainState>(mapStateToProps, mapDispatchToProps)(ThemeProvider);
