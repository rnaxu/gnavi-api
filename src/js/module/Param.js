export default class Param {
  /**
   * ハッシュを取得
   *
   * @return { String } ハッシュ
   *
   */
  getHash() {
    return window.location.hash;
  }

  /**
   * パラメータのオブジェクトを生成
   *
   * @param { String } originParam パラメータ
   * @param { String } type ? or #
   * @return { Object }
   *
   */
  createParamObj(originParam, type) {
    const result = {};

    // ?または#より後ろを取得
    const hashes = originParam.split(type)[1];

    // ハッシュが存在したら
    if (hashes) {
      // &で文字列を配列に分割
      const params = hashes.split('&');

      params.forEach((v) => {
        // keyとvalueに分割
        const param = v.split('=');
        const key = param[0];
        const val = param[1];

        result[key] = val;
      });
    }

    return result;
  }

  /**
   * パラメータの文字列を生成
   *
   * @param { Object } originParam パラメータ
   * @return { String }
   *
   */
  createParamString(originParam) {
    let result = '';

    Object.keys(originParam).forEach((key) => {
      result += `&${key}=${originParam[key]}`;
    });

    return result;
  }
}
