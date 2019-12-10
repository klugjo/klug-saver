import { CREATE_NEW_ACCOUNT, DELETE_ACCOUNT, SWITCH_ACCOUNT } from '../../src/actions';
import { CURRENCIES } from '../../src/constants/currencies';
import reducer, { DEFAULT_STATE } from '../../src/reducer';
import { expense12FoodLunchJan01, expense12TravelCashJan01, expense20TransportTaxiJan01 } from '../mocks/expenses';

describe('createNewAccount', () => {
  it('adds a new account to the list', () => {
    const state = reducer(DEFAULT_STATE, { type: CREATE_NEW_ACCOUNT, payload: CURRENCIES.USD });

    expect(state.accounts).toHaveLength(1);
    expect(state.accounts[0].baseCurrency.code).toEqual('USD');
    expect(state.accounts[0].expenses).toEqual([]);
  });

  it('does not add an account if the currency is the same as the base currency', () => {
    expect(DEFAULT_STATE.baseCurrency.code).toEqual('EUR');
    expect(DEFAULT_STATE.accounts).toHaveLength(0);

    const state = reducer(DEFAULT_STATE, { type: CREATE_NEW_ACCOUNT, payload: CURRENCIES.EUR });

    expect(state.accounts).toHaveLength(0);
  });

  it('does not add an account if the currency already exists', () => {
    const defaultState = {
      ...DEFAULT_STATE,
      accounts: [{ baseCurrency: CURRENCIES.JPY, expenses: [] }]
    };

    expect(defaultState.accounts).toHaveLength(1);
    expect(defaultState.accounts[0].baseCurrency.code).toEqual('JPY');

    const state = reducer(
      defaultState,
      { type: CREATE_NEW_ACCOUNT, payload: CURRENCIES.JPY }
    );

    expect(state.accounts).toHaveLength(1);
    expect(state.accounts[0].baseCurrency.code).toEqual('JPY');
  });
});

describe('deleteCurrentAccount', () => {
  it('deletes the current account', () => {
    const defaultState = {
      ...DEFAULT_STATE,
      accounts: [
        { baseCurrency: CURRENCIES.JPY, expenses: [] },
        { baseCurrency: CURRENCIES.USD, expenses: [] },
        { baseCurrency: CURRENCIES.SGD, expenses: [] },
        { baseCurrency: CURRENCIES.MYR, expenses: [] }
      ]
    };

    const state1 = reducer(
      defaultState,
      { type: DELETE_ACCOUNT, payload: CURRENCIES.USD }
    );

    expect(state1.accounts).toHaveLength(3);
    expect(state1.accounts[0].baseCurrency.code).toEqual('JPY');

    const state2 = reducer(
      state1,
      { type: DELETE_ACCOUNT, payload: CURRENCIES.JPY }
    );

    expect(state2.accounts).toHaveLength(2);
    expect(state2.accounts[0].baseCurrency.code).toEqual('SGD');

    const state3 = reducer(
      state2,
      { type: DELETE_ACCOUNT, payload: CURRENCIES.MYR }
    );

    expect(state3.accounts).toHaveLength(1);
    expect(state3.accounts[0].baseCurrency.code).toEqual('SGD');
  });
});

describe('switchAccount', () => {
  it('switches the current account', () => {
    const defaultState = {
      ...DEFAULT_STATE,
      expenses: [
        expense20TransportTaxiJan01,
        expense20TransportTaxiJan01,
        expense20TransportTaxiJan01
      ],
      accounts: [
        { baseCurrency: CURRENCIES.JPY, expenses: [expense12FoodLunchJan01] },
        { baseCurrency: CURRENCIES.USD, expenses: [expense12TravelCashJan01, expense12TravelCashJan01] }
      ]
    };

    const state1 = reducer(
      defaultState,
      { type: SWITCH_ACCOUNT, payload: CURRENCIES.USD }
    );

    expect(state1.accounts).toHaveLength(2);
    expect(state1.accounts[0].baseCurrency.code).toEqual('EUR');
    expect(state1.accounts[0].expenses).toEqual([expense20TransportTaxiJan01, expense20TransportTaxiJan01, expense20TransportTaxiJan01]);
    expect(state1.baseCurrency.code).toEqual('USD');
    expect(state1.expenses).toEqual([expense12TravelCashJan01, expense12TravelCashJan01]);
  });
});
