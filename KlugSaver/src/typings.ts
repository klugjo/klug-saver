export interface IThemeConstants {
  accentMain: string;
  backgroundMain: string;
  textMain: string;
  textSecondary: string;
  fontMain: string;
  fontThin: string;
}

export interface ICategory {
  title: string;
  subCategories: string[];
  color: string;
  icon: string;
}

export interface IExpense {
  amount: number;
  category: string;
  createdAt: number;
  id: string;
  subCategory: string;
  updatedAt: number;
}

export interface IMainState {
  expenses: Array<IExpense>;
  dropboxToken?: string;
  openModal?: string;
  expenseToDelete?: IExpense;
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