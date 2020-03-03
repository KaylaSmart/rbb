const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create( inputElement , {


    onaddfile: (err, fileItem) => {
        console.log(err, fileItem.getMetadata('resize'));
      },
       // add onpreparefile callback
  onpreparefile: (fileItem, output) => {
    // create a new image object
    const image = new Image();

    // set the image source to the output of the Image Transform plugin
    image.src = URL.createObjectURL(output);

    // add it to the DOM so we can see the result
    document.body.appendChild(image);
  }
});


FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
)

FilePond.setOptions({
    stylePanelAspectRatio: 150/100,
    imageResizeTargetHeight:80,
    imageResizeTargetWidth: 100,
    
     server: './'
});


FilePond.parse(document.body);