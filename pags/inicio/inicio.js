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


var escolhercasa = `
<div id="veja">
<h1>Seja Bem-Vindo Bruxo 🧙</h1>
</div>
<div id="casa">
<h2>Escolha sua Casa!</h2>
</div>
<div id="divcasa">
<div id="divgri">
    <label for="grifinor">Grifinória</label>
    <img src="/images/grifinor.png" class="imgini" id="grifinor" name="grifinor">
    <span class="caixa">Grifinória<br>Lar dos bravos guerreiros, pórem geralmente tem atitudades agressivas, egoistas e teimosia</span>
</div>
<div id="divlufa">
    <label for="lufa">Lufa-Lufa</label>
    <img src="/images/lufa.png" class="imgini" id="lufa" name="lufa">
    <span class="caixa">Lufa-Lufa<br>Lar de pessoas extremamente dedicadas e honestas porém são timidos e ingênuos</span>
</div>
<div id="divson">
    <label for="sonserina">Sonserina</label>
    <img src="/images/sonserina.png" class="imgini" id="sonserina" name="sonserina">
    <span class="caixa">Sonserina<br>Pessoas que buscam grandeza, como resultado são muito competitivos e estão sempre se dedicando para alcançar suas metas</span>
</div>
<div id="divcorvi">
    <label for="corvinal">Corvinal</label>
    <img src="/images/corvinal.png" class="imgini" id="corvinal" name="corvinal">
    <span class="caixa">Corvinal<br>Destaca-se por sua extrema inteligência e personalidades unicas, porém são frios, insensíveis e críticos</span>
</div>
</div>

`;



var pag = document.getElementById("posts");


