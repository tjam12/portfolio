
;(function () {
	
	'use strict';

    var getinfo = async function() {
        console.log('testing');

        // let url = 'https://lrfl39j6fl.execute-api.ap-southeast-2.amazonaws.com/prod/getprojectinfo'

        let url = 'http://localhost:4000/geticon'

        let response = await fetch(url, {
            method: 'GET',
        })

        const data = await response.json();
        
        console.log(data);
        console.log('inside getinfo');

        
        

        return data;


        //return JSON.parse(data);

        //let data = await response.json();
        // return data;
    
    };

    function getQueryParameter(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          if (pair[0] == variable) {
            return pair[1];
          }
        }
        return (false);
      }

	$(function(){
		// document.getElementById("demo").innerHTML = getinfo();
        // document.getElementById("demo").innerHTML = 3+4;
        let objects = [`Java`,`C`,`Python`,`JavaScript`,`HTML`,`CSS`,`MongoDB`,`MySQL`,`Reactjs`,`Nodejs`,`Python/Flask`,`Python/Tensorflow`,`Python/OpenCV`,`RTOS µC/OS`,`Firebase`,`Lauterbach JTAG Debugger`,`Lecroy Bus Analyzer`,`Cisco Packet Tracer`,`Postman`,`Wireshark`,`Proteus`,`MATLAB`,`Github`,`SVN`,`Android Studio`,`Arduino`];
        
        var role = getQueryParameter('role');
        console.log(role);
        if(role.toLowerCase() === 'manager') 
            {
                $('#manager-view').show();
            } 
        else if(role.toLowerCase() === 'employee') 
            {
                $('#employee-view').show();
            }

        console.log('inside getfromurl');
        getinfo().then(result => {
            for(let i = 0;i < objects.length;i++){
                console.log(objects[i] + `in loop`)
                for(let j = 0;j < result.length;j++){
                    // if(result[j].name == objects[i]){
                    //     let html = `<img src=\"` + result[j].iconlink + `\" style=\"object-fit: fill;width:25%; height:25%;width:25%; height:25%;position: absolute;top: 45%;left: 50%;transform: translateX(-50%) translateY(-50%);\">`
                    if(result[j].name == objects[i]){
                        console.log(result[i].name + `in if`)
                        let html = `<img src=\"` + result[j].iconlink + `\" height=` + result[j].iconheight + `><strong>`+ result[j].name + `</strong> `
                        document.getElementById(objects[i]).innerHTML = html;
                        break;
                    }
                }
            }
        })
 
	});


}());