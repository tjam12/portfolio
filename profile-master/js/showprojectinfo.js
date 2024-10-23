
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
        //console.log('testing');

        // let url = 'https://lrfl39j6fl.execute-api.ap-southeast-2.amazonaws.com/prod/getprojectinfo'

        let url = 'http://localhost:4000/getprojectinfo'
        // let url = 'https://lrfl39j6fl.execute-api.ap-southeast-2.amazonaws.com/prod/getprojectinfo'

        let response = await fetch(url, {
            method: 'GET',
        })

        const data = await response.json();
        
        //console.log(data);
        //console.log('inside getinfo');

        return data;

        //return JSON.parse(data);

        //let data = await response.json();
        // return data;
    };


	$(function(){
		// document.getElementById("demo").innerHTML = getinfo();
        // document.getElementById("demo").innerHTML = 3+4;

        var j = 0;
        var project = getQueryParameter('project');
        //console.log(project);
        if(project.toLowerCase() === 'project0') 
            {
                $('.project0').show();
                j = 0;

            } 
        else if(project.toLowerCase() === 'project1') 
            {
                $('.project1').show();
                j = 1;
            }
        else if(project.toLowerCase() === 'project2') 
            {
                $('.project2').show();
                j = 2;
            }
        else if(project.toLowerCase() === 'project3') 
            {
                $('.project3').show();
                j = 3;
            }
        else if(project.toLowerCase() === 'project4') 
            {
                $('.project4').show();
                j = 4;
            }
            
        else if(project.toLowerCase() === 'project5') 
            {
                $('.project5').show();
                j = 5;
            }
            
        else if(project.toLowerCase() === 'project6') 
            {
                $('.project6').show();
                j = 6;
            }
            
        else if(project.toLowerCase() === 'project7') 
            {
                $('.project7').show();
                j = 7;
            }
            
            
        
        getinfo().then(result => {
            // for(let j = 0;j < result.length;j++){
                // if(result[j].name == objects[i]){
                //     let html = `<img src=\"` + result[j].iconlink + `\" style=\"object-fit: fill;width:25%; height:25%;width:25%; height:25%;position: absolute;top: 45%;left: 50%;transform: translateX(-50%) translateY(-50%);\">`
               
                    //console.log(result[j].name + `in if`);
                    let html = result[j].name;
                    let nameid = `project` + j + `name`;
                    let affiliationid = `project` + j + `affiliation`;
                    let summmaryid = `projectsummary` + j;
                    let imageid = `project` + j + `image0`
                    // let frameworkid = `project` + j + `framework`
                    let frameworkid = `project`+ j + `framework`
                    //console.log(nameid);
                    
                    // html = `<img=\"` + result[j].iconlink + `\" height=` + result[j].iconheight + `><strong>`+ result[j].name + `</strong> `
                    
                    if(document.getElementById(nameid))
                        {   
                            //console.log(`here`)
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
                    if(document.getElementById(imageid))
                        {
                            for(let k = 0;k < result[j].projectimage.length;k++)
                            {   
                                let imageid = `project` + j + `image` + k

                                document.getElementById(imageid).innerHTML = `<div class="col-md-3 text-center col-padding animate-box  fadeInUp animated-fast"><a class="work" style="background-image: url(`+ result[j].projectimage[k] + `);"></a></div>`

                                // document.getElementById(imageid).innerHTML = `<img src="`+ result[j].projectimage[0] + `">`;
                    
                                // //console.log(result[j].projectimage[0]);

                            }
                        }
                    if(document.getElementById(frameworkid))
                        {
                            //console.log(`printing framework`);
                            //console.log(result[j].frameworkuse);
                            let html = '';
                            for(let k = 0;k < result[j].frameworkuse.length;k++)
                            {   
                                    //console.log(result[j].frameworkuse[k].name);
                                    html = html + `<div class="` + result[j].frameworkuse[k].name + `"></div>`;
                                

                                // document.getElementById(imageid).innerHTML = `<img src="`+ result[j].projectimage[0] + `">`;
                    
                                // //console.log(result[j].projectimage[0]);

                                
                            };
                            
                            //console.log(html);

                            document.getElementById(frameworkid).innerHTML = html;

                        }

                        
                        $.getScript("js/geticonfromurl2.js", function(data){
                            //console.log(data);
                            // geticon();
                        });
                    
                    //break;
            // }
                
        });
        
        
        //console.log('inside getfromurl');

	});
    



}());