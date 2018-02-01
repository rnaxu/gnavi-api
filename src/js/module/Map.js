export default class Map {
  constructor(position) {
    this.googleMap = new google.maps.Map(document.getElementById('js-map'), {
      center: {
        lat: position.latitude,
        lng: position.longitude,
      },
      zoom: 15,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
    });
  }
}
