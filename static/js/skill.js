


var url = window.location.href;

var url_split = url.split("");

var add = "";

for (var i = 0; i < url_split.length; i++) {
   if (url_split[i] == 'e' || url_split[i] == 'E') {
      for (var h = i+4; h < url_split.length; h++) {
	if (url_split[h] == '/') {
            break;
         }

         else{
            add = add + url_split[h];
         }
      }
      break;
   }
}



if (add == '1' || add == '۱') {

document.querySelector('#onvan').innerHTML = 'مهندسی';
document.getElementsByClassName('txt29 titr')[0].innerHTML = 'مهندسی';
   var eng_data = [
{
   name: 'مهندسی شیمی',
   jobs: [
   {
      job_name:'طراح راکتور۱'
   },
   {
      job_name:'طراح راکتور۲'
   },
   {
      job_name:'طراح راکتور۳'
   }

   ],
},
{
   name: 'مهندسی پلیمر',
   jobs: [
   {
      job_name:'شغل پلیمر۱'
   },
   {
      job_name:'شغل پلیمر۲'
   }

   ],
},
{
   name: 'مهندسی کامپیوتر',
   jobs: [
   {
      job_name:'شغل کامپیوتر۱'
   }

   ],
},
{
   name: 'مهندسی عمران',
   jobs: [
   {
      job_name:'شغل عمران۱'
   },
   {
      job_name:'شغل عمران۲'
   }

   ],
},
{
   name: 'مهندسی صنایع',
   jobs: [
   {
      job_name:'طراح راکتور'
   }

   ],
},
{
   name: 'مهندسی مکانیک',
   jobs: [
   {
      job_name:'شغل مکانیک'
   }

   ],
},
{
   name: 'مهندسی مواد و متالوژی',
   jobs: [
   {
      job_name:'شغل مواد'
   }

   ],
},
{
   name: 'مهندسی نفت',
   jobs: [
   {
      job_name:'شغل نفت'
   },
   {
      job_name:'شغل نفت'
   },
   {
      job_name:'شغل نفت'
   }

   ],
},
{
   name: 'مهندسی نفت',
   jobs: [
   {
      job_name:'شغل نفت'
   },
   {
      job_name:'شغل نفت'
   },
   {
      job_name:'شغل نفت'
   }

   ],
},
{
   name: 'مهندسی نفت',
   jobs: [
   {
      job_name:'شغل نفت'
   },
   {
      job_name:'شغل نفت'
   },
   {
      job_name:'شغل نفت'
   }

   ],
}

]
// For each degree, create a line, dropdown and dropdown-content.

createItems(eng_data);


}


else if (add == '2' || add == '۲') {

document.querySelector('#onvan').innerHTML = 'هنر';
document.getElementsByClassName('txt29 titr')[0].innerHTML = 'هنر';
   var art_data = [
{
   name: 'شغل 2',
   jobs: [
   {
      job_name:'شغل 2'
   },
   {
      job_name:'شغل 2'
   },
   {
      job_name:'شغل 2'
   }

   ],
},
{
   name: 'شغل 2',
   jobs: [
   {
      job_name:'شغل 2'
   },
   {
      job_name:'شغل 2'
   }

   ],
},
{
   name: 'شغل 2',
   jobs: [
   {
      job_name:'شغل 2'
   }

   ],
},
{
   name: 'شغل 2',
   jobs: [
   {
      job_name:'شغل 2'
   },
   {
      job_name:'شغل 2'
   }

   ],
},
{
   name: 'شغل 2',
   jobs: [
   {
      job_name:'شغل 2'
   }

   ],
},
{
   name: 'شغل 2',
   jobs: [
   {
      job_name:'شغل 2'
   }

   ],
},
{
   name: 'شغل 2',
   jobs: [
   {
      job_name:'شغل 2'
   }

   ],
},
{
   name: 'شغل 2',
   jobs: [
   {
      job_name:'شغل 2'
   },
   {
      job_name:'شغل 2'
   },
   {
      job_name:'شغل 2'
   }

   ],
}

]
// For each degree, create a line, dropdown and dropdown-content.

createItems(art_data);   

}




