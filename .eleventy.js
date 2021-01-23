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

        config.addPassthroughCopy("./img");
        config.addPassthroughCopy("./fonts");

    };