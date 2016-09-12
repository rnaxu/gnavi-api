export default class Pager {
  constructor($pager) {
    this.$pager = $pager;
  }

  init(totalPageCount) {
    this.insertTortalPageCount(totalPageCount);
  }

  insertTortalPageCount(totalPageCount) {
    this.$pager.find('.js-pager-total').text(` / ${totalPageCount}`);
  }
}