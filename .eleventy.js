require('dotenv').config();
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');

module.exports = 
    function(config) {  

        config.setLiquidOptions({
            dynamicPartials: true
        });
        
        config.addFilter('documentToHtmlString', function(input) {
            return documentToHtmlString(input);
        });

        config.addFilter('debug', function(input) {
            return '<script>console.log(' + JSON.stringify(input) + ')</script>'
        });

        config.addFilter('extractDomain', function (url) {
            var domain;
            if (url.indexOf("://") > -1) {
                domain = url.split('/')[2];
            }
            else {
                domain = url.split('/')[0];
            }
            domain = domain.split(':')[0];
            domain = domain.replace(/^www\./,'');
            return domain;
        });

        config.addPassthroughCopy("./img");
        config.addPassthroughCopy("./fonts");

    };