import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDoc, addDoc, setDoc, doc, updateDoc, query, getDocs, where, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js"

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
var perfil = JSON.parse(localStorage.getItem('perfil'));

async function autoSave() {
    user = JSON.parse(localStorage.getItem('user'));
    await setDoc(doc(db, 'usuarios', user.userid), user);
    localStorage.setItem('user', JSON.stringify(user));
};
var sla = false;

setInterval(autoSave, 2000);

var titulo = document.querySelector('#veja h1');
var titulodiv = document.querySelector('#veja');
var casa = document.querySelector('#casa label');
var img = document.querySelector('#casa img');
var tempo = document.querySelector('#adicionaramigo h2');
var biografia = document.querySelector('#biografia p');
var botao1 = document.querySelector('#botao1');
var botao2 = document.querySelector('#botao2');
var biografiadiv = document.querySelector('#biografia');
var erro = document.querySelector('#erro');

function remover() {
    $(botao1).off('click');
    $(botao2).off('click');
}
async function existe(nome) {
    const docRef = doc(db, 'usuarios', nome.toUpperCase());
    const usuario = await getDoc(docRef);
    let sla;
    if (usuario.exists()) {
      sla = false;
    } else {
      sla = true;
    };
    return sla;
};

if (perfil.adm) {
    remover();
    titulo.innerHTML = user.user;
    casa.innerHTML = user.casa;
    var caixa = document.getElementById('caixa');
    if (user.casa == 'Grifinória') {
        img.src = '/images/grifinor.png';
        caixa.innerHTML = 'Grifinória<br>Lar dos bravos guerreiros, pórem geralmente tem atitudades agressivas, egoistas e teimosia'
    } else if (user.casa == 'Corvinal') {
        img.src = '/images/corvinal.png';
        casa.style.color = 'rgb(34, 34, 221)';
        caixa.innerHTML = 'Corvinal<br>Destaca-se por sua extrema inteligência e personalidades unicas, porém são frios, insensíveis e críticos';
    } else if (user.casa == 'Sonserina'){
        img.src = '/images/sonserina.png';
        casa.style.color = 'rgb(35, 195, 14)';
        caixa.innerHTML = "Sonserina<br>Pessoas que buscam grandeza, como resultado são muito competitivos e estão sempre se dedicando para alcançar suas metas";
    } else if (user.casa == 'Lufa-Lufa'){
        img.src = '/images/lufa.png';
        casa.style.color = 'rgb(231, 231, 32)';
        caixa.innerHTML = "Lufa-Lufa<br>Lar de pessoas extremamente dedicadas e honestas porém são timidos e ingênuos";
    };

    let diferenca = Math.round(new Date().getTime() /1000) - user.data.seconds;

    let diferencaEmDias = Math.round(diferenca / (1000 * 60 * 60 * 24));
    if (diferencaEmDias <= 0.1) {
        tempo.innerHTML = `Essa conta foi criada há pouco tempo atrás`;
    } else if (diferencaEmDias >= 0.1 && diferencaEmDias <= 1) {
        tempo.innerHTML = `Essa conta foi criada há algumas horas atrás`;
    } else {
        tempo.innerHTML += `${diferencaEmDias} Dias`;
    };

    if (user.biografia == undefined) {
        biografia.innerHTML = 'Sem biografia.';
    } else {
        biografia.innerHTML = user.biografia;
    };
    botao1.innerHTML = 'Mudar Biografia';
    botao2.innerHTML = 'Pedidos de Amizade';
    $(botao1).on('click', function(){
        if (botao1.innerHTML == 'Mudar Biografia') {
            biografiadiv.innerHTML = `
        <h2>Biografia</h2>
        <textarea type="text" placeholder="Máximo 200 Caracteres" maxlength="200" rows="50" cols="4" id="textar"></textarea>
        `;
        botao1.innerHTML = 'Salvar';
        } else {
            
            var text = document.querySelector('#textar').value;
            user.biografia = text;
            localStorage.setItem('user', JSON.stringify(user));
            biografiadiv.innerHTML = `
            <h2>Biografia</h2>
            <p></p>
            `;
            var biografia = document.querySelector('#biografia p');
            biografia.innerHTML = text;
            botao1.innerHTML = 'Mudar Biografia';
                    };
        
    });
    $(botao2).on('click', async function(){
        if (botao2.innerHTML == 'Pedidos de Amizade') {
            var amigos = document.querySelector('#amigos');
            var i;
            try {
                i = user.pedidos.length;
            } catch (e) {
                i = 0;
                user.pedidos = [];
                
            };
            if (i == 0) {
                amigos.innerHTML = '<h1 id="kk">Você não tem pedidos de amizades :(</h1>';
            };
            for(let t = 0; t < user.pedidos.length; t++) {
                var ref = doc(db, 'usuarios', user.pedidos[t]);
                var get = await getDoc(ref);
                var perfilpedido = get.data();
                var img;
                if (perfilpedido.casa == 'Grifinória') {
                    img = '/images/grifinor-bg.png';
                } else if(perfilpedido.casa == 'Corvinal') {
                    img = '/images/corvinal-bg.png';
                }else if(perfilpedido.casa == 'Lufa-Lufa') {
                    img = '/images/lufa-bg.png';
                } else if(perfilpedido.casa == 'Sonserina') { 
                    img = '/images/sonserina-bg.png';
                };
                var div = document.createElement('div');
                div.className = 'amizade';
                div.id = 'pedido' + t;
                div.innerHTML = `
                    <div>
                        <ion-icon name="person-circle-outline" class="pointer"></ion-icon>
                        <h1>${perfilpedido.user}</h1>
                        <img src="${img}">
                    </div>
                    <button class="ace" id="aceitar${t}">Aceitar</button>
                    <button class="recu" id="recusar${t}">Recusar</button>
                `;
                amigos.appendChild(div);
                var aceitar = document.querySelector('#aceitar'+t);
                var recusar = document.querySelector('#recusar'+t);
                $(aceitar).on('click', (function(perfilpedido, t) {
                    return async function() {
                        var del = document.getElementById('pedido'+t);
                        del.parentNode.removeChild(del);
                        
                        var ref = doc(db, 'usuarios', user.pedidos[t]);
                        var get = await getDoc(ref);
                        var perfilpedido = get.data();
                        if (perfilpedido.amigos == undefined) {
                            perfilpedido.amigos = [];
                        };
                        perfilpedido.amigos.push(user.userid);
                        user.amigos.push(perfilpedido.userid);
                        var index = user.pedidos.indexOf(perfilpedido.userid);
                        user.pedidos.splice(index, 1);
                        await setDoc(doc(db,'chat', perfilpedido.userid+'-'+user.userid), {mensagens: []});
                        localStorage.setItem('user', JSON.stringify(user));
                        await setDoc(ref, perfilpedido);
                        await setDoc(doc(db, 'usuarios', user.userid), user);
                        if(user.pedidos.length == 0) {
                            amigos.innerHTML = '<h1 id="kk">Você não tem pedidos de amizades :(</h1>';
                        };
                        
                    }
                })(perfilpedido, t));
                $(recusar).on('click', (function() {
                    return async function() {
                        var del = document.getElementById('pedido'+t);
                    del.parentNode.removeChild(del);
                    var ref = doc(db, 'usuarios', user.pedidos[t]);
                        var get = await getDoc(ref);
                        var perfilpedido = get.data();
                        var index = user.pedidos.indexOf(perfilpedido.userid);
                        user.pedidos.splice(index, 1);
                    if(user.pedidos.length == 0) {
                        amigos.innerHTML = '<h1 id="kk">Você não tem pedidos de amizades :(</h1>';
                    };
                    localStorage.setItem('user', JSON.stringify(user));
                    await setDoc(ref, perfilpedido);
                    await setDoc(doc(db, 'usuarios', user.userid), user);
                    
                    }
                })(perfilpedido, t));
            };            
            amigos.style.display = 'flex';
            botao2.innerHTML = 'Fechar';
            
        } else {
            var amigos = document.querySelector('#amigos');
            amigos.innerHTML = '';
            amigos.style.display = 'none';
            botao2.innerHTML = 'Pedidos de Amizade';
            
        };
        
    });
} 
else {
    remover();
    titulo.innerHTML = perfil.user;
    casa.innerHTML = perfil.casa;
    botao2.style.display = 'none';

    if (perfil.casa == 'Grifinória') {
        img.src = '/images/grifinor.png';
    } else if (perfil.casa == 'Corvinal') {
        img.src = '/images/corvinal.png';
        casa.style.color = 'rgb(34, 34, 221)';
    } else if (perfil.casa == 'Sonserina'){
        img.src = '/images/sonserina.png';
        casa.style.color = 'rgb(35, 195, 14)';
    } else if (perfil.casa == 'Lufa-Lufa'){
        img.src = '/images/lufa.png';
        casa.style.color = 'rgb(231, 231, 32)';
    };


    let diferenca = Math.round(new Date().getTime() /1000) - perfil.data.seconds;

    let diferencaEmDias = Math.round(diferenca / (1000 * 60 * 60 * 24));
    if (diferencaEmDias <= 0.1) {
        tempo.innerHTML = `Essa conta foi criada há pouco tempo atrás`;
    } else if (diferencaEmDias >= 0.1 && diferencaEmDias <= 1) {
        tempo.innerHTML = `Essa conta foi criada há algumas horas atrás`;
    } else {
        tempo.innerHTML += `${diferencaEmDias} Dias`;
    };

    if (perfil.biografia == undefined) {
        biografia.innerHTML = 'Sem biografia.';
    } else {
        biografia.innerHTML = perfil.biografia;
    };
    var ref = doc(db, 'usuarios', perfil.user.toUpperCase())
    var get = await getDoc(ref);
    var userperfil = get.data();
    var i;
        try {
            i = userperfil.pedidos.length;
        } catch(e) {
            i = 0;
            userperfil.pedidos = [];
        };
        try {
            var temp = userperfil.amigos.length;
        } catch(e) {
            userperfil.amigos = [];
        };

    if (userperfil.pedidos.includes(user.userid)) {
        botao1.innerHTML = 'Pedido de amizade enviado';
    } else if(userperfil.amigos.includes(user.userid)) {
        botao1.innerHTML = 'Vocês são amigos';
    } else {
        botao1.innerHTML = 'Enviar pedido de amizade';
    };
    botao2.innerHTML = 'Chat Pessoal';
    $(botao1).on('click', async function () {
        if(botao1.innerHTML == 'Pedido de amizade enviado') {

        } else if (botao1.innerHTML == 'Enviar pedido de amizade') {
            userperfil.pedidos[i] = user.userid;
            await setDoc(ref, userperfil);
            botao1.innerHTML = 'Pedido de amizade enviado';
        } else {

        };
        
    });
};


