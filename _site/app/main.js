/*
 *
 *  Author: James Meldrum
 *  Date: 7/5/2013
 *  Desc: Application entry point. Defines require dependencies and paths.
 *        Add to your paths spec any external libs you want to use
 *
 */

require.config({

    paths: {
      "jquery": '../node_modules/jquery/tmp/jquery',
      "underscore": '../node_modules/underscore/underscore', 
      "backbone": '../node_modules/backbone/backbone',
      "text": '../node_modules/text/text',
      "templates": '../templates'
    },
    shim : {
      'backbone' : {
        deps : ['underscore','jquery'],
        exports : 'Backbone'
      },
      'underscore' : {
        deps    : [],
        exports : '_'
      }
    }

});

require([
  'views/container',
  'router',
  'vm',
  'underscore',
  'backbone'
], function(AppContainer, Router, Vm, _, Backbone){

  var appContainer = Vm.create({}, 'AppContainer', AppContainer);

  appContainer.render();

  Router.initialize({appContainer: appContainer});

});
