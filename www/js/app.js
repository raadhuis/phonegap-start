var app = angular.module("MyRaadhuisApp", []);

app.factory('instagram', ['$http', function ($http) {
    return {
        fetchUrl: function (endPoint, callback) {
            $http.jsonp(endPoint).success(function (response) {
                callback(response);
            });
        }
    };
}]);

app.controller('MyRaadhuisAppController', ['$scope', 'instagram', function ($scope, instagram) {

    $scope.pics = [];
    $scope.have = [];

    $scope.getInstagram = function (url) {

        return instagram.fetchUrl(url, function (data) {
            if (typeof data.pagination.next_url === 'string') {
                $scope.getInstagram(data.pagination.next_url + '&callback=JSON_CALLBACK');
            }

            for (var i = 0; i < data.data.length; i++) {
                $scope.pics.push(data.data[i]);
                $scope.have[data.data[i].id] = "1";
            }
        });
    };
    $scope.render = function () {
        return $scope.getInstagram('https://api.instagram.com/v1/users/1588778368/media/recent/?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK');
    };
}]);