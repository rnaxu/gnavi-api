export default class Map {
  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById('js-map'), {
      center: {
        lat: -34.397,
        lng: 150.644,
      },
      zoom: 8,
    });
  }

  init() {
    console.log(this.gooogleMap);
  }
}
