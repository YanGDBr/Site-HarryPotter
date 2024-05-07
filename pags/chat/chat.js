import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDoc, addDoc, setDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
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


try {
    if (user.user === undefined) {
        window.location.href = '/index.html';
    } else {

    };
    } catch (e) {
    window.location.href = '/index.html';
};

var amigos = document.getElementById('barralateral');
var chatdiv = document.getElementById('chatbarra');
var casatexto = document.getElementById('casatexto');
var enviar = document.getElementById('enviar');
var mensagemdiv = document.getElementById('mensagens');
var campo = document.getElementById('input');
var msgs;
var chatatual;

async function entrarChat(chat){
    if(chat == 'Corvinal') {
        mensagemdiv.innerHTML = `
    <div id="titulo2">
        <h1 class="corvi">${chat}</h1>
    </div>
    `;
    } else if(chat == 'Sonserina') {
        mensagemdiv.innerHTML = `
    <div id="titulo2">
        <h1 class="sonse">${chat}</h1>
    </div>
    `;
    } else if(chat == 'Lufa-Lufa') {
        mensagemdiv.innerHTML = `
    <div id="titulo2">
        <h1 class="lufa">${chat}</h1>
    </div>
    `;
    } else if(chat == 'Grifinória') {
        mensagemdiv.innerHTML = `
    <div id="titulo2">
        <h1 class="grifi">${chat}</h1>
    </div>
    `;
    } else {
        mensagemdiv.innerHTML = `
    <div id="titulo2">
        <h1 class="white">${chat.split('-')[0]}</h1>
    </div>
    `;
    }
    
    var ref = doc(db, 'chat', chat);
    var get = await getDoc(ref);
    if(get.exists()) {
        msgs = get.data();
    } else {
        if(chat != 'Corvinal' && chat != 'Sonserina' && chat != 'Lufa-Lufa' && chat != 'Grifinória') {
            var partes = chat.split('-');
            ref = doc(db, 'chat', partes[1]+"-"+partes[0]);
            get = await getDoc(ref);
            msgs = get.data();
        } else {
            await setDoc(ref, {
                mensagens: [],
            });
            get = await getDoc(ref);
            msgs = get.data();
        }
        
    };
    for(var i = 0; i < msgs.mensagens.length; i++) {
        var novamsg = document.createElement('div');
        novamsg.className = 'mensagem';
        novamsg.innerHTML = `
            <div class="identificacao">
                <ion-icon name="person-circle-outline" class="pointer"></ion-icon>
            </div>
            <div class="textos">
                <h1>${msgs.mensagens[i].user}</h1>
                <p>${msgs.mensagens[i].msg}</p>
            </div>
        `;

        mensagemdiv.appendChild(novamsg);
    };
    chatatual = chat;

};

async function salvarMsg(text) {
    var ref = doc(db, 'chat', chatatual);
    var get = await getDoc(ref);
    var sal = get.data();
    console.log(sal);
    console.log(sal.mensagens);
    try{
        sal.mensagens.push({
            user: user.user,
            msg: text
        });
    } catch(e) {
        sal.mensagens = [{
            user: user.user,
            msg: text
        }];
    }
    
    await setDoc(ref, sal);
};

if (user.casa == 'Corvinal') {
    casatexto.innerHTML = `
    <button class="botao2 azul" id="casa">CORVINAL</button>
    `;
    entrarChat('Corvinal');
} else if(user.casa == 'Sonserina') {
    casatexto.innerHTML = `
    <button class="botao2 verde" id="casa">SONSERINA</button>
    `;
    entrarChat('Sonserina');
} else if(user.casa == 'Lufa-Lufa') {
    casatexto.innerHTML = `
    <button class="botao2 amarelo" id="casa">LUFA-LUFA</button>
    `;
    entrarChat('Lufa-Lufa');
} else if(user.casa == 'Grifinória') {
    casatexto.innerHTML = `
    <button class="botao2 vermelho" id="casa">GRIFINÓRIA</button>
    `;
    entrarChat('Grifinória');
}

for(var i=0;i<user.amigos.length;i++) {
    var nomeamigo = user.amigos[i];
    var criar = document.createElement("button");
    criar.className = 'botao';
    criar.id = 'amigo' + i;
    criar.innerHTML = nomeamigo;
    amigos.appendChild(criar);
    var botao = document.getElementById('amigo'+i);
    $(botao).on('click', (function(i, nomeamigo) {
        return function() {
            entrarChat(nomeamigo+'-'+user.userid);
        };
    })(i, nomeamigo));
};


$(enviar).on('click', function() {
    var texto = campo.value;
    var msg = document.createElement('div');
    msg.className = 'mensagem';
    msg.innerHTML = `
    <div class="identificacao">
        <ion-icon name="person-circle-outline" class="pointer"></ion-icon>
    </div>
    <div class="textos">
        <h1>${user.user}</h1>
        <p>${texto}</p>
    </div>
    `;
    mensagemdiv.appendChild(msg);
    salvarMsg(texto);

});

var casa = document.getElementById('casa');
$(casa).on('click', function (){

    entrarChat(user.casa);
    
});