else if (add == '3' || add == '۳') {

document.querySelector('#onvan').innerHTML = 'شغل 3';
document.getElementsByClassName('txt29 titr')[0].innerHTML = 'شغل 3';
   var hu_data = [
{
   name: 'شغل 3',
   jobs: [
   {
      job_name:'شغل 3'
   },
   {
      job_name:'شغل 3'
   },
   {
      job_name:'شغل 3'
   }

   ],
},
{
   name: 'شغل 3',
   jobs: [
   {
      job_name:'شغل 3'
   },
   {
      job_name:'شغل 3'
   }

   ],
},
{
   name: 'شغل 3',
   jobs: [
   {
      job_name:'شغل 3'
   }

   ],
},
{
   name: 'شغل 3',
   jobs: [
   {
      job_name:'شغل 3'
   },
   {
      job_name:'شغل 3'
   }

   ],
},
{
   name: 'شغل 3',
   jobs: [
   {
      job_name:'شغل 3'
   }

   ],
},
{
   name: 'شغل 3',
   jobs: [
   {
      job_name:'شغل 3'
   }

   ],
},
{
   name: 'شغل 3',
   jobs: [
   {
      job_name:'شغل 3'
   }

   ],
},
{
   name: 'شغل 3',
   jobs: [
   {
      job_name:'شغل 3'
   },
   {
      job_name:'شغل 3'
   },
   {
      job_name:'شغل 3'
   }

   ],
}

]
// For each degree, create a line, dropdown and dropdown-content.

createItems(hu_data);   

}



else if (add == '4' || add == '۴') {
document.getElementsByClassName('txt29 titr')[0].innerHTML = 'شغل 4';
document.querySelector('#onvan').innerHTML = 'شغل 4 ';

   var economi_data = [
{
   name: 'شغل 4',
   jobs: [
   {
      job_name:'شغل 4'
   },
   {
      job_name:'شغل 4'
   },
   {
      job_name:'شغل 4'
   }

   ],
},
{
   name: 'شغل 4',
   jobs: [
   {
      job_name:'شغل 4'
   },
   {
      job_name:'شغل 4'
   }

   ],
},
{
   name: 'شغل 4',
   jobs: [
   {
      job_name:'شغل 4'
   }

   ],
},
{
   name: 'شغل 4',
   jobs: [
   {
      job_name:'شغل 4'
   },
   {
      job_name:'شغل 4'
   }

   ],
},
{
   name: 'شغل 4',
   jobs: [
   {
      job_name:'شغل 4'
   }

   ],
},
{
   name: 'شغل 4',
   jobs: [
   {
      job_name:'شغل 4'
   }

   ],
},
{
   name: 'شغل 4',
   jobs: [
   {
      job_name:'شغل 4'
   }

   ],
},
{
   name: 'شغل 4',
   jobs: [
   {
      job_name:'شغل 4'
   },
   {
      job_name:'شغل 4'
   },
   {
      job_name:'شغل 4'
   }

   ],
}

]
// For each degree, create a line, dropdown and dropdown-content.

createItems(economi_data);   

}



else if (add == '5' || add == '۵') {

document.querySelector('#onvan').innerHTML = 'شغل 5';
document.getElementsByClassName('txt29 titr')[0].innerHTML = 'شغل 5';
   var videoedit_data = [
{
   name: 'شغل 5',
   jobs: [
   {
      job_name:'شغل 5'
   },
   {
      job_name:'شغل 5'
   },
   {
      job_name:'شغل 5'
   }

   ],
},
{
   name: 'شغل 5',
   jobs: [
   {
      job_name:'شغل 5'
   },
   {
      job_name:'شغل 5'
   }

   ],
},
{
   name: 'شغل 5',
   jobs: [
   {
      job_name:'شغل 5'
   }

   ],
},
{
   name: 'شغل 5',
   jobs: [
   {
      job_name:'شغل 5'
   },
   {
      job_name:'شغل 5'
   }

   ],
},
{
   name: 'شغل 5',
   jobs: [
   {
      job_name:'شغل 5'
   }

   ],
},
{
   name: 'شغل 5',
   jobs: [
   {
      job_name:'شغل 5'
   }

   ],
},
{
   name: 'شغل 5',
   jobs: [
   {
      job_name:'شغل 5'
   }

   ],
},
{
   name: 'شغل 5',
   jobs: [
   {
      job_name:'شغل 5'
   },
   {
      job_name:'شغل 5'
   },
   {
      job_name:'شغل 5'
   }

   ],
}

]
// For each degree, create a line, dropdown and dropdown-content.

createItems(videoedit_data);   

}


