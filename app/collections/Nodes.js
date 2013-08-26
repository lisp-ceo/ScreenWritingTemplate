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
  'models/Node'
], function( $, _, Backbone, Node ){

  var Nodes = Backbone.Collection.extend({

  /**
   *
   * @constructor
   *  
   */

    model : Node,

    comparator : function( node ){
    
      return node.get( 'position' );

    }

  });

  return Nodes;

});
