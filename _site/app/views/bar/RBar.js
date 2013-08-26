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
  'app/views/bar/Bar.js',
], function( $, _, Backbone, Bar ){

  var RBar = Bar.extend({

    el: '#exporter',

    initialize: function () {

      console.log( 'RBar...online' );

    },

    render: function () {


    }

  });

  return RBar;

});


