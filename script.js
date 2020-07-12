// var ready = (callback) => {
//   if (document.readyState != "loading") callback();
//   else document.addEventListener("DOMContentLoaded", callback);
// }

// ready(() => { 
//   /*  Начинаем работу после полной загрузки DOM */ 
// });
$(document).ready(function() { 
  $('[data-toggle="tooltip"]').tooltip();
});