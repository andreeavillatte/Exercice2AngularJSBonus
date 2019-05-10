// // On a declaré une variable pour avoir l'application, on cree un modul qui s'appelle MyApp
// var app = angular.module('myApp',[]);
// // on a cree un controleur testCtrl avec une dependence SERVICE scope. Ce controlleur est atache au modele MyApp
// app.controller('TestCtrl', ['$scope',function($scope) {
// // dès qu'on clique on injecte des dependences et on va avoir l'alerte afichée
// $scope.clicked = function(){
//      alert("Ça c'est une belle allerte");
//  }
// }]);

var app = angular.module('myApp',[]);
app.controller('TestCtrl',['$scope',function($scope){
    $scope.clicked = function(){
        alert('Ça c\'est une bonne alerte :)')
    }
}])