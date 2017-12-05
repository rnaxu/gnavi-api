export default class Hash {
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
   * ハッシュの配列を生成
   *
   * @param { String } ハッシュ
   * @return { Array }
   *
   */
  createHashArray(originHash) {
    const result = [];
    const hash = originHash.split('#')[1];

    console.log(hash);

    // // ハッシュが存在したら
    // if (hash) {
    //   // 区切り記号（＆）で文字列を配列に分割
    //   const params = query.split('&')

    //   params.forEach((v) => {
    //     // keyとvalueに分割
    //     const element = v.split('=')

    //     const param = {
    //       key: element[0],
    //       value: element[1],
    //     }

    //     // 配列に追加
    //     result.push(param)
    //   })
    // }
    // return result
  }
}