function paginicial(casa) {
    if (casa == 'Corvinal') {
        pag.innerHTML = `
        <div id="veja">
            <h1>Você está na casa Corvinal!</h1>
        </div>
        <div id="casa2">
            <h2 id="corvi">Veja algumas coisas sobre sua Casa abaixo</h2>
        </div>
        <div id="sobra">
            <div id="imagemcasa">
                <div class="titulo2">
                    <h3>Representação</h3>
                </div>
                <div class="sobrou">
                    <img src="/images/corvinalcuriosidade.png" id="imgcurio"> 
                </div>
            </div>
            <div id="mascote">
                <div class="titulo2">
                    <h3>Mascote</h3>
                </div>
                <div class="sobrou">
                    <p>O Mascote da Casa Corvinal é a Águia, que por natureza tem personalidade parecida com os membros</p>
                    <img src="/images/corvinalmascote.png" id="mascoteimg">
                </div>
            </div>
            <div id="conhecimento">
                <div class="titulo2">
                    <h3>Veja mais na Wiki</h3>
                    <img src="/images/book-outline.svg" class="svg pointer" id="clickwiki">
                </div>
                <div class="sobrou" id="especial">
                    <h3>Converse com sua Casa!</h3>
                    <img src="/images/chatbubble-ellipses-outline.svg" class="svg pointer" id="clickchat">
                
                </div>
            </div>
        </div>
        `;
        var chatclick = document.getElementById("clickchat");
        var wikiclick = document.getElementById("clickwiki");
        $(chatclick).on('click', function() {
            window.location.href = '/pags/chat/chat.html';
        });
        $(wikiclick).on('click', function() {
            window.location.href = '/pags/wiki/wiki.html';
        });
    } 
    else if(casa == 'Sonserina') {
        pag.innerHTML = `
        <div id="veja">
            <h1>Você está na Casa Sonserina!</h1>
        </div>
        <div id="casa2">
            <h2 id="sonse">Veja algumas coisas sobre sua Casa abaixo</h2>
        </div>
        <div id="sobra">
            <div id="imagemcasa">
                <div class="titulo2">
                    <h3>Representação</h3>
                </div>
                <div class="sobrou">
                    <img src="/images/sonserinacuriosidade.png" id="imgcurio"> 
                </div>
            </div>
            <div id="mascote">
                <div class="titulo2">
                    <h3>Mascote</h3>
                </div>
                <div class="sobrou">
                    <p>O Mascote principal da casa Sonserina é a Serpente, devido a semelhança da personalidade dos integrantes da casa com uma Serpente</p>
                    <img src="/images/sonserinamascote.png" id="mascoteimg">
                </div>
            </div>
            <div id="conhecimento">
                <div class="titulo2">
                    <h3>Veja mais na Wiki</h3>
                    <img src="/images/book-outline.svg" class="svg pointer" id="clickwiki">
                </div>
                <div class="sobrou" id="especial">
                    <h3>Converse com sua Casa!</h3>
                    <img src="/images/chatbubble-ellipses-outline.svg" class="svg pointer" id="clickchat">
                </div>
            </div>
        </div>
        
        `;
        var chatclick = document.getElementById("clickchat");
        var wikiclick = document.getElementById("clickwiki");
        $(chatclick).on('click', function() {
            window.location.href = '/pags/chat/chat.html';
        });
        $(wikiclick).on('click', function() {
            window.location.href = '/pags/wiki/wiki.html';
        });
    }
    else if(casa == 'Lufa-Lufa') {
        pag.innerHTML = `
        <div id="veja">
            <h1>Você está na Casa Lufa-Lufa!</h1>
        </div>
        <div id="casa2">
            <h2 id="luf">Veja algumas coisas sobre sua Casa abaixo</h2>
        </div>
        <div id="sobra">
            <div id="imagemcasa">
                <div class="titulo2">
                    <h3>Representação</h3>
                </div>
                <div class="sobrou">
                    <img src="/images/lufacuriosidade.png" id="imgcurio"> 
                </div>
            </div>
            <div id="mascote">
                <div class="titulo2">
                    <h3>Mascote</h3>
                </div>
                <div class="sobrou">
                    <p>O Mascote da Casa Lufa-Lufa é o Texugo, por serem ingênuos porém muito honestos e dedicados</p>
                    <img src="/images/lufamascote.png" id="mascoteimg">
                </div>
            </div>
            <div id="conhecimento">
                <div class="titulo2">
                    <h3>Veja mais na Wiki</h3>
                    <img src="/images/book-outline.svg" class="svg pointer" id="clickwiki">
                </div>
                <div class="sobrou" id="especial">
                    <h3>Converse com sua Casa!</h3>
                    <img src="/images/chatbubble-ellipses-outline.svg" class="svg pointer" id="clickchat">
                </div>
            </div>
        </div>
        `;
        var chatclick = document.getElementById("clickchat");
        var wikiclick = document.getElementById("clickwiki");
        $(chatclick).on('click', function() {
            window.location.href = '/pags/chat/chat.html';
        });
        $(wikiclick).on('click', function() {
            window.location.href = '/pags/wiki/wiki.html';
        });
    }
    else if(casa == 'Grifinória') {
        pag.innerHTML = `
        <div id="veja">
            <h1>Você está na Casa Grifinória!</h1>
        </div>
        <div id="casa2">
            <h2 id="grif">Veja algumas coisas sobre sua Casa abaixo</h2>
        </div>
        <div id="sobra">
            <div id="imagemcasa">
                <div class="titulo2">
                    <h3>Representação</h3>
                </div>
                <div class="sobrou">
                    <img src="/images/grifinorcuriosidade.png" id="imgcurio"> 
                </div>
            </div>
            <div id="mascote">
                <div class="titulo2">
                    <h3>Mascote</h3>
                </div>
                <div class="sobrou">
                    <p>O Mascote de Grifinória é o Leão, que se assemelha aos fortes cavaleiros porém egoistas de Grifinória</p>
                    <img src="/images/grifinormascote.png" id="mascoteimg2">
                </div>
            </div>
            <div id="conhecimento">
                <div class="titulo2">
                    <h3>Veja mais na Wiki</h3>
                    <img src="/images/book-outline.svg" class="svg pointer" id="clickwiki">
                </div>
                <div class="sobrou" id="especial">
                    <h3>Converse com sua Casa!</h3>
                    <img src="/images/chatbubble-ellipses-outline.svg" class="svg pointer" id="clickchat">
                </div>
            </div>
        </div>
        `;
        var chatclick = document.getElementById("clickchat");
        var wikiclick = document.getElementById("clickwiki");
        $(chatclick).on('click', function() {
            window.location.href = '/pags/chat/chat.html';
        });
        $(wikiclick).on('click', function() {
            window.location.href = '/pags/wiki/wiki.html';
        });
    }
};


if(user.novo) {
    pag.innerHTML = escolhercasa;
    var corvinal = document.getElementById("corvinal");
    var sonserina = document.getElementById("sonserina");
    var grifinor = document.getElementById("grifinor");
    var lufa = document.getElementById("lufa");
    $(corvinal).on('click', function(){
        user.casa = 'Corvinal';
        user.novo = false;
        paginicial(user.casa);
    });
    $(sonserina).on('click', function(){
        user.casa = 'Sonserina';
        user.novo = false;
        paginicial(user.casa);
    });
    $(grifinor).on('click', function(){
        user.casa = 'Grifinória';
        user.novo = false;
        paginicial(user.casa);
    });
    $(lufa).on('click', function(){
        user.casa = 'Lufa-Lufa';
        user.novo = false;
        paginicial(user.casa);
    });
} 
else {
    paginicial(user.casa);
};

async function autoSave() {
    await setDoc(doc(db, 'usuarios', user.userid), user);
    localStorage.setItem('user', JSON.stringify(user));
};

setInterval(autoSave, 2000);