else if (add == '6' || add == '۶') {

document.querySelector('#onvan').innerHTML = 'شغل 6';
document.getElementsByClassName('txt29 titr')[0].innerHTML = 'شغل 6';
   var sci_data = [
{
   name: 'شغل 6',
   jobs: [
   {
      job_name:'شغل 6'
   },
   {
      job_name:'شغل 6'
   },
   {
      job_name:'شغل 6'
   }

   ],
},
{
   name: 'شغل 6',
   jobs: [
   {
      job_name:'شغل 6'
   },
   {
      job_name:'شغل 6'
   }

   ],
},
{
   name: 'شغل 6',
   jobs: [
   {
      job_name:'شغل 6'
   }

   ],
},
{
   name: 'شغل 6',
   jobs: [
   {
      job_name:'شغل 6'
   },
   {
      job_name:'شغل 6'
   }

   ],
},
{
   name: 'شغل 6',
   jobs: [
   {
      job_name:'شغل 6'
   }

   ],
},
{
   name: 'شغل 6',
   jobs: [
   {
      job_name:'شغل 6'
   }

   ],
},
{
   name: 'شغل 6',
   jobs: [
   {
      job_name:'شغل 6'
   }

   ],
},
{
   name: 'شغل 6',
   jobs: [
   {
      job_name:'شغل 6'
   },
   {
      job_name:'شغل 6'
   },
   {
      job_name:'شغل 6'
   }

   ],
}

]
// For each degree, create a line, dropdown and dropdown-content.

createItems(sci_data);   

}


else if (add == '7' || add == '۷') {

document.querySelector('#onvan').innerHTML = 'شغل 7';
document.getElementsByClassName('txt29 titr')[0].innerHTML = 'شغل 7';
   var tech_data = [
{
   name: 'شغل 7',
   jobs: [
   {
      job_name:'شغل 7'
   },
   {
      job_name:'شغل 7'
   },
   {
      job_name:'شغل 7'
   }

   ],
},
{
   name: 'شغل 7',
   jobs: [
   {
      job_name:'شغل 7'
   },
   {
      job_name:'شغل 7'
   }

   ],
},
{
   name: 'شغل 7',
   jobs: [
   {
      job_name:'شغل 7'
   }

   ],
},
{
   name: 'شغل 7',
   jobs: [
   {
      job_name:'شغل 7'
   },
   {
      job_name:'شغل 7'
   }

   ],
},
{
   name: 'شغل 7',
   jobs: [
   {
      job_name:'شغل 7'
   }

   ],
},
{
   name: 'شغل 7',
   jobs: [
   {
      job_name:'شغل 7'
   }

   ],
},
{
   name: 'شغل 7',
   jobs: [
   {
      job_name:'شغل 7'
   }

   ],
},
{
   name: 'شغل 7',
   jobs: [
   {
      job_name:'شغل 7'
   },
   {
      job_name:'شغل 7'
   },
   {
      job_name:'شغل 7'
   }

   ],
}

]
// For each degree, create a line, dropdown and dropdown-content.

createItems(tech_data);   

}




else if (add == '8' || add == '۸') {

document.querySelector('#onvan').innerHTML = 'شغل 8';
document.getElementsByClassName('txt29 titr')[0].innerHTML = 'شغل 8';
   var cooking_data = [
{
   name: 'شغل 8',
   jobs: [
   {
      job_name:'شغل 8'
   },
   {
      job_name:'شغل 8'
   },
   {
      job_name:'شغل 8'
   }

   ],
},
{
   name: 'شغل 8',
   jobs: [
   {
      job_name:'شغل 8'
   },
   {
      job_name:'شغل 8'
   }

   ],
},
{
   name: 'شغل 8',
   jobs: [
   {
      job_name:'شغل 8'
   }

   ],
},
{
   name: 'شغل 8',
   jobs: [
   {
      job_name:'شغل 8'
   },
   {
      job_name:'شغل 8'
   }

   ],
},
{
   name: 'شغل 8',
   jobs: [
   {
      job_name:'شغل 8'
   }

   ],
},
{
   name: 'شغل 8',
   jobs: [
   {
      job_name:'شغل 8'
   }

   ],
},
{
   name: 'شغل 8',
   jobs: [
   {
      job_name:'شغل 8'
   }

   ],
},
{
   name: 'شغل 8',
   jobs: [
   {
      job_name:'شغل 8'
   },
   {
      job_name:'شغل 8'
   },
   {
      job_name:'شغل 8'
   }

   ],
}

]
// For each degree, create a line, dropdown and dropdown-content.

createItems(cooking_data);   

}



