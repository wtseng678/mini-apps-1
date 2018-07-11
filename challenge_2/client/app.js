$(document).ready(function() {
  
  $("#form").on("submit", function(e){
    e.preventDefault();
    $.ajax({
      url: "/", 
      type: "POST",
      data: $("textarea").val(),
      success: function(result){
        $("#csv").append('<span>' + result + '</span>');
        // $.ajax({
        //   url: "/",
        //   type: "GET",
        //   // data: {},
        //   // more fields here
        //   success: function(data) {
        //     // render on the html
        //     console.log(data);
        //   }, 
        //   error: function (data) {
        //     console.error("failed to get");
        //   }
        // });
      },
      error: function(data) {
        console.error("failed to post");
      }
    });
  });
});














/*

const items = json3.items
const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
const header = Object.keys(items[0])
let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
csv.unshift(header.join(','))
csv = csv.join('\r\n')

console.log(csv)

*/