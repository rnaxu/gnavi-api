export default class Geo {
  /**
   * navigator.geolocation が使えるかチェック
   *
   * @return { Boolean } true: 使える, false: 使えない
   *
   */
  isAvailableGeolocation() {
    if ('geolocation' in navigator) {
      return true;
    }

    return false;
  }

  /**
   * 位置情報を取得
   *
   * @param { Object } success 成功時に実行する関数
   * @param { Object } error エラー時に実行する関数
   *
   */
  getCurrentPosition(success, error) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
