function renitializeAsyncEvent() {
  var dfd = jQuery.Deferred();

   dfd.resolve( [ $('input[name=from]').val(''), 
                  $('input[name=to]').val(''), 
                  $('select#productions-status').val('todo'), 
                  $('#users-table_filter input[type=search]').val('')
              ]);
  // Return the Promise so caller can't change the Deferred
  return dfd.promise();
}
 
// Attach a done, fail, and progress handler for the asyncEvent
$.when( renitializeAsyncEvent() ).then(
  function( v ) {
    console.log( v );
    // drawMyOTable();
  }
);
