const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = async function() {
    const entries = await client.getEntries({ 
            content_type: 'page', 
            order: 'sys.createdAt',
            include: 2
        })        
        .then(function(response) {
            const page = response.items
            .map(function(page) {
                page.fields.date= new Date(page.sys.updatedAt);
                return page.fields;
            });
            return page;
        })   
        .catch(console.error);
    
    const data = {
        pages : entries.filter((entry) => entry.slug != 'home'),
        home: entries.filter((entry) => entry.slug === 'home')
    }

    // console.log(data);
    return data;
}