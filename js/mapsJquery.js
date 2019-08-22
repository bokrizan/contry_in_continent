$(document).ready(function() {
  //if you use multilanguage site, you can use this var for translate
  var africa = "Africa";
  var australia = "Australia";
  var europe = "Europe";
  var north_america = "North America";
  var south_america = "South America";
  var asia = "Asia";

  // CSSMap;
  $("#map-continents").CSSMap({
    size: 960,
    responsive: "auto",
    onClick: function(e) {
      var rLink = e
          .children("A")
          .eq(0)
          .attr("href"),
        rText = e
          .children("A")
          .eq(0)
          .text(),
        rClass = e.attr("class").split(" ")[0];

      if (rText == "Africa") {
        show_country(rText);
      } else if (rText == "Australia") {
        show_country(rText);
      } else if (rText == "Europe") {
        show_country(rText);
      } else if (rText == "North America") {
        show_country(rText);
      } else if (rText == "South America") {
        show_country(rText);
      } else if (rText == "Asia") {
        show_country(rText);
      }
    }
  });
  // END OF THE CSSMap;

  function backToMapJquery() {
    $(".includeContact")
      .empty()
      .append('<a class="backToMap pull-left" href="index.html"><img src="back.png"></a>');
  }

  function aaddContactTextSlovakiaJquery() {
    $(".europaContact")
      .empty()
      .append(
        '<div class="row col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
          '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-left pull-left ">' +
          '<div class="kontaktiBox">' +
          '<img src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png" style="padding-top: 10px; padding-bottom: 10px; width:150px"><br>' +
          "<h5>Title</h5>" +
          "<span>Address</span><br>" +
          "<span>City</span><br>" +
          "<span>Country</span><br>" +
          "<span>123456789</span><br>" +
          "<span>123456789</span><br>" +
          '<a href="mailto:">email</a><br>' +
          '<a target=blank href="">web</a>' +
          "</div>" +
          "</div>" +
          '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-left pull-left ">' +
          '<div class="kontaktiBox">' +
          '<img src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png" style="padding-top: 10px; padding-bottom: 10px; width:150px"><br>' +
          "<h5>Title</h5>" +
          "<span>Address</span><br>" +
          "<span>City</span><br>" +
          "<span>Country</span><br>" +
          "<span>123456789</span><br>" +
          "<span>123456789</span><br>" +
          '<a href="mailto:">email</a><br>' +
          '<a target=blank href="">web</a>' +
          "</div>" +
          "</div>" +
          '<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
          '<a class="backToMap pull-left" href="index"><img src="back.png"></a>' +
          "</div>" +
          "</div>"
      );
  }

  function addContactTextDefaultJquery() {
    $(".includeContact")
      .empty()
      .append(
        '<div class="row col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
          '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-left pull-left ">' +
          '<div class="kontaktiBox">' +
          '<img src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png" style="padding-top: 10px; padding-bottom: 10px; width:150px"><br>' +
          "<h5>Title</h5>" +
          "<span>Address</span><br>" +
          "<span>City</span><br>" +
          "<span>Country</span><br>" +
          "<span>123456789</span><br>" +
          "<span>123456789</span><br>" +
          '<a href="mailto:">email</a><br>' +
          '<a target=blank href="">web</a>' +
          "</div>" +
          "</div>" +
          '<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
          '<a class="backToMap pull-left" href="index"><img src="back.png"></a>' +
          "</div>" +
          "</div>"
      );
  }

  function addContactTextSwedenJquery() {
    $(".europaContact")
      .empty()
      .append(
        '<div class="row col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
          '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-left pull-left ">' +
          '<div class="kontaktiBox">' +
          '<img src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png" style="padding-top: 10px; padding-bottom: 10px; width:150px"><br>' +
          "<h5>Title</h5>" +
          "<span>Address</span><br>" +
          "<span>City</span><br>" +
          "<span>Country</span><br>" +
          "<span>123456789</span><br>" +
          "<span>123456789</span><br>" +
          '<a href="mailto:">email</a><br>' +
          '<a target=blank href="">web</a>' +
          "</div>" +
          "</div>" +
          '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-left pull-left ">' +
          '<div class="kontaktiBox">' +
          '<img src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png" style="padding-top: 10px; padding-bottom: 10px; width:150px"><br>' +
          "<h5>Title</h5>" +
          "<span>Address</span><br>" +
          "<span>City</span><br>" +
          "<span>Country</span><br>" +
          "<span>123456789</span><br>" +
          "<span>123456789</span><br>" +
          '<a href="mailto:">email</a><br>' +
          '<a target=blank href="">web</a>' +
          "</div>" +
          "</div>" +
          '<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
          '<a class="backToMap pull-left" href="index"><img src="back.png"></a>' +
          "</div>" +
          "</div>"
      );
  }

  function addContactTextFinlandJquery() {
    $(".europaContact")
      .empty()
      .append(
        '<div class="row col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
          '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-left pull-left ">' +
          '<div class="kontaktiBox">' +
          '<img src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png" style="padding-top: 10px; padding-bottom: 10px; width:150px"><br>' +
          "<h5>Title</h5>" +
          "<span>Address</span><br>" +
          "<span>City</span><br>" +
          "<span>Country</span><br>" +
          "<span>123456789</span><br>" +
          "<span>123456789</span><br>" +
          '<a href="mailto:">email</a><br>' +
          '<a target=blank href="">web</a>' +
          "</div>" +
          "</div>" +
          '<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
          '<a class="backToMap pull-left" href="index"><img src="back.png"></a>' +
          "</div>" +
          "</div>"
      );
  }

  function addContactTextNorwayJquery() {
    $(".europaContact")
      .empty()
      .append(
        '<div class="row col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
          '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-left pull-left ">' +
          '<div class="kontaktiBox">' +
          '<img src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png" style="padding-top: 10px; padding-bottom: 10px; width:150px"><br>' +
          "<h5>Title</h5>" +
          "<span>Address</span><br>" +
          "<span>City</span><br>" +
          "<span>Country</span><br>" +
          "<span>123456789</span><br>" +
          "<span>123456789</span><br>" +
          '<a href="mailto:">email</a><br>' +
          '<a target=blank href="">web</a>' +
          "</div>" +
          "</div>" +
          '<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
          '<a class="backToMap pull-left" href="index"><img src="back.png"></a>' +
          "</div>" +
          "</div>"
      );
  }

  // Point the javascript function to the jQuery function
  backToMap = backToMapJquery;
  addContactTextSlovakia = aaddContactTextSlovakiaJquery;
  addContactTextNorway = addContactTextNorwayJquery;
  addContactTextSweden = addContactTextSwedenJquery;
  addContactTextFinland = addContactTextFinlandJquery;
  addContactTextDefault = addContactTextDefaultJquery;
  show_countryJavaScript = show_country;

  function locationHashChanged() {
    if (location.hash.startsWith("#")) {
      show_countryJavaScript(decodeURI(location.hash).substring(1));
    }
  }

  //bind handler for next clicks
  window.onhashchange = locationHashChanged;

  //on page load call to init the right view
  locationHashChanged();

  function show_country(continent) {
    document.querySelectorAll('div[id$="_country"]').forEach(div => {
      div.style.display = "none";
      div.innerHTML = "";
    });
    document.querySelector("#parentMapsMoveResize").style.display = "none";
    let country_div = document.querySelector(`#${continent.toLowerCase()}_country`);
    if (country_div) {
      country_div.style.display = "block";
    }
    if (continent == "Africa") {
      $("#africa_country")
        .html(
          '<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center nasloviKontinenata"><h3>' +
            africa +
            '</h3></div><div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">' +
            '<div id="map-canvas"></div></div>' +
            '<div class="africaContact includeContact col-lg-6 col-md-6 col-sm-12 col-xs-12"></div></div>'
        )
        .show()
        .siblings("div")
        .hide()
        .click(initialize(3.98, 23.711, 3, -35.44612, -6.21938, 31.69458, 54.70633, 7, 3));
    } else if (continent == "Australia") {
      $("#australia_country")
        .html(
          '<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center nasloviKontinenata"><h3>' +
            australia +
            '</h3></div><div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">' +
            '<div id="map-canvas"></div></div>' +
            '<div class="australiaContact includeContact col-lg-6 col-md-6 col-sm-12 col-xs-12"></div></div>'
        )
        .show()
        .siblings("div")
        .hide()
        .click(initialize(-32.96, 143.16, 4, -39.89604, 109.44469, -5.9176, 149.27664, 7, 3));
    } else if (continent == "Asia") {
      $("#asia_country")
        .html(
          '<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center nasloviKontinenata"><h3>' +
            asia +
            '</h3></div><div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">' +
            '<div id="map-canvas"></div></div>' +
            '<div class="asiaContact includeContact col-lg-6 col-md-6 col-sm-12 col-xs-12"></div></div>'
        )
        .show()
        .siblings("div")
        .hide()
        .click(initialize(31.78, 100.79, 3, 24.22318, 45.81187, 77.62809, 176.34696, 7, 3));
    } else if (continent == "Europe") {
      $("#europe_country")
        .html(
          '<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center nasloviKontinenata"><h3>' +
            europe +
            '</h3></div><div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">' +
            '<div id="map-canvas"></div></div>' +
            '<div class="europaContact includeContact col-lg-6 col-md-6 col-sm-12 col-xs-12"></div></div>'
        )
        .show()
        .siblings("div")
        .hide()
        .click(initialize(50.84, 7.83, 5, 37.73271, -12.19594, 68.80166, 31.15165, 7, 4));
    } else if (continent == "North America") {
      $("#north_a_country")
        .html(
          '<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center nasloviKontinenata"><h3>' +
            north_america +
            '</h3></div><div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">' +
            '<div id="map-canvas"></div></div>' +
            '<div class="northAmericaContact includeContact col-lg-6 col-md-6 col-sm-12 col-xs-12"></div></div>'
        )
        .show()
        .siblings("div")
        .hide()
        .click(initialize(52.74, -107.14, 3, 20.2403, -164.0682, 73.60993, -63.43875, 7, 3));
    } else if (continent == "South America") {
      $("#south_a_country")
        .html(
          '<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center nasloviKontinenata"><h3>' +
            south_america +
            '</h3></div><div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">' +
            '<div id="map-canvas"></div></div>' +
            '<div class="southAmericaContact includeContact col-lg-6 col-md-6 col-sm-12 col-xs-12"></div></div>'
        )
        .show()
        .siblings("div")
        .hide()
        .click(initialize(-26.41, -71.96, 4, -56.74293, -87.25454, 18.02478, -36.17257, 7, 3));
    }
  }
});

