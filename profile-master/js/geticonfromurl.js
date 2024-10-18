
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


	$(function(){
		// document.getElementById("demo").innerHTML = getinfo();
        // document.getElementById("demo").innerHTML = 3+4;
        

        console.log('inside geticon');
        getinfo().then(result => {
                    // if(result[j].name == objects[i]){
                    //     let html = `<img src=\"` + result[j].iconlink + `\" style=\"object-fit: fill;width:25%; height:25%;width:25%; height:25%;position: absolute;top: 45%;left: 50%;transform: translateX(-50%) translateY(-50%);\">`

                    console.log(`check result`)
                    console.log(result)

                    for(let j=0;j<result.length;j++)
                    {
                        console.log(result[j].name + ` in if`)
                        let html = `<div class="col-md-3 col-sm-6 col-xs-12 text-center"><div class="chart" data-percent="100"><span><img src=\"` + result[j].iconlink + `\" height=` + result[j].iconheight + `><strong>`+ result[j].name + `</strong></span></div></div>`
                        console.log('in if');
                        for(let i = 0;i < document.getElementsByClassName(result[j].name).length;i++)
                        {
                            document.getElementsByClassName(result[j].name)[i].innerHTML = html;
                        }
                        //break;
                    }
                    
                
            
        })
 
	});


}());