function uncover(divId){
    console.log(divId);
    const element = document.getElementById(divId);
    element.style.display = 'block';
    element.style.color = '#FF0000';
    toastr.success('Uncovered!', 'Success');
    
}