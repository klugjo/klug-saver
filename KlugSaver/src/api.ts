import axios from 'axios';
import { Buffer } from 'buffer';

export const postExpense = (data: any) => axios({
  method: 'post',
  url: 'https://9so0o0nevi.execute-api.ap-southeast-1.amazonaws.com/prod/expense',
  data
});

export const getExpenses = ({ from }: any) => axios({
  method: 'get',
  url: `https://9so0o0nevi.execute-api.ap-southeast-1.amazonaws.com/prod/expense`,
  params: {
    from
  }
});

export const removeExpense = (id: string) => axios({
  method: 'delete',
  url: `https://9so0o0nevi.execute-api.ap-southeast-1.amazonaws.com/prod/expense/${id}`
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
