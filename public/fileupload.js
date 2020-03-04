


FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
)

FilePond.setOptions({
    stylePanelAspectRatio: 80/100,
    imageResizeTargetHeight:80,
    imageResizeTargetWidth: 100,
});


FilePond.parse(document.body);