import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDoc, addDoc, setDoc, doc, updateDoc, query, getDocs, where} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js"
// Configurar o Firebase com suas credenciais
const firebaseConfig = {
    apiKey: "AIzaSyDWnVDfhnQcjAH1LH0ZEURceLC9xtIRzWM",
    authDomain: "site-harry-potter.firebaseapp.com",
    projectId: "site-harry-potter",
    storageBucket: "site-harry-potter.appspot.com",
    messagingSenderId: "557858034792",
    appId: "1:557858034792:web:72c7ddf4daa185fdef57dd",
    
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



var user = JSON.parse(localStorage.getItem('user'));
var busca = JSON.parse(localStorage.getItem('pesquisa'));
var titulo = document.querySelector('#veja h1');

var tabela = document.querySelector('#users');


try {
    if (user.user === undefined) {
        window.location.href = '/index.html';
    } else {

    };
    } catch (e) {
    window.location.href = '/index.html';
};

titulo.innerHTML += busca.valor;

const usuarios = collection(db, 'usuarios');
const q = query(usuarios, where('userid', '>=', busca.valor.toUpperCase()), where('userid', '<=', busca.valor.toUpperCase()+'\uf8ff'));

const documentos= await getDocs(q);
var i = 0;
var informacao = [];
documentos.forEach((doc) => {
    if (doc.data().userid == user.userid) {

    } else {
        i++;
        // console.log(doc.id, " => ", doc.data().user);
        tabela.innerHTML += `
        <div class="usuario">
            <div>
                <ion-icon name="person-circle-outline" class="pointer" id="usuario`+i+`"></ion-icon>
                <h3>- `+ doc.data().user + `</h3>
            </div>
        </div>
        `;
        informacao[(i-1)] = {
            user: doc.data().user,
            biografia: doc.data().biografia,
            data: doc.data().data,
            casa: doc.data().casa
    };
    
    };
    
});

var tudo = document.getElementsByClassName('usuario');

for(let t = 0; t < tudo.length; t++) {
    var io = tudo[t].querySelector('#usuario' + (t+1));
    $(io).on('click', (function(t) {
        return function() {
            localStorage.setItem('perfil', JSON.stringify(informacao[t]));
            window.location.href = '/pags/perfil/perfil.html';
        }
    })(t));
};

async function autoSave() {
    await setDoc(doc(db, 'usuarios', user.userid), user);
    localStorage.setItem('user', JSON.stringify(user));
};

setInterval(autoSave, 2000);







