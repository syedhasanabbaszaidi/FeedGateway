'use strict';

// require('follow');
/*require('./lib/config');
require('./lib/library');
require('./lib/betterdata.dao');*/



function FeedGateway() {
    
    var _this = this;
}

FeedGateway.prototype.setup = function() {

    return follow({db:"http://kwantu10.kwantu.net:8001/kwantu_apps", include_docs:true}, function(error, change) {
      if(!error) {
        console.log("Change " + change.seq + " has " + Object.keys(change.doc).length + " fields");
      }
    })

}