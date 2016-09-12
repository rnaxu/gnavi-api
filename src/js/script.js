import Request from './module/Request';
import Photo from './module/Photo';
import Pager from './module/Pager';

(() => {
  const pager = new Pager($('.js-pager'));

  /*
   * レストラン検索API
   */
  const restApiUrl = 'http://api.gnavi.co.jp/RestSearchAPI/20150630/';

  const restApiParams = {
    keyid: '8c8ab0e508ecb3929c2935b427f8ae7a',
    format: 'json',
    areacode_l: 'AREAL8200'
  };

  const restApiRequest = new Request(restApiUrl, restApiParams);

  restApiRequest.init()
    .always(()=> {
      console.log('レストラン検索API');
    })
    .done((data)=> {
      console.dir(data);
    })
    .fail(()=> {
      console.warn('fail');
    });

  /*
   * 多言語版レストラン検索API
   */
  const foreignApiUrl = 'http://api.gnavi.co.jp/ForeignRestSearchAPI/20150630/';

  const foreignParams = {
    keyid: '8c8ab0e508ecb3929c2935b427f8ae7a',
    format: 'json',
    areacode_l: 'AREAL8200'
  };

  const foreignApiRequest = new Request(foreignApiUrl, foreignParams);

  foreignApiRequest.init()
    .always(()=> {
      console.log('多言語版レストラン検索API');
    })
    .done((data)=> {
      console.dir(data);
    })
    .fail(()=> {
      console.warn('fail');
    });

  /*
   * 応援口コミAPI
   */
  const photo = new Photo($('.js-wrapper'), $('.js-hitCounter'));

  const photoApiUrl = 'http://api.gnavi.co.jp/PhotoSearchAPI/20150630/';

  const photoParams = {
    keyid: '8c8ab0e508ecb3929c2935b427f8ae7a',
    format: 'json',
    area: '沖縄'
    // latitude: 26.2741338,
    // longitude: 127.7273493
  };

  const photoApiRequest = new Request(photoApiUrl, photoParams);

  photoApiRequest.init()
    .always(()=> {
      console.log('応援口コミAPI');
    })
    .done((data)=> {
      if (data.response.total_hit_count > 0) {
        photo.insertTotalHit(data.response.total_hit_count);
        photo.checkResDatas(data.response);
      } else {
        console.log('No results.');
      }

      if (data.response.hit_per_page > 0) {
        pager.init(data.response.hit_per_page);
      }
    })
    .fail(()=> {
      console.warn('error.');
    });

})();
