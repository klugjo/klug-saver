import React from 'react';
import numeral from 'numeral';
import { Text, View } from 'react-native';

import { categoryList } from '../Categories/constants';

export default class Summary extends React.Component {

  generateData = () => {
    const { expenses } = this.props;
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getTime();
    const expensesInCurrentMonth = expenses.filter(e => firstDay <= e.createdAt && e.createdAt < lastDay);
    const categoriesWithSum = categoryList.map(({ title }) =>
      ({
        title,
        sum: expensesInCurrentMonth
            .filter(e => e.category.startsWith(title))
            .reduce((acc, curr) => acc + curr.amount, 0)
      })
    );

    categoriesWithSum.sort((a, b) => b.sum - a.sum);

    categoriesWithSum.push({
      title: 'Total',
      sum: categoriesWithSum.reduce((acc, curr) => acc + curr.sum, 0)
    });

    return categoriesWithSum;
  }

  render() {
    const data = this.generateData();

    return <View style={{
      flex: 1,
      flexDirection: 'column'
    }}>
      {data.map((cat, index) =>
        <View
          key={index}
          style={{
            flex: 1 / data.length,
            backgroundColor: cat.title === 'Total' ? 'tomato' : '#003249',
            marginTop: index === 0 ? 0 : 3,
            marginBottom: index === data.length - 1 ? 0 : 3,
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20
          }}
        >
          <Text
            style={{
              color: 'white'
            }}
          >
            {cat.title}
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: cat.title === 'Total' ? 'bold' : 'normal'
            }}
          >
            {numeral(cat.sum).format('0,0.00')}
          </Text>
        </View>
      )}
    </View>
  }
}