backToMap = null;
addContactTextNorway = null;
addContactTextSweden = null;
addContactTextFinland = null;
addContactTextSlovakia = null;
addContactTextDefault = null;

// the map
var map;
//if we want use markers setMarkers(map);
// var countries = [
//     ['Croatia', 44.526728, 15.725034],
//     ['Slovakia', 48.820412, 19.299670],
//     ['Norway', 61.724424, 9.544532]
//   ];

//   function setMarkers(map) {
//     var image = {
//       src: '../img/google-maps-grey.png',
//       // This marker is 20 pixels wide by 32 pixels high.
//       size: new google.maps.Size(20, 32),
//       // The origin for this image is (0, 0).
//       origin: new google.maps.Point(0, 0),
//       // The anchor for this image is the base of the flagpole at (0, 32).
//       anchor: new google.maps.Point(0, 32)
//     };
//     for (var i = 0; i < countries.length; i++) {
//       var countryMarker = countries[i];
//       var marker = new google.maps.Marker({
//         position: {lat: countryMarker[1], lng: countryMarker[2]},
//         map: map,
//         icon: "img/google-maps-grey.png",
//         title: countryMarker[0]
//       });

//     }

//   }

function initialize(x_coo, y_coo, zoom_coo, x_a_coo, y_a_coo, x_b_coo, y_b_coo, max_zoom, min_zoom) {
  backToMap();
  var myOptions = {
    zoom: zoom_coo,
    minZoom: min_zoom,
    maxZoom: max_zoom,
    center: new google.maps.LatLng(x_coo, y_coo),
    //gestureHandling: 'none',
    zoomControl: true,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // initialize the map
  map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
  //   setMarkers(map);

  // these are the map styles
  var styles = [
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        {
          color: "#a8a8a8"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on"
        },
        {
          hue: "#ff0000"
        },
        {
          saturation: "-16"
        },
        {
          lightness: "-24"
        },
        {
          gamma: "1.46"
        },
        {
          weight: "1"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          saturation: -100
        },
        {
          lightness: 60
        },
        {
          visibility: "on"
        },
        {
          color: "#e2e2e2"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#b6c54c"
        },
        {
          lightness: 40
        },
        {
          saturation: -40
        }
      ]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ef8c25"
        },
        {
          lightness: 40
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "all",
      stylers: [
        {
          saturation: -100
        },
        {
          lightness: 40
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          saturation: -100
        },
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified"
        },
        {
          lightness: 30
        },
        {
          color: "#ffffff"
        },
        {
          saturation: "16"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }
  ];

  map.setOptions({
    styles: styles
  });

  // Initialize JSONP request
  var script = document.createElement("script");
  var url = ["https://www.googleapis.com/fusiontables/v2/query?"];
  url.push("sql=");
  var query = "SELECT name, kml_4326 FROM " + "1foc3xO9DyfSIF6ofvN0kp2bxSfSeKog5FbdWdQ";
  var encodedQuery = encodeURIComponent(query);
  url.push(encodedQuery);
  url.push("&callback=drawMap");
  url.push("&key=add apiKeyHere");
  script.src = url.join("");
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(script);

  // bounds of the desired area
  var allowedBounds = new google.maps.LatLngBounds(new google.maps.LatLng(x_a_coo, y_a_coo), new google.maps.LatLng(x_b_coo, y_b_coo));

  var boundLimits = {
    maxLat: allowedBounds.getNorthEast().lat(),
    maxLng: allowedBounds.getNorthEast().lng(),
    minLat: allowedBounds.getSouthWest().lat(),
    minLng: allowedBounds.getSouthWest().lng()
  };

  var lastValidCenter = map.getCenter();
  var newLat, newLng;
  google.maps.event.addListener(map, "center_changed", function() {
    center = map.getCenter();
    if (allowedBounds.contains(center)) {
      // still within valid bounds, so save the last valid position
      lastValidCenter = map.getCenter();
      return;
    }
    newLat = lastValidCenter.lat();
    newLng = lastValidCenter.lng();
    if (center.lng() > boundLimits.minLng && center.lng() < boundLimits.maxLng) {
      newLng = center.lng();
    }
    if (center.lat() > boundLimits.minLat && center.lat() < boundLimits.maxLat) {
      newLat = center.lat();
    }
    map.panTo(new google.maps.LatLng(newLat, newLng));
  });
}

