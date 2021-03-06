'use strict';

/**
 * Servicio que se encarga de la gestión pois
 */
angular.module('frontend')

    .service('StatsService', ['$http','$rootScope',
        function ($http,$rootScope) {


            var self = this;


            var broadcastAlert = function(message){
                $rootScope.$broadcast("errorMessage",
                    { message: message });
            };

            self.getRoutesValidCount = function (username) {
                return $http.get("/stats/users/" + username + "/routes/validCount")
                    .then(function (response) {

                        return response.data.message.count;

                    })
                    .catch(function (exception) {

                        broadcastAlert("Route stats error");
                        console.error(exception);
                    });

            };

            self.getPoisValidCount = function (username){
                return $http.get("/stats/users/" + username + "/pois/validCount")
                    .then(function (response) {

                        return response.data.message.count;

                    })
                    .catch(function (exception) {

                        broadcastAlert("Pois stats error");
                        console.error(exception);
                    });
            };

            self.getAvgPoiElevation = function(username){
                return $http.get("/stats/users/" + username + "/pois/avgElevation")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Route stats error");

                        console.error(exception);
                    });

            };

            self.getAvgRouteDistance = function(username){
                return $http.get("/stats/users/" + username + "/routes/avgDistance")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Route stats error");

                        console.error(exception);
                    });

            };

            self.getMaxPoiElevation = function(username){
                return $http.get("/stats/users/" + username + "/pois/maxElevation")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Pois stats error");

                        console.error(exception);
                    });

            };


            self.getMaxDistanceRoute = function(username){
                return $http.get("/stats/users/" + username + "/routes/maxDistance")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Route stats error");

                        console.error(exception);
                    });

            };

            self.getMinPoiElevation = function(username){
                return $http.get("/stats/users/" + username + "/pois/minElevation")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Route stats error");

                        console.error(exception);
                    });

            };



            self.getMinDistanceRoute = function(username){
                return $http.get("/stats/users/" + username + "/routes/minDistance")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Route stats error");

                        console.error(exception);
                    });

            };

            self.getAvgRouteTime = function(username){
                return $http.get("/stats/users/" + username + "/routes/avgTime")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Route stats error");

                        console.error(exception);
                    });

            };

            self.getMaxTimeRoute = function(username){
                return $http.get("/stats/users/" + username + "/routes/maxTime")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Route stats error");

                        console.error(exception);
                    });

            };

            self.getMinTimeRoute = function(username){
                return $http.get("/stats/users/" + username + "/routes/minTime")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Route stats error");

                        console.error(exception);
                    });

            };

            self.getRoutesGroupedByDistance = function(username){
                return $http.get("/stats/users/" + username + "/routes/groupedByDistance")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Route stats error");

                        console.error(exception);
                    });
            };

            self.getPoisGroupedByCity = function(username){
                return $http.get("/stats/users/" + username + "/pois/groupedByCity")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Poi stats error");

                        console.error(exception);
                    });
            };

            self.getPoisGroupedByCountry = function(username){
                return $http.get("/stats/users/" + username + "/pois/groupedByCountry")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Poi stats error");

                        console.error(exception);
                    });
            };

            self.getRoutesGroupedByTime = function(username){
                return $http.get("/stats/users/" + username + "/routes/groupedByTime")
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Route stats error");

                        console.error(exception);
                    });
            };


            self.getTotalPois = function(){

                return $http.get('/stats/admin/totalPois')
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Error getting total pois");

                        console.error(exception);
                    });
            };


            self.getTotalRoutes = function(){

                return $http.get('/stats/admin/totalRoutes')
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Error getting total routes");

                        console.error(exception);
                    });
            };

            self.getAccessesToday = function(){

                return $http.get('/stats/admin/accessesToday')
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Error getting accesses today");

                        console.error(exception);
                    });
            };

            self.getPoisInSystem = function(){
                return $http.get('/stats/admin/poisInSystem')
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Error getting pois in system");

                        console.error(exception);
                    });
            };

            self.getUsersInOut = function(){
                return $http.get('/stats/admin/usersInOut')
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Error getting users in/out");

                        console.error(exception);
                    });
            };

            self.getRoutesInSystem = function(){
                return $http.get('/stats/admin/routesInSystem')
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Error getting users in/out");

                        console.error(exception);
                    });
            };

            self.getAccessesByHour = function(){
                return $http.get('/stats/admin/accessesByHour')
                    .then(function(response){

                        return response.data.message;

                    })
                    .catch(function(exception){

                        broadcastAlert("Error getting users in/out");

                        console.error(exception);
                    });
            };







        }]);
