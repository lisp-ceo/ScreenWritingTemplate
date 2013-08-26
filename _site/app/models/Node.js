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

], function( $, _, Backbone ){

  var Node = Backbone.Collections.extend({

  /**
   *
   * @constructor
   *  
   */

    defaults : {
    '_id' : '8a885c8e5dba21804c485808ec0019c9',
    '_rev' : '1-b6d35dc8822c1007fe4f63d437435760',
    'content': 'This is the footer',
    'document_ids' : ['8854f8505267c1549803a78d4000f9b'],
    'dom' : 'div#footer',
    'family' : 'Node',
    'persona' : 'jrm.general@gmail.com'
    }

  });

  return Node;

});
