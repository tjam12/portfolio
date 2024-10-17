
;(function () {
	
	'use strict';

    var getinfo = async function() {
        console.log('testing');

        let url = 'https://lrfl39j6fl.execute-api.ap-southeast-2.amazonaws.com/prod/getprojectinfo'

        let response = await fetch(url, {
            method: 'GET',
        })

        const data = await response.json();
        
        console.log(data);
        console.log('inside getinfo');

        return data[0].name;


        //return JSON.parse(data);

        //let data = await response.json();
        // return data;
    
    };

	$(function(){
		// document.getElementById("demo").innerHTML = getinfo();
        // document.getElementById("demo").innerHTML = 3+4;
        
        console.log('inside getfromurl');
        getinfo().then(result => {
            document.getElementById("demo").innerHTML = result;
        })
        
 
	});


}());