
;(function () {
	
	'use strict';

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

    var getinfo = async function() {
        console.log('testing');

        // let url = 'https://lrfl39j6fl.execute-api.ap-southeast-2.amazonaws.com/prod/getprojectinfo'

        let url = 'http://localhost:4000/getprojectinfo'
        // let url = 'https://lrfl39j6fl.execute-api.ap-southeast-2.amazonaws.com/prod/getprojectinfo'

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
        
        getinfo().then(result => {
            for(let j = 0;j < result.length;j++){
                // if(result[j].name == objects[i]){
                //     let html = `<img src=\"` + result[j].iconlink + `\" style=\"object-fit: fill;width:25%; height:25%;width:25%; height:25%;position: absolute;top: 45%;left: 50%;transform: translateX(-50%) translateY(-50%);\">`
               
                    console.log(result[j].name + `in if`);
                    let html = result[j].name;
                    let nameid = `project` + j + `name`;
                    let affiliationid = `project` + j + `affiliation`;
                    let summmaryid = `projectsummary` + j;
                    console.log(nameid);
                    
                    // html = `<img=\"` + result[j].iconlink + `\" height=` + result[j].iconheight + `><strong>`+ result[j].name + `</strong> `
                    
                    if(document.getElementById(nameid))
                        {   
                            console.log(`here`)
                            document.getElementById(nameid).innerHTML = result[j].name;
                        }
                    if(document.getElementById(affiliationid))
                        {
                            document.getElementById(affiliationid).innerHTML = result[j].affiliation;
                        }
                    if(document.getElementById(summmaryid))
                        {
                            document.getElementById(summmaryid).innerHTML = `<p>` + result[j].projectsummary + `</p>`
                        }
                    //break;
            }
                
        });

        var project = getQueryParameter('project');
        console.log(project);
        if(project.toLowerCase() === 'project0') 
            {
                $('.project0').show();
            } 
        else if(project.toLowerCase() === 'project1') 
            {
                $('.project1').show();
            }
        else if(project.toLowerCase() === 'project2') 
            {
                $('.project2').show();
            }
        else if(project.toLowerCase() === 'project3') 
            {
                $('.project3').show();
            }
        else if(project.toLowerCase() === 'project4') 
            {
                $('.project4').show();
            }
            
        else if(project.toLowerCase() === 'project5') 
            {
                $('.project5').show();
            }
            
        else if(project.toLowerCase() === 'project6') 
            {
                $('.project6').show();
            }
            
        else if(project.toLowerCase() === 'project7') 
            {
                $('.project7').show();
            }
            
            
        console.log('inside getfromurl');
	});


}());