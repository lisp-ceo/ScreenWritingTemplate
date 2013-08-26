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
  'app/views/pad/Pad.js',
  'app/views/bar/LBar.js',
  'app/views/bar/RBar.js'
], function( $, _, Backbone, Pad, LBar, RBar ){

  var DefaultAction = Backbone.View.extend({

    el: '#map',

    initialize: function () {

      this.views.pad = new Pad( this );
      this.views.lbar = new LBar();
      this.views.rbar = new RBar();

    },

    render: function () {

      this.views.pad.render();
      this.views.lbar.render();
      this.views.rbar.render();

    },
  
    views : {
    
      pad : Pad,
      lbar : LBar,
      rbar : RBar

    }

  });

  return DefaultAction;

});
