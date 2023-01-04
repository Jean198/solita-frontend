import L from "leaflet";
import iconUrl from "../assets/images/leaflet-images/marker-icon.png";
import iconShadow from "../assets/images/leaflet-images/marker-shadow.png";

const { iconSize, shadowSize, iconAnchor, popupAnchor, tooltipAnchor } =L.Marker.prototype.options.icon.options;

export const defaultIcon = new L.Icon({
  iconUrl,
  iconShadow,
  iconSize,
  shadowSize,
  iconAnchor,
  popupAnchor,
  tooltipAnchor,
});
