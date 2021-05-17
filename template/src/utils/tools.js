import qs from 'qs'

export function Query(urlStr) {
  let hashArr = urlStr.split('?');
  return hashArr.length > 1 ? qs.parse(hashArr[1]) : null;
}