import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { Room, Star } from '@material-ui/icons'
import axios from 'axios'

function App() {
  const [pins, setPins] = useState([])

  const [viewport, setViewPort] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 4,
  });

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins")
        setPins(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPins()
  }, [])

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewPort => setViewPort(nextViewPort)}
        mapStyle="mapbox://styles/kakid/cktkmqmiz87ti17n70uh8nyv8"
        minZoom={4}
      >
        {pins.map(p => (
          <Marker latitude={p.lat} longitude={p.long} offsetLeft={-20} offsetTop={-10}>
            <Room style={{ fontSize: viewport.zoom * 7 }} />
          </Marker>
          /* <Popup
            latitude={48.858093}
            longitude={2.294694}
            closeButton={true}
            closeOnClick={false}
            anchor="left"
          >
            <div>
              <div>
                <label className={"text-red-800 border-b-2 border-red-800"}>Place</label>
                <h4>Eiffel Tower</h4>
              </div>
              <div>
                <label className={"text-red-800 border-b-2 border-red-800"}>Review</label>
                <p>Beautiful Place, I like it.</p>
              </div>
              <div>
                <label className={"text-red-800 border-b-2 border-red-800"}>Rating</label>
                <div>
                  <Star style={{ color: 'gold' }} />
                  <Star style={{ color: 'gold' }} />
                  <Star style={{ color: 'gold' }} />
                  <Star style={{ color: 'gold' }} />
                  <Star style={{ color: 'gold' }} />
                </div>
              </div>
              <label className={"text-red-800 border-b-2 border-red-800"}>Information</label>
              <div className={"flex flex-col"}>
                <span>Created by: <b>Muhamad Ridho</b></span>
                <span>1 Hour ago</span>
              </div>
            </div>
          </Popup> */
        ))}
      </ReactMapGL>
    </div>
  );
}

export default App;
