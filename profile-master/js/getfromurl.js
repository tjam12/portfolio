
;(function () {
	
	'use strict';

    var getinfo = async function() {
        console.log('testing');

        let url = 'http://localhost:3000/api/v1/products'

        let response = await fetch(url, {
            method: 'GET',
        })

        const data = await response.json();
        
        
        
        console.log(data);
        console.log(data[0].brand);

        
        console.log('inside getinfo');

        return data[0].brand;


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