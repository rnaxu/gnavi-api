// import Hash from './module/Hash';
import Geo from './module/Geo';
import Map from './module/Map';

// const hash = new Hash();
const geo = new Geo();
const map = new Map();

if (geo.isAvailableGeolocation) {
  geo.getCurrentPosition(map.initMap, map.error);
}
