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
  'collections/Nodes',
  'models/Node'
], function( $, _, Backbone, Nodes, Node ){

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
    },

    fetch : function(){

      this.set({
        '_id' : '38854f8505267c1549803a78d40015d3',
        '_rev' : '2-d9ce2d85cf749e1f26802e92df4f8e3d',
        'title' : 'OneOfMyDocuments',
        'family' : 'Document',
        'nodes' : new Nodes([
            {
              'id' : '8a885c8e5dba21804c485808ec0006ff',
              '_id' : '8a885c8e5dba21804c485808ec0006ff',
              '_rev' : '2-74e43dfa8b8b906b5d921dfcc178e7f8',
              'content': 'Eddy Vedder, it\'s the header',
              'document_ids' : ['8854f8505267c1549803a78d4000f9b'],
              'dom' : 'div#header',
              'family' : 'Node',
              'persona' : 'jrm.general@gmail.com',

              'position'  : 0
            },
            {
              'id' : '8a885c8e5dba21804c485808ec000cbb',
              '_id' : '8a885c8e5dba21804c485808ec000cbb',
              '_rev' : '1-fa4cdc4566c841633b59b58a221532ea',
              'content': 'Body',
              'document_ids' : ['8854f8505267c1549803a78d4000f9b'],
              'dom' : 'div#body',
              'family' : 'Node',
              'persona' : 'jrm.general@gmail.com',

              'position'  : 1
            },
            {
              'id' : '8a885c8e5dba21804c485808ec0019c9',
              '_id' : '8a885c8e5dba21804c485808ec0019c9',
              '_rev' : '1-b6d35dc8822c1007fe4f63d437435760',
              'content': 'This is the footer',
              'document_ids' : ['8854f8505267c1549803a78d4000f9b'],
              'dom' : 'div#footer',
              'family' : 'Node',
              'persona' : 'jrm.general@gmail.com',

              'position'  : 2
            }
          ]),
        'completion' : '0', // For now, just what slide is the active one
      });

      this.trigger( 'fetched' );
    
    },

    // TODO: Make this generically take data and churn out data
    //       that is relevant to curate the DOM. For now just
    //       return all the data
    getActive : function(){

      return this;

    }

  });

  return Pad;

});
