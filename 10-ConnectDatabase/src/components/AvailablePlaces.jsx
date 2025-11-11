import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";

import { sortPlacesByDistance } from "../loc.js";
import {fetchAvailablePlaces} from '../http.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  // rest of code...
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        // const response = await fetch("http://localhost:3000/places");
        // const resData = await response.json();

        // if (!response.ok) {
        //   throw new Error("Failed to fetch places");
        // }
        const places = await fetchAvailablePlaces()
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });

        // setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, please try again later!",
        });
        setIsFetching(false);
      }
      // setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An Error occured" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
