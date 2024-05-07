import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDoc, addDoc, setDoc, doc, updateDoc} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
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


var pesquisaicon = document.getElementById('pesquisaicon');
var chaticon = document.getElementById('chaticon');
var wikiicon = document.getElementById('wikiicon');
var usuarioicon = document.getElementById('usuarioicon');
var input = document.getElementById('pesquisacampo');
var errodiv = document.getElementById('errodiv');
var home = document.getElementById('logo');
var inicio = document.getElementById('homeicon');

usuarioicon.addEventListener('click', function(){
    try {
      var user = JSON.parse(localStorage.getItem('user'));
      if (user.user === undefined) {
          errodiv.innerHTML = 'Por favor, faça login para usar essa opção';
      } else {
        if (user.casa != undefined) {
            window.location.href = '/pags/perfil/perfil.html';
            localStorage.setItem('perfil', JSON.stringify({
                adm: true,
            }));
        }
        else {
            errodiv.innerHTML = 'Por favor, escolha sua casa primeiro';
        };
      };
    } catch (e) {
      errodiv.innerHTML = 'Por favor, faça login para usar essa opção';
      };
  });
  
  
  
pesquisaicon.addEventListener('click', function(){
    try {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user.user === undefined) {
            errodiv.innerHTML = 'Por favor, faça login para usar essa opção';
        } else {
            var text = input.value;
            setTimeout(function() {
                window.location.href = '/pags/search/search.html';
                text = {
                    valor: text,
                };
                localStorage.setItem('pesquisa', JSON.stringify(text));

            }, 800);
        };
    } catch (e) {
        errodiv.innerHTML = 'Por favor, faça login para usar essa opção';
        };
});

wikiicon.addEventListener('click', function(){
    try {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user.user === undefined) {
            errodiv.innerHTML = 'Por favor, faça login para usar essa opção';
        } else {
            window.location.href = "/pags/wiki/wiki.html";
        };
    } catch (e) {
        errodiv.innerHTML = 'Por favor, faça login para usar essa opção';
        };
});

chaticon.addEventListener('click', function(){
    try {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user.user === undefined) {
            errodiv.innerHTML = 'Por favor, faça login para usar essa opção';
        } else {
            window.location.href = "/pags/chat/chat.html";
        };
    } catch (e) {
        errodiv.innerHTML = 'Por favor, faça login para usar essa opção';
        };
});

home.classList.add('pointer');

home.addEventListener('click', function () {
    window.location.href = "/index.html";
});

inicio.addEventListener('click', function () {
    try {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user.user === undefined) {
            errodiv.innerHTML = 'Por favor, faça login para usar essa opção';
        } else {
            window.location.href = "/pags/inicio/inicio.html";
        };
    } catch (e) {
        errodiv.innerHTML = 'Por favor, faça login para usar essa opção';
        };
});