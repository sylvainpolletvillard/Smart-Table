ng.module('smart-table')
  .directive('stChange', ['stConfig', '$timeout', function (config, $timeout) {
    return {
      require: 'stTable',
      scope: {
        stChange: '='
      },
      link: {
        pre: function (scope, element, attrs, ctrl) {
          ctrl.pipe = function () {
            scope.stChange(ctrl.tableState(), ctrl);
            return ctrl.defaultPipe();
          }
        }
      }
    };
  }]);
