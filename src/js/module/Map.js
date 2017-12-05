export default class Map {
  // constructor() {
  // }

  /**
   * 地図を生成
   *
   * @param { Objext } position 位置情報
   *
   */
  initMap(position) {
    this.googleMap = new google.maps.Map(document.getElementById('js-map'), {
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
      zoom: 15,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
    });
  }

  /**
   * 位置情報取得エラー時の処理
   *
   * @param { Object } error エラーコードとエラーメッセージ
   */
  error(error) {
    console.log(error);

    document.getElementById('js-error').classList.remove('is-hidden');
  }
}