function drawMap(data) {
  var rows = data["rows"];
  for (var i in rows) {
    if (rows[i][0] != "Antarctica") {
      var newCoordinates = [];
      var geometries = rows[i][1]["geometries"];
      if (geometries) {
        for (var j in geometries) {
          newCoordinates.push(constructNewCoordinates(geometries[j]));
        }
      } else {
        newCoordinates = constructNewCoordinates(rows[i][1]["geometry"]);
      }
      var country = new google.maps.Polygon({
        paths: newCoordinates,
        strokeColor: "#a8a8a8",
        strokeOpacity: 0,
        strokeWeight: 0.3,
        fillColor: "#a8a8a8",
        fillOpacity: 0,
        name: rows[i][0]
      });
      google.maps.event.addListener(country, "mouseover", function() {
        this.setOptions({
          fillOpacity: 0.4
        });
      });
      google.maps.event.addListener(country, "mouseout", function() {
        this.setOptions({
          fillOpacity: 0
        });
      });
      google.maps.event.addListener(country, "click", function() {
        alert(this.name);
        if (this.name == "Norway") {
          addContactTextNorway();
        } else if (this.name == "Sweden") {
          addContactTextSweden();
        } else if (this.name == "Finland") {
          addContactTextFinland();
        } else if (this.name == "Slovakia") {
          addContactTextSlovakia();
        } else if (this.name == "Croatia") {
          addContactTextDefault();
        } else {
          addContactTextDefault();
        }
      });

      country.setMap(map);
    }
  }
}

function constructNewCoordinates(polygon) {
  var newCoordinates = [];
  var coordinates = polygon["coordinates"][0];
  for (var i in coordinates) {
    newCoordinates.push(new google.maps.LatLng(coordinates[i][1], coordinates[i][0]));
  }
  return newCoordinates;
}
