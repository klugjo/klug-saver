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
      ]
    },
    {
      title: 'Transport',
      subCategories: [
        'Taxi',
        'Public Transport'
      ]
    },
    {
      title: 'Shopping',
      subCategories: [
        'Groceries',
        'House',
        'Clothes',
        'Art'
      ]
    },
    {
      title: 'Fun',
      subCategories: [
        'Party',
        'Activities',
        'Cigs'
      ]
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
      ]
    },
    {
      title: 'Bills',
      subCategories: [
        'Internet',
        'Phone',
        'Cleaning',
        'Internet Subscriptions'
      ]
    },
    {
      title: 'Health',
      subCategories: [
        'Clinic',
        'Spa',
        'Sport',
        'Supplements'
      ]
    },
    {
      title: 'Misc',
      subCategories: [
        'Gifts',
        'Dog',
        'Misc'
      ]
    }
  ]
};

export const categoryList = [...categories.col1, ...categories.col2];
