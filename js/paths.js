define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_BULK_DOWNLOADS: 'faostat-ui-bulk-downloads',
            faostat_ui_bulk_downloads: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});