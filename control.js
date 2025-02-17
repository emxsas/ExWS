function uncover(divId){
    console.log(divId);
    
    hideMen();
    const element = document.getElementById(divId);
    element.style.display = 'block';
    element.style.color = '#FFFFFF';
    toastr.success('Uncovered!', 'Success');
    
}

function hideMen(){

    const resto= document.querySelectorAll('.men');
    console.log(resto);
    resto.forEach(function(resto){
        resto.style.display = 'none';
    });

}

function inicio(){
    hideMen();
    const resto= document.querySelectorAll('.ini')
    console.log(resto);
    resto.forEach((item) => {
        item.style.display = 'flex';
    });
}