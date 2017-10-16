angular.module('app', [])
    .controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {
    $scope.images = [];

    $scope.addImage = function(img) {
        $scope.images.push({
            picName: img.name,
            picUrl: img.url,
            picWidth: 500,
            picIndex: 1,
            picLeft: 700,
            picTop: 200
        });
        img.name = '';
        img.url = '';
        console.log($scope.images);
    }
}