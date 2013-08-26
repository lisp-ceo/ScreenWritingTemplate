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
  'text!templates/pad/Node.html'
], function( $, _, Backbone, NodeTemplate ){

  var Pad = Backbone.View.extend({

    el  : '.textNodeContainer',

  /**
   *
   * @constructor
   *  
   */

    initialize: function () {

    },

  /**
   *
   *  Takes data from the controller and draws the active DOM nodes,
   *  depenendent on where the node is
   *
   *  @param {Backbone.Collection} nodesCollection - Collection of nodes
   *
   *  @returns {string} composite - HTML to render
   *
   */

    render: function ( nodesCollection ) {

      var composite = '';

      nodesCollection.each( function( node ){

        composite = composite + _.template( NodeTemplate )({
          node : node.attributes
        });

      }.bind( this ));

      return composite;

    }

  });

  return Pad;

});
