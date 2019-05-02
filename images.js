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

        $('#Photo').append('<img src="' + item.src + '">');
        $('#Capt').append(item.caption);
      });
    }
  });

  const template = document.querySelector('template');
  const node = document.importNode(template.content, true);
  document.body.appendChild(node);

})(window);
