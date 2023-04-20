import * as Location from "expo-location";

export async function getCurrentLocation() {
  return new Promise(async (resolve, reject) => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      reject({
        label: "Location permission denied",
        message: "You need to enable location permission to use this app",
      });
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    resolve(coords);
    // setLocation(coords);
  });
}

export async function fetchAddress(latitude, longitude) {
  return new Promise(async (resolve, reject) => {
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        latitude +
        "," +
        longitude +
        "&key=AIzaSyAV4hI7oKB7SIZZnU3TnV9RyDyw8WWiFLw"
    )
      .then((response) => response.json())
      .then((json) => {
        const newAddress = json.results[0].formatted_address;
        resolve(newAddress);
      })
      .catch((error) =>
        reject({
          label: "Opps!",
          message: "We can't fetch your location",
        })
      );
  });
}
