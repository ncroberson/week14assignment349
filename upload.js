(function (window) {
  'use strict';

  const $ = window.$;

  var myFile;

  $('#fileupload').on('submit', function () {
    myFile = $('#fileinput'.prop('files'));
  });

  var Minio = window.Minio;

  var minioClient = new Minio.Client({
    endPoint: 'localhost/minio/images',
    port: 9000,
    useSSL: true,
    accessKey: 'ATI3FBPPL3KMK9S7GNXX',
    secretKey: 'RvwNI+cmnQQc6nyo1QWG84kXZJVNZALbbiRMAHhq'
  });

  minioClient.putObject(myFile);
})(window);
