function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.querySelector("#address").innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    const latitude = position.coords.latitude.toFixed(6); // Formater la latitude à 6 décimales
    const longitude = position.coords.longitude.toFixed(6); // Formater la longitude à 6 décimales

    // Remplir le champ d'adresse avec les coordonnées
    const latlon = `${latitude},${longitude}`;
    document.querySelector("#address").value = latlon;

    // Générer et afficher la carte Google Maps
    const img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&markers=color:red|${latlon}&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
    document.querySelector("#map").innerHTML = `<img src="${img_url}" alt="Map">`;
}

  
  function showError(error) {
    let message = "An unknown error occurred.";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        message = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        message = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        message = "The request to get user location timed out.";
        break;
    }
    document.querySelector("#map").innerHTML = message;
  }
