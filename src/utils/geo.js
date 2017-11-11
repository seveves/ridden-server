function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function getDistanceBetweenInKm(locationA, locationB) {
  const radiusOfEarthinKm = 6371;
  const latInDegree = deg2rad(locationB.lat - locationA.lat); 
  const lonInDegree = deg2rad(locationB.lon - locationA.lon); 
  const a = 
    Math.sin(latInDegree / 2) * Math.sin(latInDegree / 2) +
    Math.cos(deg2rad(locationA.lat)) * Math.cos(deg2rad(locationB.lat)) * 
    Math.sin(lonInDegree / 2) * Math.sin(lonInDegree / 2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  const distance = radiusOfEarthinKm * c;
  return distance;
}

module.exports = { getDistanceBetweenInKm };
