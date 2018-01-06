// Initialize Firebase
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

let contactosRef = firebase.database().ref('contactosWeb');
document.getElementById('alertInfo').style.display= 'none';


document.getElementById('formContacto').addEventListener('submit', guardarFormulario);

function guardarFormulario(e){
    e.preventDefault();
    let nombre = document.getElementById('txtNombre').value;
    let email = document.getElementById('txtEmail').value;
    let comentario = document.getElementById('txtComentario').value;

    let nuevoComentarioRef = contactosRef.push();
        nuevoComentarioRef.set({
            email: email,
            nombre: nombre,
            comentario: comentario
    });

    document.getElementById('alertInfo').style.display= 'block';

    document.getElementById('formContacto').reset();

    setTimeout(function(){
        document.getElementById('alertInfo').style.display= 'none';
    }, 2000);
}