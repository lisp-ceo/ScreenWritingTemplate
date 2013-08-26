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

  var LBar = Bar.extend({

    el: '#characters',

    initialize: function () {

      console.log( 'LBar...online' );

    },

    render: function () {


    }

  });

  return LBar;

});
