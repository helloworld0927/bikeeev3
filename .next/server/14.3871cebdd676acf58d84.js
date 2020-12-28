exports.ids = [14];
exports.modules = {

/***/ "Jhew":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("L/bp");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mapbox_polyline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/5sa");
/* harmony import */ var _mapbox_polyline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mapbox_polyline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QvEX");
/* harmony import */ var use_media__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_media__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




let latLngCircleSize = 10;
let latLngCircleOpacity = 1;
const style = {
  top: 0,
  bottom: 0,
  width: "100%",
  position: "absolute"
};

const Map = props => {
  const mapContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const [map, setMap] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const mediaDarkMode = use_media__WEBPACK_IMPORTED_MODULE_3___default()("(prefers-color-scheme: dark)"); // const [darkMode, setDarkMode] = React.useState(mediaDarkMode)

  let decodedPolyline = _mapbox_polyline__WEBPACK_IMPORTED_MODULE_2___default.a.toGeoJSON(props.activitySummary.map.polyline);
  let decodedPolylineCoordinates = decodedPolyline.coordinates;
  mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.accessToken = "pk.eyJ1IjoicDBwbWFrZXIiLCJhIjoiY2lzOXliOGlrMDA2ODJ5bzJ4YjNnb29qdSJ9.hf19Sca7oYCcR8kRlx07Rw";
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let mapTheme;

    if (mediaDarkMode) {
      // console.log("dark mode");
      mapTheme = "mapbox://styles/mapbox/dark-v10";
    } else {
      // console.log("light mode");
      mapTheme = "mapbox://styles/p0pmaker/cjrf0kzjd4xde2tqwor6ltd0u";
    }

    let map;

    const initializeMap = ({
      setMap,
      mapContainer
    }) => {
      // console.log("init map");
      map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.Map({
        container: mapContainer.current,
        style: mapTheme,
        center: [props.activitySummary.start_latlng[1], props.activitySummary.start_latlng[0]],
        zoom: 10
      });
      map.on("load", () => {
        setMap(map);
        map.resize();
        map.addLayer({
          id: "start",
          type: "circle",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {
                description: "Activitiy Start"
              },
              geometry: {
                type: "Point",
                coordinates: decodedPolylineCoordinates[0]
              }
            }
          },
          paint: {
            "circle-color": "#f03434",
            "circle-radius": latLngCircleSize,
            "circle-opacity": latLngCircleOpacity
          }
        });
        map.addLayer({
          id: "end",
          type: "circle",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {
                description: "Activitiy End"
              },
              geometry: {
                type: "Point",
                coordinates: decodedPolylineCoordinates.pop()
              }
            }
          },
          paint: {
            "circle-color": "#479C1F",
            "circle-radius": latLngCircleSize,
            "circle-opacity": latLngCircleOpacity
          }
        });
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: decodedPolylineCoordinates
              }
            }
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": "#0a67f2",
            "line-width": 2
          }
        }); // Geographic coordinates of the LineString

        var coordinates = decodedPolylineCoordinates; // Pass the first coordinates in the LineString to `lngLatBounds` &
        // wrap each coordinate pair in `extend` to include them in the bounds
        // result. A variation of this technique could be applied to zooming
        // to the bounds of multiple Points or Polygon geomteries - it just
        // requires wrapping all the coordinates with the extend method.

        var bounds = coordinates.reduce(function (bounds, coord) {
          return bounds.extend(coord);
        }, new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.LngLatBounds(coordinates[0], coordinates[0]));
        map.fitBounds(bounds, {
          padding: 80
        });
      });
    };

    if (!map) initializeMap({
      setMap,
      mapContainer
    });
  }, [mediaDarkMode]);
  return __jsx("div", {
    style: style,
    ref: el => mapContainer.current = el
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

};;