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
  'app/models/Node'
], function( $, _, Backbone, Node ){

  var Nodes = Backbone.Collections.extend({

  /**
   *
   * @constructor
   *  
   */

    model : Node

  });

  return Nodes;

});
