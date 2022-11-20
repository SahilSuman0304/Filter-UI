const dropdowns = document.querySelectorAll('.dropdown');
let selectedProf ;

dropdowns.forEach(dropdown =>{
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');
  

  select.addEventListener('click', () =>{
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option =>{
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
     selectedProf = selected.innerText;
      options.forEach(option =>{
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  })
})


var arr =[{
    id:1,
    Name:'John',
    Profession:'Developer',
    Age:'18'
  },{
    id:2,
    Name:'Jack',
    Profession:'Developer',
    Age:'20'
  },{
    id:3,
    Name:'Karen',
    Profession:'Admin',
    Age:'19'
  },   
];

  function main(arr){

    arr.map((e) => {
      e.Age = parseInt(e.Age);
      return e;
    });
  arr.forEach((e) => {
      if (e.Name == "John") {
        e.Age = 19;
      }
    });

    var arrDeveloper = []
    var arrAdmin = []

    for(let i=0;i<arr.length;i++){
    if(arr[i].Profession === 'Developer'){
    arrDeveloper.push((arr[i]));
    } else if(arr[i].Profession === 'Admin'){
    arrAdmin.push((arr[i]));
  }
 }
 $("#outerdiv").empty();

 $(document).ready(function() {
  for(var i = 0; i<arrDeveloper.length; i++){
  $(`<div id="innerdiv" class="border pad"><span>${(i+1) +"."}</span>${"Name: "+arrDeveloper[i]['Name']}<span>${"Developer: "+arrDeveloper[i]['Profession']}</span><span>${"Age: "+arrDeveloper[i]['Age']}</span></div>`).appendTo('#outerdiv');
  }
  });
  
  $(document).ready(function() {
  for(var i = 0; i<arrAdmin.length; i++){
    $(`<div id="innerdiv" class="border pad"><span>${(i+1) +"."}</span>${"Name: "+arrAdmin[i]['Name']}<span>${"Developer: "+arrAdmin[i]['Profession']}</span><span>${"Age: "+arrAdmin[i]['Age']}</span></div>`).appendTo('#outerdiv');
  }
  });
  }
 
 
  function filter() {
    if(!selectedProf){
      alert("Please select a profession")
      return
    }
    if(selectedProf !== "Professional"){
      var new_Arr = arr.filter((e)=>
      e.Profession == selectedProf
    )
    console.log(new_Arr)
    main(new_Arr);
    }else{
      main(arr);
    }    
  }

  main(arr);

