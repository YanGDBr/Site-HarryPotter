import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDoc, addDoc, setDoc, doc, updateDoc, where, query, getDocs} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
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


var troca = document.getElementById('trocarlogin');
var titu = document.getElementById('titu');
var bota = document.getElementById('botao');

// var pointer = document.getElementsByClassName('pointer');





async function Registrar(nome, senha) {
  var nome2 = nome.toUpperCase();
  await setDoc(doc(db, 'usuarios', nome2), {
    user: nome,
    userid: nome2,
    password: senha,
    data: new Date(),
    novo: true,
    pedidos: [],
    amigos: []
  });
};

async function registro(nome, senha) {

  const docRef = doc(db, 'usuarios', nome.toUpperCase());
  const usuario = await getDoc(docRef);
  if (usuario.exists()) {
    document.getElementById('erro').innerHTML = 'Usuario já cadastrado'
    document.getElementById('erro').style.color = "red";
  } else {
    Registrar(nome, senha);
    document.getElementById('erro').innerHTML = 'Registrado com sucesso'
    document.getElementById('erro').style.color = "green";
    document.getElementById('senhalogin').value = '';
    document.getElementById('nomelogin').value = '';
    login(nome, senha);
    document.getElementById('top').style.cursor = 'wait';
  };

};


async function Logar(usuario) {

  var conta = await usuario.data();
  localStorage.setItem('user', JSON.stringify(conta));
  setTimeout(function () {
    window.location.href = "./pags/inicio/inicio.html";
  }, 600);

};

async function login(nome, senha) {
  var nome2 = nome.toUpperCase();
  const docRef = doc(db, 'usuarios', nome2);
  const usuario = await getDoc(docRef);
  if (usuario.exists()) {
    if (senha === usuario.data().password) {
      Logar(usuario);
      document.getElementById('top').style.cursor = 'wait';
    } else {
      document.getElementById('erro').innerHTML = 'Senha incorreta'
      document.getElementById('erro').style.color = "red";

    };
  } else {
    document.getElementById('erro').innerHTML = 'Usuario não encontrado';
    document.getElementById('erro').style.color = "red";
  };

};


document.getElementById('trocarlogin').addEventListener('click', function () {
        
        if (troca.innerHTML=== 'Já tenho uma conta') {
            troca.innerHTML = 'Criar uma conta';
            titu.innerHTML = 'LOGIN';
            bota.innerHTML = 'LOGAR';
        } else {
            troca.innerHTML = 'Já tenho uma conta';
            titu.innerHTML = 'Registre-se';
            bota.innerHTML = 'REGISTRAR';
        }
    });

bota.addEventListener('click', function () {
  if (bota.innerHTML == 'LOGAR') {
    const nomelogin = document.getElementById('nomelogin').value;
    const senhalogin = document.getElementById('senhalogin').value;
    login(nomelogin, senhalogin);
  } else if (bota.innerHTML == 'REGISTRAR') {
    const nomeregister = document.getElementById('nomelogin').value;
    const senharegister = document.getElementById('senhalogin').value;
    registro(nomeregister, senharegister);
  };
});



