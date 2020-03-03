FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
)

FilePond.setOptions({
    stylePanelAspectRatio: 150/100,
    imageResizeTargetHeight:80,
    imageResizeTargetWidth: 100,
    allowFileEncode:true,
    getFileEncodeDataURL:
    // server: 'mongodb://heroku_xpflmzb1:ddpf9gd8uskf0qhob8lp97m1o3@ds049467.mlab.com:49467/heroku_xpflmzb1'
});

getFileEncodeDataURL

FilePond.parse(document.body);