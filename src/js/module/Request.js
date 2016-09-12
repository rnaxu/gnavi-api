export default class Request {
  constructor (url, params) {
    this.url = url;
    this.params = params;
  }

  init() {
    return $.ajax({
      url: this.url,
      data: this.params,
      dataType: 'jsonp'
    });
  }
}