/* global GNAVI:false */

import Hoge from './module/Hoge';

(function (NS) {
  NS.request = new Hoge();
})(window.GNAVI = window.GNAVI || {});

GNAVI.request.done();