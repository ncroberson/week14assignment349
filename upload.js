let s3Client = new AWS.S3({
  endpoint: "http://127.001:9000",
  s3ForcePathStyle: true,
  signatureVersion: "v4",
  accessKeyID: "ATI3FBPPL3KMK9S7GNXX ",
  secretaccessKey: "RvwNI+cmnQQc6nyo1QWG84kXZJVNZALbbiRMAHhq"
});

s3Client.putObject({
  Bucket: "images",
  Key: file.name,
  Body: file,
  ContentLength: file.size,
  ContentType: file.type
}, function(err, data){
  console.log(err, data)
});

class UpLoadForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<h1>Upload Your Photos</h1> <br> <h2>Name:</h2>";
    var button = document.querySelector("button");

    button.addEventListener('click', function (event) {
      button.textContent ='Uploaded';

      var caption = document.getElementById("text").value;
      var file = document.getElementById("file").value;

      uploadPicture(file, caption);
    });
  }
}

customElements.define('upload-form', UpLoadForm);


