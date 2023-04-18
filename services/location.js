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
