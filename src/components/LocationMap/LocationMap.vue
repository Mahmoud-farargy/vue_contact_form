<template>
    <div id="leafletMap">
          <div id="mapid"></div>
    </div>
</template>

<script>
import leaflet from "leaflet";
import { mapBoxToken } from "@/config/info";
export default {
    data() {
        return {
          mapInitData: {}
        }
    },
    mounted() {
      this.mapInitData = leaflet.map("mapid", {
          dragging: false
      });
                const lat = "31.2470";
                const lon = "29.9697";
                if(lat && lon){
                  this.mapInitData?.setView([lat, lon], 13);
                  const marker = leaflet.marker([lat, lon]).addTo(this.mapInitData);
                  marker.bindPopup("San Stefano, Alexandria").openPopup();
                }
          leaflet
            .tileLayer(
              `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapBoxToken}`,
              {
                attribution: "Mahmoud Farargy",
                maxZoom: 18,
                id: "mapbox/streets-v11",
                tileSize: 512,
                zoomOffset: -1,
                accessToken: mapBoxToken,
              }
            )
            .addTo(this.mapInitData);    
    },
}
</script>

<style>
        #mapid {
            border-radius: 4px;
            width:100%;
            z-index: 10;
            height: 230px;
        }
        /* .leaflet-tile {
            filter: hue-rotate(180deg) invert(80%);
            -webkit-filter: hue-rotate(180deg) invert(80%);
        } */
        @media only screen and (max-width: 670px) {
                  #mapid {
                      height: 200px;
                      border-radius: 0;
                  }
                  #leafletMap {
                      padding-left: 0;
                      padding-right: 0;
                      margin:0;
                  }
        }
</style>