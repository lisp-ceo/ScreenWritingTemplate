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
  'app/models/Pad'
], function( $, _, Backbone, PadModel ){

  var Pad = Backbone.View.extend({

    el: '.textNodeContainer',

  /**
   *
   * @constructor
   *  
   */

    initialize: function (  ) {
      
      this.model = new PadModel();

    },

    model : PadModel, // controllerReference

  /*
   *
   * Takes data from the controller and draws the active DOM nodes,
   *  depenendent on where the node is
   *
   */

    render: function () {


    }

  });

  return Pad;

});
