import { ICategory } from '../typings';

export const categories = {
  col1: [
    {
      title: 'Food',
      subCategories: [
        'Breakfast',
        'Lunch',
        'Dinner',
        'Office Meal',
        'Snack',
        'Tea'
      ],
      color: '#F8B195',
      icon: 'food'
    },
    {
      title: 'Transport',
      subCategories: [
        'Taxi',
        'Public Transport'
      ],
      color: '#F67280',
      icon: 'taxi'
    },
    {
      title: 'Shopping',
      subCategories: [
        'Groceries',
        'House',
        'Clothes',
        'Art'
      ],
      color: '#C06C84',
      icon: 'cart'
    },
    {
      title: 'Fun',
      subCategories: [
        'Party',
        'Activities',
        'Cigs',
        'Video Games'
      ],
      color: '#6C5B7B',
      icon: 'beer'
    },
  ],
  col2: [
    {
      title: 'Travel',
      subCategories: [
        'Transport',
        'Food',
        'Accommodation',
        'Activities',
        'Shopping',
        'Cash',
        'Other'
      ],
      color: '#355C7D',
      icon: 'airplane'
    },
    {
      title: 'Bills',
      subCategories: [
        'Internet',
        'Phone',
        'Cleaning',
        'Internet Subscriptions',
        'Insurance',
        'Servers'
      ],
      color: '#99B898',
      icon: 'file'
    },
    {
      title: 'Health',
      subCategories: [
        'Clinic',
        'Spa',
        'Sport',
        'Supplements',
        'Books'
      ],
      color: '#45ADA8',
      icon: 'heart'
    },
    {
      title: 'Misc',
      subCategories: [
        'Gifts',
        'Dog',
        'Misc'
      ],
      color: '#A7226E',
      icon: 'asterisk'
    }
  ]
};

export const DEFAULT_CATEGORY_COLOR = '#a1c3d3';

export const categoryList: Array<ICategory> = [...categories.col1, ...categories.col2];

export const categoryMap: { [key: string]: ICategory } = categoryList.reduce((acc: any, cat: any) => ({
  ...acc, [cat.title]: cat
}), {});
