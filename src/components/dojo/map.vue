<template>
  <div id='overall' class="claro">
    <!-- <appheader></appheader> -->
    <div id='map'></div>
    <!-- <appfooter></appfooter> -->
  </div>
</template>
 <style lang='less'>
@import url('http://static.gis-space.com:8123/arcgis_api/3.21compact/dijit/themes/claro/claro.css');
@import url('http://static.gis-space.com:8123/arcgis_api/3.21compact/esri/css/esri.css');
#map {
  position: absolute;;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

<script>
// import appheader from '@/components/header'
// import appfooter from '@/components/footer'
import esriLoader from 'esri-loader'
export default {
  name: 'overall',
  data () {
    return {
      map: { 'loaded': '' }
    }
  },
  methods: {
    createMap: function () {
      esriLoader.dojoRequire(['esri/map', 'dojo/domReady!'], (Map) => {
        this.map = new Map('map', {
          center: [118.35, 31.565],
          zoom: 10,
          logo: false,
          basemap: 'osm'
        })
      })
    }
  },
  mounted: function () {
    if (!esriLoader.isLoaded()) {
      // preload the ArcGIS API
      esriLoader.bootstrap((err) => {
        if (err) {
          // handle any loading errors
          console.error(err)
        } else {
          // optionall execute any code once it's preloaded
          this.createMap()
        }
      },
        {
          url: 'http://static.gis-space.com:8123/arcgis_api/3.21compact/init.js'
        })
    }
  }
}
</script>

