function uncover(divId,clN){
    console.log(divId);
    
    hideMen(clN);
    const element = document.getElementById(divId);
    element.style.display = 'block';
    element.style.color = '#FFFFFF';
    //toastr.success('Uncovered!', 'Success');

     // Update the URL without reloading the page
     history.pushState({ section: divId }, '', `/${divId}`);
     if(divId=='contactform'){
        contForm();
     }
}

function hideMen(clM){

    const resto= document.querySelectorAll('.men');
    
    resto.forEach(function(resto){
        if(clM==true && resto.id == 'cloudNav'){
            console.log('cloudMen',clM,'r',resto.id);
       
        }else{
            resto.style.display = 'none';
        }
    });

}

function inicio(){
    hideMen();  
    const resto= document.querySelectorAll('.ini')
    resto.forEach((item) => {
        item.style.display = 'flex';
    });
}
function repositionDiv(section) {
    console.log('section',section);
    const cloudNavDiv = document.getElementById('cloudNav');
    console.log('cloudNavDiv',cloudNavDiv);

        cloudNavDiv.style.display = 'block';

    uncover(section,true); // Call the existing uncover function
}

function contForm(){
    const btn = document.getElementById('ctcFormbtn');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre');
        const telefono = document.getElementById('telefono');
        const email = document.getElementById('email');
        const request = document.getElementById('req');
        let valid=false;
    
    if(!nombre.value||!telefono.value||!email.value||!request.value){
       
    if(nombre.value==''){//agregar toasts a cada if
     nombre.classList.add('is-invalid');
toastr.error('El campo nombre no puede estar vacío','Corrija para continuar');
    }else{nombre.classList.remove('is-invalid')} 
    if(telefono.value==''){
        telefono.classList.add('is-invalid');
    toastr.error('El campo teléfono no puede estar vacío','Corrija para continuar');
    }else{telefono.classList.remove('is-invalid')}
    if(email.value==''){email.classList.add('is-invalid');
toastr.error('El campo email no puede estar vacío','Corrija para continuar');
    }else{email.classList.remove('is-invalid')}
    if(request.value==''){request.classList.add('is-invalid');
        toastr.error('El campo Solicitud no puede estar vacío','Corrija para continuar');
    }else{request.classList.remove('is-invalid')}
    valid=true;}else{valid=false;}
    if(valid){return;}else{
        const data = gaDat();
        contact(data);}
    });

}

const gaDat = () => {
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');
    const request = document.getElementById('req');
    
    const data = `Nombre: ${nombre.value} tel:${telefono.value} email:${email.value} req:${request.value}`;
    return data;
}


function contact(data) {
    const phoneNumber = '7222450592';
    const message = encodeURIComponent(data);
    console.log('message',message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Handle back and forward navigation
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.section) {
        hideMen();
        const element = document.getElementById(event.state.section);
        element.style.display = 'block';
        element.style.color = '#FFFFFF';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');
    if (section) {
        uncover(section);
    } else {
        inicio(); // Default section
    }
});