/** @scratch /configuration/config.js/1
 * == Configuration
 * config.js is where you will find the core Kibana configuration. This file contains parameter that
 * must be set before kibana is run for the first time.
 */
define(['settings'],
function (Settings) {
  "use strict";

  /** @scratch /configuration/config.js/2
   * === Parameters
   */


  function getParameterByName(name) {
      var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
  
  var param = (getParameterByName('search') === 'es' || getParameterByName('search') === 'config') ?  getParameterByName('search') : 'es';

  var settings = {
    es: {
      elasticsearch: "http://"+window.location.hostname + (window.location.port ? ":" +  window.location.port :  "") + "/es",
      default_route     : '/dashboard/file/adevents.json',
      kibana_index: "kibana-yb-events",
      panel_names: [
            'histogram',
            'map',
            'goal',
            'table',
            'filtering',
            'timepicker',
            'text',
            'hits',
            'column',
            'trends',
            'bettermap',
            'query',
            'terms',
            'stats',
            'sparklines'
          ]      
    },
    config: {
      elasticsearch: "http://"+window.location.hostname + (window.location.port ? ":" +  window.location.port :  "") + "/esconfig",
      default_route     : '/dashboard/file/blank.json',
      kibana_index: "kibana-yb-config",
      panel_names: [
            'histogram',
            'map',
            'goal',
            'table',
            'filtering',
            'timepicker',
            'text',
            'hits',
            'column',
            'trends',
            'bettermap',
            'query',
            'terms',
            'stats',
            'sparklines'
          ]       
    }
  };


  return new Settings(settings[param]);
});
