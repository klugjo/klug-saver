import { StatusBarStyle } from "react-native";
import { ThemeType } from "./constants/common";

export interface IThemeConstants {
  accentMainColor: string;
  accentTextColor: string;
  backgroundMainColor: string;
  textMainColor: string;
  textSecondaryColor: string;
  fontMain: string;
  fontThin: string;
  underlayColor: string;
  type: ThemeType;
  barStyle: StatusBarStyle;
}

export interface ICategory {
  title: string;
  subCategories: string[];
  color: string;
  icon: string;
}

export interface ICategoryMap {
  [key: string]: ICategory;
}

export interface IExpense {
  amount: number;
  category: string;
  createdAt: number;
  id: string;
  subCategory: string;
  updatedAt: number;
  color: string;
  customCurrency?: ICurrency;
  customDate?: number;
  comments?: string;
  isCredit?: boolean;
}

export interface IAccount {
  baseCurrency: ICurrency;
  expenses: Array<IExpense>;
}

export interface IMainState {
  expenses: Array<IExpense>;
  dropboxToken?: string;
  openModal?: string;
  expenseToDelete?: IExpense;
  baseCurrency: ICurrency;
  customCurrency?: ICurrency;
  categories: ICategory[];
  cloudBackup: CloudBackup;
  theme: ThemeType;
  loading: boolean;
  tutorialDone: boolean;
  accounts: IAccount[];
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface ICategory {
  title: string,
  subCategories: string[],
  color: string,
  icon: string
}

export interface ICurrency {
  symbol: string;
  name: string;
  symbolNative: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  namePlural: string;
}

export enum SideEnum {
  Expense,
  Income
}

export enum CloudBackup {
  Phone,
  Dropbox
}
