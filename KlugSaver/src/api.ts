import axios from 'axios';
import { Buffer } from 'buffer';
import Config from 'react-native-config';
import { ICurrency } from './typings';

export const getExpenses = ({ from }: any) => axios({
  method: 'get',
  url: `https://9so0o0nevi.execute-api.ap-southeast-1.amazonaws.com/prod/expense`,
  params: {
    from
  }
});

export const getArchiveContents = (filePath: string, token: string) => {
  return axios({
    method: 'post',
    url: 'https://content.dropboxapi.com/2/files/download',
    headers: {
      Authorization: `Bearer ${token}`,
      'Dropbox-API-Arg': JSON.stringify({
        path: filePath
      })
    }
  });
}

export function putArchiveContents(filePath: string, textContents: any, token: string) {
  const buff = new Buffer(textContents, 'utf8');

  return axios({
    method: 'post',
    url: 'https://content.dropboxapi.com/2/files/upload',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/octet-stream',
      'Dropbox-API-Arg': JSON.stringify({
        path: filePath,
        mode: 'overwrite'
      })
    },
    data: buff
  });
}

export const getCurrencyRate = (baseCurrency: ICurrency, currency: ICurrency) => {
  const ccyPair = `${currency.code}_${baseCurrency.code}`;

  return axios({
    method: 'GET',
    url: 'https://free.currencyconverterapi.com/api/v6/convert',
    params: {
      q: ccyPair,
      compact: 'ultra',
      apiKey: Config.REACT_APP_CCY_CONVERTER_KEY
    }
  }).then((response: any) => {
    return response.data[ccyPair]
  });
}
