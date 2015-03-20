				<script>
L.mapbox.accessToken = 'pk.eyJ1IjoiYmxha2UxMjMyMSIsImEiOiJDWlk5XzhVIn0.yedkM0DTBDVLleI7ysHGyg';
var map = L.mapbox.map('map', 'examples.map-h67hf2ic', {
  zoomControl: false
}).setView([38.2489863, -85.7564289], 15);

// Disable drag and zoom handlers.
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

// Disable tap handler, if present.
if (map.tap) map.tap.disable();
</script>