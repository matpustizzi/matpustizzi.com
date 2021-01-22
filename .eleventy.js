require('dotenv').config();
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');
  
module.exports = 
    function(eleventyConfig) {  

        eleventyConfig.setLiquidOptions({
            dynamicPartials: true
        });
        
        eleventyConfig.addFilter('documentToHtmlString', function(input) {
            return documentToHtmlString(input);
        });

        eleventyConfig.addFilter('test', function(input) {
            return "hey" + input ;
        })
    };

// const fs = require('fs');

// module.exports = (
//     function(eleventyConfig) { 
//         eleventyConfig.addFilter("filesize", function(path) { 
//             let stat = fs.statSync(path);  
//             if( stat ) {  
//                 return (stat.size/1024).toFixed(2) + " KB";  
//             }  
//             return ""; 
//         });
//     }
// );