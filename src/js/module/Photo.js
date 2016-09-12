export default class Photo {
  constructor($wrapper, $hitCounter) {
    this.$wrapper = $wrapper;
    this.$hitCounter = $hitCounter;
  }

  checkResDatas(resDatas) {
    console.dir(resDatas);

    for (let i in resDatas) {
      let photoData = resDatas[i].photo;

      if (typeof photoData !== 'undefined') {
        this.insertPhotoData(photoData);
      }
    }
  }

  insertPhotoData(photoData) {
    this.$wrapper.append(`
      <a href="${photoData.shop_url}"class="media">
        <div class="media__thumbnail" style="background-image: url('${photoData.image_url.url_320}')">
        </div>
        <div class="media__body">
          <p class="media__shop">${photoData.shop_name}</p>
          <p class="media__comment">${photoData.comment}</p>
        </div>
      </a>
    `);
  }

  insertTotalHit(totalHit) {
    this.$hitCounter.text(totalHit);
  }

}