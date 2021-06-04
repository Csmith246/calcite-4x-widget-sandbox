import "@esri/calcite-components/dist/calcite/calcite.css";
import {
  defineCustomElements
} from "@esri/calcite-components/dist/loader";
defineCustomElements(window);

// Import stylesheets
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

import "./style.scss";
import RootCalciteArea from './calcite-4x-widgets/root';

const map = new Map({
  basemap: 'streets-vector'
});

const view = new MapView({
  map,
  container: "map",
  scale: 5000000,
  center: [-77, 43]
});

const myModal1 = new RootCalciteArea({
  container: "calcite-test-area"
});
