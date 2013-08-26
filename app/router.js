/*
 *
 *  Author: James Meldrum
 *  Date: 7/5/2013
 *  Desc: Application routing. Add more routes to the `routes` object, listen for
 *  the polling of routes using the `router` object
 *        
 *
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'vm'
], function ($, _, Backbone, Vm) {

  var AppRouter = Backbone.Router.extend({

    routes: {

      ''                        : 'defaultAction',
      'detail/wlid:wineList_id' : 'wineListDetail',
      'detail/wlid'             : 'wineListDetail',

      // Default - catch all
      '*actions'                : 'defaultAction'
    }
  });

  var initialize = function(options){

    var appContainer = options.appContainer;
    var router = new AppRouter(options);

    // Add more routes here as needed

    router.on( 'route:defaultAction', function ( actions ) {
      require([ 'views/page/defaultAction' ], function ( DefaultAction ) {

        var defaultAction = Vm.create( appContainer , 'DefaultAction' , DefaultAction );
        defaultAction.render();

      });
    });

    Backbone.history.start();

  };
  return {
    initialize: initialize
  };
});
