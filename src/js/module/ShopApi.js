import fetchJsonp from 'fetch-jsonp';

export default class ShopApi {
  request(params) {
    fetchJsonp(`https://api.gnavi.co.jp/RestSearchAPI/20150630/?keyid=6fda36a20982957560bf94baf0c1ba46&format=json&callback=cb${params}`)
      .then(res => res.json())
      .then((json) => {
        console.log('parsed json', json);
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  }
}
