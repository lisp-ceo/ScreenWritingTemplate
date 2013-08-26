define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var io = {

    wine : {
    },
    
    vintage : {
    },

    bottling : {

      bottleIDLookup : {

        '750' : '3f0fedb0-0fdf-11e1-a24e-1231391e7438',
        '1500' : '3f0ff120-0fdf-11e1-b6dd-1231391e7438',
        '1000' : '3f10109c-0fdf-11e1-ba4c-1231391e7438'

      },     

      getBottleIDFromBottleSize : function( bottleSize ){

        return io.bottling.bottleIDLookup[ bottleSize ];

      }

    }

  };

  return io;
});

