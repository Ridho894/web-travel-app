import { useState } from 'react'
import ReactMapGL from 'react-map-gl'

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
      />
    </div>
  );
}

export default App;
