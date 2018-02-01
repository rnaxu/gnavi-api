import Param from './Param';
import Geo from './Geo';
import ShopApi from './ShopApi';
import Map from './Map';

export default class Main {
  init() {
    this.param = new Param();
    this.geo = new Geo();
    this.shopApi = new ShopApi();

    this.addEvents();
    this.runParam();
  }

  /**
   * イベントを追加
   *
   */
  addEvents() {
    document.getElementById('js-searchType-current').addEventListener('click', () => {
      this.handleSearchTypeCurrentClickEvent();
    });
  }

  /**
   * 現在地から探すをクリックした時
   *
   */
  handleSearchTypeCurrentClickEvent() {
    // 現在地取得
    this.runGeo();

    // 検索軸を非表示
    document.getElementById('js-searchType').classList.add('is-hidden');
  }

  /**
   * パラメータ
   *
   */
  runParam() {
    // 現在のハッシュを取得
    this.currentHashes = this.param.createParamObj(this.param.getHash(), '#');

    // 位置情報に関するハッシュが存在したら
    if (typeof this.currentHashes.latitude !== 'undefined' && typeof this.currentHashes.longitude !== 'undefined') {
      // ハッシュからリクエストパラメータを生成
      const params = this.param.createParamString(this.currentHashes);

      // リクエスト
      this.shopApi.request(params);

      // その位置で地図を表示
      this.createMap({
        latitude: Number(this.currentHashes.latitude),
        longitude: Number(this.currentHashes.longitude),
      });
    } else {
      // 検索軸選択画面を表示
      document.getElementById('js-searchType').classList.remove('is-hidden');
    }
  }

  /**
   * 現在地を取得
   *
   */
  runGeo() {
    if (this.geo.isAvailableGeolocation) {
      this.geo.getCurrentPosition(this.createMap, this.notifyError);
    }
  }

  /**
   * GoogleMapを生成
   *
   * @param { Object } position 位置情報
   *
   */
  createMap(position) {
    let latLng = {};

    // geolocationAPIから取得した位置情報だったら
    if (typeof position.coords !== 'undefined') {
      latLng = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } else {
      latLng = {
        latitude: position.latitude,
        longitude: position.longitude,
      };
    }

    const map = new Map(latLng);

    console.log(map);
  }

  /**
   * エラーを通知
   *
   * @param { Object } error
   *
   */
  notifyError(error) {
    const errorEl = document.getElementById('js-error');

    // エラーメッセージを挿入
    errorEl.innerHTML = error.message;

    // エラー要素を表示
    errorEl.classList.remove('is-hidden');
  }
}
