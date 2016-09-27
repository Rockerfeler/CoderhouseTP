 "use strict";

 /**
  * Created by rockerfeler on 9/19/16.
  */

 angular.module('workshop').service('ProductoService', ["id", "$http", "$q", function(id, $http, $q) {
   var defered = $q.defer();
   var promise = defered.promise;
         $http.get('https://api.mercadolibre.com/items/' + id)
             .then(function(data) {
                 defered.resolve(data);
             });

         return promise;
     }
   ]);
