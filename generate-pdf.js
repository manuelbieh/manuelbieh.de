// html2pdf.js
const page = new WebPage();
const system = require('system');

page.paperSize = {
  //format: "A5",
    width: '21.0cm',
    height: '14.8cm',
    // width: '21.0cm',
    // height: '13.27cm',
    orientation: 'landscape',
    margin: {
        left: '0',
        right: '0',
        top: '0',
        bottom: '0'
    }
};
//page.viewportSize = {
//    width: 960,
//    height: 720
//};

// page.viewportSize = {
//     width: 1120,
//     height: 740
// };
page.zoomFactor = 1;

page.open(system.args[1], function (status) {
    /*
    page.injectJs('assets/js/fontface.js');
    setTimeout(function() {
        page.render(system.args[2]);
        phantom.exit();
    }, 2000);
    */
    page.render(system.args[2]);
    phantom.exit();
});
