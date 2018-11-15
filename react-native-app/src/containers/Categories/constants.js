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
      color: '#F8B195' 
    },
    {
      title: 'Transport',
      subCategories: [
        'Taxi',
        'Public Transport'
      ],
      color: '#F67280'
    },
    {
      title: 'Shopping',
      subCategories: [
        'Groceries',
        'House',
        'Clothes',
        'Art'
      ],
      color: '#C06C84'
    },
    {
      title: 'Fun',
      subCategories: [
        'Party',
        'Activities',
        'Cigs'
      ],
      color: '#6C5B7B'
    }
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
        'Other'
      ],
      color: '#355C7D'
    },
    {
      title: 'Bills',
      subCategories: [
        'Internet',
        'Phone',
        'Cleaning',
        'Internet Subscriptions'
      ],
      color: '#99B898'
    },
    {
      title: 'Health',
      subCategories: [
        'Clinic',
        'Spa',
        'Sport',
        'Supplements'
      ],
      color: '#45ADA8'
    },
    {
      title: 'Misc',
      subCategories: [
        'Gifts',
        'Dog',
        'Misc'
      ],
      color: '#A7226E'
    }
  ]
};

export const categoryList = [...categories.col1, ...categories.col2];
