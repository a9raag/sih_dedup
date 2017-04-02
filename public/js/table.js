
var f = function buildHtmlTable(selector) {
     $.ajaxSetup({
					        async: false
					        });
                            console.log(selector) ;
					        var jsonData= (function() {
					          var result;
					          $.ajax({
					              type:'GET',
					              url: selector,
					              dataType:'json',
					              async:false,
					              success:function(data){
					                  result = data;
					              }
					          });
					          return result;
					      })();
     var columns = addAllColumnHeaders(selector,jsonData);
 
     for (var i = 0 ; i < jsonData.length ; i++) {
         var row$ = $('<tr/>');
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = jsonData[i][columns[colIndex]];
 
             if (cellValue == null) { cellValue = ""; }
 
             row$.append($('<td/>').html(cellValue));
         }
         $('#'+selector).append(row$);
     }
 }
function addAllColumnHeaders(selector,jsonData)
 {
     var columnSet = [];
     var headerTr$ = $('<tr/>');
 
     for (var i = 0 ; i < jsonData.length ; i++) {
         var rowHash = jsonData[i];
         for (var key in rowHash) {
             if ($.inArray(key, columnSet) == -1){
                 columnSet.push(key);
                 headerTr$.append($('<th/>').html(key));
             }
         }
     }
     $('#'+selector).append(headerTr$);
 
     return columnSet;
 }
              

var s = function buildHtmlTable(selector) {
     $.ajaxSetup({
					        async: false
					        });
                            console.log(selector) ;
					        var jsonData= (function() {
					          var result;
					          $.ajax({
					              type:'GET',
					              url: selector,
					              dataType:'json',
					              async:false,
					              success:function(data){
					                  result = data;
					              }
					          });
					          return result;
					      })();
     var columns = addAllColumnHeadersSpecific(selector,jsonData);
 
     for (var i = 0 ; i < jsonData.length ; i++) {
         var row$ = $('<tr/>');
        // for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = jsonData[i][columns[0]];
 
             if (cellValue == null) { cellValue = ""; }
 
             row$.append($('<td/>').html(cellValue));
      //   }
         $('#'+selector).append(row$);
          var cellValue = jsonData[i][columns[1]];
 
             if (cellValue == null) { cellValue = ""; }
 
             row$.append($('<td/>').html(cellValue));
      //   }
         $('#'+selector).append(row$);
          var cellValue = jsonData[i][columns[2]];
 
             if (cellValue == null) { cellValue = ""; }
 
             row$.append($('<td/>').html(cellValue));
      //   }
         $('#'+selector).append(row$);
     }
 }
function addAllColumnHeadersSpecific(selector,jsonData)
 {
     var columnSet = [];
     var headerTr$ = $('<tr/>');
 
    // for (var i = 0 ; i < 4 ; i++) {
         var rowHash = jsonData[0];
     var c =1 ;
         for (var key in rowHash) {
             if ($.inArray(key, columnSet) == -1 && c<4 ){
                 columnSet.push(key);
                 c++ ;
                 headerTr$.append($('<th/>').html(key));
             }
         }
   //  }
     $('#'+selector).append(headerTr$);
 
     return columnSet;
 }