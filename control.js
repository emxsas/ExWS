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
function repositionDiv(section) {
    const cloudNavDiv = document.getElementById('cloudNav');
    cloudNavDiv.style.display = 'block';
    uncover(section); // Call the existing uncover function
}

function contForm(){
    hideMen();
    document.getElementById('contactform').style.display = 'block';
    const form = document.getElementById('form');
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
     nombre.classList.add('is-invalid');}else{nombre.classList.remove('is-invalid')} 
    if(telefono.value==''){
        telefono.classList.add('is-invalid');}else{telefono.classList.remove('is-invalid')}
    if(email.value==''){email.classList.add('is-invalid');}else{email.classList.remove('is-invalid')}
    if(request.value==''){request.classList.add('is-invalid');}else{request.classList.remove('is-invalid')}
    valid=true;}else{valid=false;}
    if(valid){return;}else{
        const data = saveData();
        newCont(data);}
    });


    /*
    const tit = document.createElement('h2');
    tit.innerText='Contacto';
    tit.style.color='white';
    const descripC=document.createElement('p');
    descripC.innerHTML='Para más información, dejanos tus datos y te contactaremos: <br><br><br><br>';
    descripC.style.color='white';
    const nom = document.createElement('input');
    nom.setAttribute('type', 'text');
    nom.setAttribute('placeholder', 'Nombre');
    nom.setAttribute('id', 'nombre');
    nom.setAttribute('class', 'form-control');
    nom.setAttribute('required', 'true');
    const nLabel = document.createElement('label');
    nLabel.setAttribute('for', 'nombre');
    nLabel.innerHTML = 'Nombre:';

    const ap = document.createElement('input');
    const tel = document.createElement('input');
    tel.setAttribute('type', 'text');
    tel.setAttribute('placeholder', 'Telefono');
    tel.setAttribute('id', 'telefono');
    tel.setAttribute('class', 'form-control');
    tel.setAttribute('required', 'true');
    const tLabel = document.createElement('label');
    tLabel.setAttribute('for', 'telefono');
    tLabel.innerHTML = 'Telefono:';
  
    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('placeholder', 'Email'); 
    email.setAttribute('id', 'email');
    email.setAttribute('class', 'form-control');
    email.setAttribute('required', 'true');
    const eLabel = document.createElement('label');
    eLabel.setAttribute('for', 'email');
    eLabel.innerHTML = 'Email:';

    const req = document.createElement('textarea');
    req.setAttribute('placeholder', 'Request');
    req.setAttribute('id', 'req');
    req.setAttribute('class', 'form-control');
    req.setAttribute('required', 'true');
    req.setAttribute('rows', '4');
    const rLabel = document.createElement('label');
    rLabel.setAttribute('for', 'req');
    rLabel.innerHTML = 'Solicitud:';
   
    
    
    const btn = document.createElement('button');
    btn.setAttribute('class', 'btn btn-primary');
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const data = saveData();
        newCont(data);
    });
    btn.innerHTML = 'Guardar';
   
    form.setAttribute('id', 'form');
    form.setAttribute('class', 'form-floating');
    form.appendChild(tit);
    form.appendChild(descripC);
    form.appendChild(nom);    
    form.appendChild(nLabel);
    form.appendChild(tel);
    form.appendChild(tLabel);
    form.appendChild(email);
    form.appendChild(eLabel);
    form.appendChild(req);
    form.appendChild(rLabel);
    form.appendChild(btn);
    */
    
    


}

const saveData = () => {
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');
    const request = document.getElementById('req');
    
    const data = {
        nom:nombre.value,
        tel:telefono.value,
        email:email.value,
        req:request.value
    };
    console.log(data);
    toastr.success('Data Saved!', 'Success');
    document.getElementById('form').reset();
    return data;
}


async function newCont(data){
try{
    console.log(data);
    /*const response = await fetch('api/newcont', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const res = await response.json();
    console.log(res);
    if(res.succ===true){*/

    toastr.success('Te contactaremos pronto', 'Gracias!');
    document.getElementById('form').reset();                    
    inicio();
    /*}esle{toastr.error('Error al guardar tu contacto', 'Error');}*/
}
catch(error){
    console.log(error);
    toastr.error('No fue posible contactarnos', 'Error');
}

}