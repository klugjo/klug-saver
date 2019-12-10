import { ICategory, ICategoryMap } from "./typings";

export const getCategoryMapFromList = (categories: ICategory[]): ICategoryMap => {
  return categories.reduce((obj: ICategoryMap, category: ICategory) => ({
    ...obj, [category.title]: category
  }), {});
};
