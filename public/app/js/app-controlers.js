/*jslint browser:true indent:2 */
/*global $, angular, app */
'use strict';

var mainCtrl = app.controller('MainCtrl', [function () {}]);

/* Delay route changes, prevent flicker
 *
 * Usualy the delay is the result of loading data,
 * if your are not loading data a small delay gives
 * more consitent feel and in some cases it will prevent
 * screen flickers when route change are to fast.
 */
mainCtrl.delay = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function() {
    defer.resolve();
  }, 150);
  return defer.promise;
};

var viewCtrl = app.controller('ViewCtrl', [function () {}]);
