(function (window) {
  'use strict';

  const $ = window.$;

  
  $(document).ready ( function () {
    $('#submitbutton').click(function () {
      let myFile;
      myFile = $('#fileinput').prop('files')[0];
      let AWS = window.AWS;
      let s3Client = new AWS.S3({
        endpoint: 'http://127.0.0.1:9000',
        s3ForcePathStyle: true,
        signatureVersion: 'v4',
        accessKeyID: 'ATI3FBPPL3KMK9S7GNXX',
        secretAccessKey: 'RvwNI+cmnQQc6nyo1QWG84kXZJVNZALbbiRMAHhq',
        sslEnabled: false,
        region: 'us-east-1'
      });
    
      s3Client.putObject({
        Bucket: "images",
        Key: myFile.name,
        Body: myFile,
        ContentLength: myFile.size,
        ContentType: myFile.type
      }, function(err, data) {
        console.log(err, data);
      });
    });
  });
    


})(window);
