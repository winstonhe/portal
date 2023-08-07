function decodeHTMLEntities(text) {
  return $("<textarea/>")
    .html(text)
    .text();
}

function encodeHTMLEntities(text) {
  return $("<textarea/>")
    .text(text)
    .html();
}

$(".entitylist.entity-grid").on("loaded", function () {
      $(this).children(".view-grid").find("td[data-attribute='description']").each(function (i, e){
         var curerntvalue = $(this).html();   // Get the raw encoded HTML
         $(this).html(decodeHTMLEntities(curerntvalue));   // Decode it as HTML and rendered as HTML
      });
   });
