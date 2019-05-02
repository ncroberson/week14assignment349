(function (window) {
  'use strict';
  const $ = window.$;
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/images',
    success: function (data) {
      console.log('success', data);
      $.each(data, function (i, item) {
        console.log(item.src);
        $('#Hello').append('<img src="' + item.src + '">');
        $('#cap').append(item.caption);
      });
    }
  });
})(window);
