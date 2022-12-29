const arr1 = [];
const arr2 = [];


function eninlist(){
    let namevalue = document.getElementById('name').value;
    arr1.push(namevalue);
    arr2.push(namevalue);
    document.getElementById('show').innerHTML += `<li>${arr1[arr1.length-1]}</li>`;
    document.getElementById('name').value = '';
    document.getElementById('name').focus();
}


function sort(value){
    if(value == 2){
        arr2.sort();
        let show = document.getElementById('show');
        show.innerHTML = '';
        for (let i = 0 ; i < arr2.length ; i++) {
            show.innerHTML += `<li>${arr2[i]}</li>`;        
        }
    }else{  
        let show = document.getElementById('show');
        show.innerHTML = '';
        for (let i = 0 ; i < arr2.length ; i++) {
            show.innerHTML += `<li>${arr1[i]}</li>`;        
        }
    }
}