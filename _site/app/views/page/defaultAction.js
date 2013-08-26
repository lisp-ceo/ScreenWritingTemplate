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
  'app/views/bar/RBar.js',

  'app/models/Pad.js',
  'app/models/DocumentSetting',

  'app/collections/Characters'

], function( $, _, Backbone, Pad, LBar, RBar, PadModel, DocumentSetting, Characters ){

  var DefaultAction = Backbone.View.extend({

    el: '#map',

    initialize: function () {


      // Views

      this.views.pad = new Pad();
      this.views.lbar = new LBar();
      this.views.rbar = new RBar();

      // Models
      this.models.pad = new PadModel();
      this.models.documentSetting = new DocumentSetting();

      // Collections
      this.collections.characters = new Characters();

      this.bindDataRelationships();

      

    },

  /**
   *
   *  Bind 2-way data relationships and callbacks
   *
   */

    bindDataRelationships : function(){

      this.views.pad.listenTo( this.models.pad, 'fetched', function(){
      
        this.populateData();
        this.render();

      }.bind( this ));

    },

    render: function () {

      $( this.views.pad.el ).html( this.views.pad.render( this.models.pad.get( 'nodes' )));
      this.views.lbar.render();
      this.views.rbar.render();

    },
  
    views : {
    
      pad : Pad,
      lbar : LBar,
      rbar : RBar

    },

    models : {

      pad : PadModel

    },
    
    collections : {
    
      characters : Characters

    }

  });

  return DefaultAction;

});
