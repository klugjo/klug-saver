import { IExpense } from "../../src/typings";

const firstJanuary2018 = new Date('2018-01-01T00:00:00').getTime();
const secondJanuary2018 = new Date('2018-01-02T00:00:00').getTime();
const thirdJanuary2018 = new Date('2018-01-03T00:00:00').getTime();

export const expense20TransportTaxiJan01: IExpense = {
  category: "Transport",
  createdAt: firstJanuary2018,
  amount: 20,
  subCategory: "Taxi",
  id: "fake-id-1",
  updatedAt: firstJanuary2018,
  color: 'color'
};

export const expense12FoodLunchJan01: IExpense = {
  category: "Food",
  createdAt: firstJanuary2018,
  amount: 12,
  subCategory: "Lunch",
  id: "fake-id-2",
  updatedAt: firstJanuary2018,
  color: 'color'
};

export const expense12TravelCashJan01: IExpense = {
  category: "Travel",
  createdAt: firstJanuary2018,
  amount: 200,
  subCategory: "Cash",
  id: "fake-id-3",
  updatedAt: firstJanuary2018,
  color: 'color'
};

export const expense30TransportTaxiJan02: IExpense = {
  category: "Transport",
  createdAt: secondJanuary2018,
  amount: 30,
  subCategory: "Taxi",
  id: "fake-id-4",
  updatedAt: secondJanuary2018,
  color: 'color'
};

export const expense15FoodBreakfastJan02: IExpense = {
  category: "Food",
  createdAt: secondJanuary2018,
  amount: 15,
  subCategory: "Breakfast",
  id: "fake-id-5",
  updatedAt: secondJanuary2018,
  color: 'color'
};

export const expense20TransportTaxiJan03: IExpense = {
  category: "Transport",
  createdAt: thirdJanuary2018,
  amount: 20,
  subCategory: "Taxi",
  id: "fake-id-6",
  updatedAt: thirdJanuary2018,
  color: 'color'
};

export const expense12FoodLunchJan03: IExpense = {
  category: "Food",
  createdAt: thirdJanuary2018,
  amount: 12,
  subCategory: "Lunch",
  id: "fake-id-7",
  updatedAt: thirdJanuary2018,
  color: 'color'
};