else if (add == '9' || add == '۹') {

document.querySelector('#onvan').innerHTML = 'شغل 9';
document.getElementsByClassName('txt29 titr')[0].innerHTML = 'شغل 9';
   var marketing_data = [
{
   name: 'شغل 9',
   jobs: [
   {
      job_name:'شغل 9'
   },
   {
      job_name:'شغل 9'
   },
   {
      job_name:'شغل 9'
   }

   ],
},
{
   name: 'شغل 9',
   jobs: [
   {
      job_name:'شغل 9'
   },
   {
      job_name:'شغل 9'
   }

   ],
},
{
   name: 'شغل 9',
   jobs: [
   {
      job_name:'شغل 9'
   }

   ],
},
{
   name: 'شغل 9',
   jobs: [
   {
      job_name:'شغل 9'
   },
   {
      job_name:'شغل 9'
   }

   ],
},
{
   name: 'شغل 9',
   jobs: [
   {
      job_name:'شغل 9'
   }

   ],
},
{
   name: 'شغل 9',
   jobs: [
   {
      job_name:'شغل 9'
   }

   ],
},
{
   name: 'شغل 9',
   jobs: [
   {
      job_name:'شغل 9'
   }

   ],
},
{
   name: 'شغل 9',
   jobs: [
   {
      job_name:'شغل 9'
   },
   {
      job_name:'شغل 9'
   },
   {
      job_name:'شغل 9'
   }

   ],
}

]
// For each degree, create a line, dropdown and dropdown-content.

createItems(marketing_data);   

}






function IsOnPhoneScreen() { return window.screen.width <= 768; }
function IsOnDesktopScreen() { return window.screen.width > 768; }

var current = undefined;

function DropdownShow(ulElement) {

   if (current != undefined) {
   DropdownHide(current)
}
   console.log('Showing ', ulElement);
   ulElement.style.display = 'block';
current = ulElement;
}
function DropdownHide(ulElement) {
   ulElement.style.display = 'none';
if (current == ulElement) {
      current = undefined;
   }
}
function DropdownToggle(ulElement) {
   if (ulElement.style.display === 'block')
      DropdownHide(ulElement);
   else
      DropdownShow(ulElement);
}
function OnLiiClicked(e, ulElement) {
   if (IsOnDesktopScreen() || ulElement === undefined)
      return;
   DropdownToggle(ulElement);
}
function OnLiiPointerEnter(e, ulElement) {
   if (IsOnPhoneScreen() || ulElement === undefined)
      return;
   DropdownToggle(ulElement);
}
function OnLiiPointerLeave(e, ulElement) {
   if (IsOnPhoneScreen() || ulElement === undefined)
      return;
   DropdownHide(ulElement);
}





function createItems(x) {

   for (let i = 0; i < x.length; i++) {
	let lii = document.createElement('li');
      	lii.className = 'dropdown department dep-' + i;

      	let department_a = document.createElement('a');
      	department_a.className = 'box';
      	// department_a.setAttribute('href' , '#');

      	let department_span = document.createElement('span');
      	let department_span_txt = document.createTextNode(x[i].name);

      	department_span.appendChild(department_span_txt);
      	department_a.appendChild(department_span);
      	lii.appendChild(department_a);

      	let ul_sections = document.createElement('ul');
      	ul_sections.className = 'sections dropdown-content';


      for (let j = 0; j < x[i].jobs.length; j++) {


         let li_sections = document.createElement('li');
         li_sections.className = 'section';

         let a_sections = document.createElement('a');
        a_sections.setAttribute('href' , '#');

         let span_sections = document.createElement('span');
         let span_sections_text = document.createTextNode(x[i].jobs[j].job_name);

         span_sections.appendChild(span_sections_text);
         a_sections.appendChild(span_sections);

         li_sections.appendChild(a_sections);
         ul_sections.appendChild(li_sections);

      }

	lii.appendChild(ul_sections);
      lii.onclick = e => OnLiiClicked(e, ul_sections);
      lii.onpointerenter = e => OnLiiPointerEnter(e, ul_sections);

    let ul_base = document.getElementsByClassName('departments cf')[0];
      ul_base.appendChild(lii);
}

}
