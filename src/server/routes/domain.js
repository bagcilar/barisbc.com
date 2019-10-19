const express = require('express');
const router = express.Router();
const whois = require('whois')



router.get('/', function(req, res, next) {
    res.send('HELLO!');
});

router.post('/', function(req, res, next) {

    domain = req.body.domain;

    let promise = new Promise((resolve, reject) => {

        whois.lookup(domain, function(err, data) {

            if (data != undefined){
                let dataArray = data.split('\n');
                let outputJSON = {};
                if ((dataArray[0].substring(0, 8)) == "No match"){
                    outputJSON = {
                        availability: 'yes'
                    }
                } else {
            
                    let output = new Map();
            
                    for (let i = 0; i < dataArray.length; i++) {
                        if (dataArray[i].substring(0, 12) == "Domain Name:") {
                            output.set("dName", dataArray[i])
                            if (output.length == 5 ) break;
                        } else if (dataArray[i].substring(0, 19) == "Registrant Country:") {
                            output.set("rCountry", dataArray[i]);
                            if (output.length == 5 ) break;
                        } else if (dataArray[i].substring(0, 10) == "Registrar:") {
                            output.set("registrar", dataArray[i]);
                            if (output.length == 5 ) break;
                        } else if (dataArray[i].substring(0, 14) == "Creation Date:") {
                            output.set("cDate", dataArray[i]);
                            if (output.length == 5 ) break;
                        } else if (dataArray[i].substring(0, 39) == "Registrar Registration Expiration Date:") {
                            output.set("eDate", dataArray[i]);
                            if (output.length == 5 ) break;
                        }
                    }
                    
                    outputJSON = {
                        availability: 'no',
                        dName: output.get("dName"),
                        registrantCountry: output.get("rCountry"),
                        registrar: output.get("registrar"),
                        creationDate: output.get("cDate"),
                        expirationDate: output.get("eDate")
                    }
                    
                }
                resolve(outputJSON)
            }
            
        })

    })

    promise.then((input) => {
        res.json(input)  
    })

});


module.exports = router;