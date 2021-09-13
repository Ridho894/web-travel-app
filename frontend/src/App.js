import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Room } from '@material-ui/icons'
function App() {
  const [viewport, setViewPort] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 4
  });
  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewPort => setViewPort(nextViewPort)}
        mapStyle="mapbox://styles/kakid/cktj12at33wxg17r4paxf0mxq"
      >
        <Marker latitude={48.858093} longitude={2.294694} offsetLeft={-20} offsetTop={-10}>
          <Room style={{ fontSize: viewport.zoom * 7 }} />
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default App;
