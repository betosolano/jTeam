'use strict';

/**
 * @ngdoc function
 * @name hackatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackatonApp
 */
angular.module('hackatonApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $('#modal-welcome').modal('show');
	initialize();
  });
var temp = "";
var educationLayer, medicineLayer, securityLayer, recreationLayer, environmentLayer, transportationLayer, businessLayer, map; 

function enableMarker(){
    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(10.133472, -83.990512),
    title:"Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
    
    google.maps.event.addListener(marker, 'click', function(event) {
        location.href = "#/zonedetails"
    });
}


function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(10.133472, -83.990512)
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

    google.maps.event.addListener(map, "rightclick", function(event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    // populate yor box/field with lat, lng
    temp += ("new google.maps.LatLng(" + lat + "," + lng + "),");
    
    });
    //initData();

}
function toggleMapLayer(element){
    enableMarker();
    switch(element){
            case "education":
                if(educationLayer == undefined){
                    var pointArray = new google.maps.MVCArray(educationData());
                    educationLayer = new google.maps.visualization.HeatmapLayer({
                        data: pointArray
                    });
                }
                educationLayer.setMap(educationLayer.getMap() ? null : map);
                break;
            case "medicine":
                if(medicineLayer == undefined){
                    var pointArray = new google.maps.MVCArray(medicineData());
                    medicineLayer = new google.maps.visualization.HeatmapLayer({
                        data: pointArray
                    });
                }
                medicineLayer.setMap(medicineLayer.getMap() ? null : map);
                break;
            case "security":
                if(securityLayer == undefined){
                    var pointArray = new google.maps.MVCArray(securityData());
                    securityLayer = new google.maps.visualization.HeatmapLayer({
                        data: pointArray
                    });
                }
                securityLayer.setMap(securityLayer.getMap() ? null : map);
                break;
            case "recreation":
                if(recreationLayer == undefined){
                    var pointArray = new google.maps.MVCArray(recreationData());
                    recreationLayer = new google.maps.visualization.HeatmapLayer({
                        data: pointArray
                    });
                }
                recreationLayer.setMap(recreationLayer.getMap() ? null : map);
                break;
            case "environment":
                if(environmentLayer == undefined){
                    var pointArray = new google.maps.MVCArray(environmentData());
                    environmentLayer = new google.maps.visualization.HeatmapLayer({
                        data: pointArray
                    });
                }
                environmentLayer.setMap(environmentLayer.getMap() ? null : map);
                break;
            case "transportation":
                if(transportationLayer == undefined){
                    var pointArray = new google.maps.MVCArray(transportationData());
                    transportationLayer = new google.maps.visualization.HeatmapLayer({
                        data: pointArray
                    });
                }
                transportationLayer.setMap(transportationLayer.getMap() ? null : map);
                break;
            case "business":
                if(businessLayer == undefined){
                    var pointArray = new google.maps.MVCArray(businessData());
                    businessLayer = new google.maps.visualization.HeatmapLayer({
                        data: pointArray
                    });
                }
                businessLayer.setMap(businessLayer.getMap() ? null : map);
                break;
    }
}
	