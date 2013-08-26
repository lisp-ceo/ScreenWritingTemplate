/*
 *
 *  Author: James Meldrum
 *  Date: 7/5/2013
 *  Desc: Default view rendered for each 'page' in the application.
 *
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'app/collections/Nodes'
], function( $, _, Backbone, Nodes ){

  var Pad = Backbone.Model.extend({

  /**
   *
   * @constructor
   *  
   */

    initialize: function () {
    },

    defaults : {
      
      // Publican

      '_id' : '38854f8505267c1549803a78d40015d3',
      '_rev' : '2-d9ce2d85cf749e1f26802e92df4f8e3d',

      'title' : 'OneOfMyDocuments',
      'family' : 'Document',
      'nodes' : new Nodes(),
      //'identity' : new Identity(),

      // ScreenWriter

      'completion' : '0%',
    }

  });

  return Pad;

});


