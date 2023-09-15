const https = require('https');

function getDef(term){
    try{
        const request = https.get(
          `https://dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=1888bfea-7af8-4f78-9395-64d64167cc53`,
            (response) => {
                let body = "";
                //Read data
                response.on("data", (data) => {
                    body += data.toSting();
                });

                response.on("end", () => {
                    const definition = JSON.parse(body);
                    console.log(definition[0].shortdef);
                });
            }
        );
        request.on("error", (error) => console.error(error.message));
    }   
    catch(error){
        console.error(error.message); 
    }
}

const query = process.argv.slice(2);
query.forEach(getDef);