angular.module('uitools',[]).directive('datetimepicker', function () {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function (scope, element, attrs, model) {
      if (!model) {
        return;
      }
      var widgetOptions = {
        language: 'pt-BR'
      };

      element.bind('changeDate', function (newValue) {
        scope.$apply(function () {
          /**only sending this if controller is set to do some other action
           * on date select.
           */
          if(typeof scope.ondateselect === 'function') {
            console.log(newValue.localDate);
            scope.ondateselect(newValue.localDate);
          }
        });
      });
      element.datetimepicker(widgetOptions);
    },
    scope: {
      ondateselect: '&'
    }
  };
});