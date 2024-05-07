var bioharry = document.getElementById('bioharry');
var bookharry = document.getElementById('bookharry');
var div = document.getElementById('posts');

$(bioharry).add(bookharry).on('click', function() {
    div.innerHTML = `
    <div id="veja">
            <h1>BIOGRAFIA DO HARRY POTTER</h1>
        </div>
        <div id="restou">
            <img src="/images/harrypotter.png">
            <div>
                <h2>Resumo</h2>
                <p>Harry Tiago Potter nasceu em 31 de julho de 1980, em Godric's Hollow, Inglaterra, como o único filho de Lílian e Tiago Potter. Naquela época, uma profecia foi feita a cerca de um menino nascido no final de julho que possuía o poder para derrotar o Lorde das Trevas. Nascido horas depois de Neville Longbottom, Harry e seu futuro colega de classe foram colocados como alvos da profecia. Consequentemente, isso o fez passar os primeiros meses de vida recluso e escondido em casa com os pais.</p>
            </div>           
        </div>
        `;
})

var ordemliteratura = document.getElementById('ordemliteratura');
var tituloordemliteratura = document.getElementById('tituloordemliteratura');

$(ordemliteratura).add(tituloordemliteratura).on('click', function(){

    div.innerHTML = `
    <div id="veja">
            <h1>ORDEM DOS LIVROS</h1>
        </div>
        <div id="restou">
            <img src="/images/literatura.png">
            <div>
                <h2>Ordem:</h2>
                <p>1-Harry Potter e a Pedra Filosofal 2-Harry Potter e a Câmara Secreta 3-Harry Potter e o Prisioneiro de Azkaban 4-Harry Potter e o Cálice de Fogo 5-Harry Potter e a Ordem da Fênix 6-Harry Potter e o Enigma do Príncipe 7-Harry Potter e as Relíquias da Morte 8-Harry Potter e a Criança Amaldiçoada (Bônus) Livros Adicionais: Quadribol Através dos Tempos (2001);
                Animais Fantásticos e Onde Habitam (2001);
                Os Contos de Beedle, o Bardo (2008);</p>
            </div>           
    </div>
    `;

});

var ordemfilmes = document.getElementById('ordemfilmes');
var tituloordemfilmes = document.getElementById('tituloordemfilmes');

$(ordemfilmes).add(tituloordemfilmes).on('click', function() {
    div.innerHTML = `
    <div id="veja">
            <h1>ORDEM DOS FILMES</h1>
        </div>
        <div id="restou">
            <img src="/images/harry-potter-filmes.png" id="maior">
            <div>
                <h2>ORDEM:</h2>
                <p> 
                Filme 1: Harry Potter e a Pedra Filosofal
                Filme 2: Harry Potter e a Câmara Secreta
                Filme 3: Harry Potter e o Prisioneiro de Azkaban
                Filme 4: Harry Potter e o Cálice de Fogo
                Filme 5: Harry Potter e a Ordem da Fênix
                Filme 6: Harry Potter e o Enigma do Príncipe
                Filme 7 pt.1: Harry Potter and the Deathly Hallows – Part 1
                Filme 7 pt.2: Harry Potter and the Deathly Hallows: Part 2
                </p>
            </div>           
    </div>
    `;
});

var casacorvinal = document.getElementById('casacorvinal');
var titulocorvinal = document.getElementById('titulocorvinal');

$(casacorvinal).add(titulocorvinal).on('click', function() {
    div.innerHTML = `
    <div id="veja">
            <h1>HISTÓRIA DA CASA CORVINAL</h1>
        </div>
        <div id="restou">
            <img src="/images/corvinalcuriosidade.png">
            <div>
                <h2>Resumo</h2>
                <p>Fundada por Rowena Ravenclaw, uma das quatro bruxas e bruxos mais brilhantes de sua época, a casa Corvinal é sinônimo de sabedoria e inteligência. Rowena valorizava a mente acima de tudo, e seus membros são conhecidos por sua sagacidade e criatividade. A casa tem uma longa história de produzir bruxos talentosos e é famosa pela Torre da Corvinal em Hogwarts, que só pode ser acessada resolvendo um enigma.</p>
            </div>           
    </div>
    `;
});

var casasonserina = document.getElementById("casasonserina");
var titulosonserina = document.getElementById("titulosonserina");

$(casasonserina).add(titulosonserina).on('click', function() {
    div.innerHTML = `
    <div id="veja">
            <h1>HISTÓRIA DA CASA SONSERINA</h1>
        </div>
        <div id="restou">
            <img src="/images/sonserinacuriosidade.png">
            <div>
                <h2>Resumo</h2>
                <p>A casa Sonserina foi fundada por Salazar Slytherin, um bruxo poderoso conhecido por sua astúcia e determinação. Slytherin acreditava que apenas os bruxos de sangue puro deveriam ser admitidos em Hogwarts, o que levou a uma divisão entre os fundadores. A casa Sonserina é conhecida por produzir muitos bruxos das trevas, incluindo o mais notório de todos, Lord Voldemort. No entanto, também produziu muitos bruxos talentosos e ambiciosos.</p>
            </div>           
    </div>
    `;
});

var casalufa = document.getElementById('casalufa');
var titulolufa = document.getElementById('titulolufa');

$(casalufa).add(titulolufa).on('click', function() {
    div.innerHTML = `
    <div id="veja">
            <h1>HISTÓRIA DA CASA LUFA-LUFA</h1>
        </div>
        <div id="restou">
            <img src="/images/lufacuriosidade.png">
            <div>
                <h2>Resumo</h2>
                <p>Fundada por Helga Hufflepuff, esta casa valoriza o trabalho árduo, a paciência e a lealdade acima de tudo. Helga era conhecida por aceitar qualquer aluno, independentemente de sua origem, e a casa Lufa-Lufa tem uma longa história de inclusão e justiça. A casa é conhecida por sua proximidade com as cozinhas de Hogwarts e por produzir muitos bruxos dedicados e trabalhadores.</p>
            </div>           
    </div>
    `;
});

var casagrifinor = document.getElementById('casagrifinor');
var titulogrifinor = document.getElementById('titulogrifinor');

$(casagrifinor).add(titulogrifinor).on('click', function() {
    div.innerHTML = `
    <div id="veja">
            <h1>HISTÓRIA DA CASA GRIFINÓRIA</h1>
        </div>
        <div id="restou">
            <img src="/images/grifinorcuriosidade.png">
            <div>
                <h2>Resumo</h2>
                <p>A casa Grifinória foi fundada por Godric Gryffindor, um bruxo famoso por sua bravura e nobreza. Gryffindor acreditava que qualquer pessoa com coragem e determinação deveria ter a chance de se tornar um bruxo, e a casa Grifinória é conhecida por produzir muitos dos mais bravos bruxos de Hogwarts. A casa é famosa pela Sala Comunal da Grifinória, que só pode ser acessada passando pela Senhora Gorda, e por produzir muitos bruxos famosos, incluindo Harry Potter.</p>
            </div>           
    </div>
    `;
});

var biohermione = document.getElementById('biohermione');
var bookhermione = document.getElementById('bookhermione');

$(biohermione).add(bookhermione).on('click', function() {
    div.innerHTML = `
    <div id="veja">
            <h1>BIOGRAFIA DE HERMIONE GRANGER</h1>
        </div>
        <div id="restou">
            <img src="/images/hermione.png">
            <div>
                <h2>Resumo</h2>
                <p>Hermione Jean Granger, nascida em 19 de setembro de 1979, é uma bruxa inglesa nascida trouxa e a única filha do Sr. e da Sra. Granger¹². Aos onze anos de idade, quando aprendeu sobre sua natureza mágica, Hermione foi aceita na Escola de Magia e Bruxaria de Hogwarts¹². Ela se tornou a melhor amiga de Harry Potter e Ron Weasley depois que eles a salvaram de um troll de montanha². Hermione é conhecida por sua inteligência e curiosidade, muitas vezes usando seu raciocínio rápido, lembrança rápida e conhecimento enciclopédico para ajudar em situações terríveis². Ela é membro da casa Grifinória e desempenhou um papel crucial na luta contra Lord Voldemort².</p>
            </div>           
    </div>
    `;
});

var biosnape = document.getElementById('biosnape');
var booksnape = document.getElementById('booksnape');

$(biosnape).add(booksnape).on('click', function() {
    div.innerHTML = `
    <div id="veja">
            <h1>BIOGRAFIA DE SEVERO SNAPE</h1>
        </div>
        <div id="restou">
            <img src="/images/snape.png">
            <div>
                <h2>Resumo</h2>
                <p>Severo Snape, nascido em 9 de janeiro de 1960⁶⁷, era um bruxo de sangue mestiço, filho da bruxa Eileen Snape (nascida Prince) e do trouxa Tobias Snape⁶. Ele foi criado em uma casa muggle na Rua da Fiação, que ficava perto da casa da família Evans⁶. Snape se apaixonou por Lily Evans, que se tornou sua melhor amiga⁶. Ele foi professor na Escola de Magia e Bruxaria de Hogwarts, onde atuou como Mestre de Poções, professor de Defesa Contra as Artes das Trevas e também como diretor⁷⁹. Apesar de suas ações muitas vezes parecerem servir ao vilão Lord Voldemort, Alvo Dumbledore frequentemente assegurava a Harry que Snape era confiável⁷. Snape morreu em 2 de maio de 1998⁶.</p>
            </div>           
    </div>
    `;
});


var biovoldemort = document.getElementById('biovoldemort');
var bookvoldemort = document.getElementById('bookvoldemort');

$(biovoldemort).add(bookvoldemort).on('click', function() {
    div.innerHTML = `
    <div id="veja">
            <h1>BIOGRAFIA DE VOLDEMORT</h1>
        </div>
        <div id="restou">
            <img src="/images/voldemort.png">
            <div>
                <h2>Resumo</h2>
                <p>
                Tom Marvolo Riddle (31 de dezembro de 1926 - 2 de maio de 1998), mais conhecido como Lord Voldemort, é o principal antagonista da série Harry Potter¹⁶. Ele é um bruxo mestiço, filho da bruxa Mérope Gaunt e do trouxa Tom Riddle Sr¹³. Voldemort foi criado em um orfanato trouxa, mas mais tarde ingressou na Escola de Magia e Bruxaria de Hogwarts, onde foi selecionado para a casa Sonserina¹³. Algumas de suas primeiras atividades incluíram a abertura da Câmara Secreta de Salazar Slytherin e o uso de seu monstro para atacar estudantes nascidos trouxas¹³. Voldemort é conhecido por sua busca pela imortalidade, que ele tentou alcançar através da criação de Horcruxes¹³. Apesar de suas ações muitas vezes parecerem servir a si mesmo, Alvo Dumbledore frequentemente assegurava a Harry que Snape era confiável¹³. Voldemort morreu em 2 de maio de 1998¹³.
                </p>
            </div>           
    </div>
    `;
});

var biodumbledore = document.getElementById('biodumbledore');
var bookdumbledore = document.getElementById('bookdumbledore');

$(bookdumbledore).add(biodumbledore).on('click', function() {
    div.innerHTML = `
    <div id="veja">
            <h1>BIOGRAFIA DE DUMBLEDORE</h1>
        </div>
        <div id="restou">
            <img src="/images/dumbledore.png">
            <div>
                <h2>Resumo</h2>
                <p>
                Alvo Percival Wulfrico Brian Dumbledore, nascido no verão de 1881¹⁷, foi um bruxo inglês mestiço, conhecido por ser um dos bruxos mais poderosos de seu tempo. Ele foi professor de Defesa Contra as Artes das Trevas e de Transfiguração, e mais tarde diretor da Escola de Magia e Bruxaria de Hogwarts¹⁸. Dumbledore foi o fundador e líder da Ordem da Fênix e desempenhou um papel crucial na luta contra o principal antagonista da série, Lord Voldemort¹⁷. Ele é conhecido por sua sabedoria, bondade e habilidades mágicas excepcionais¹⁸. Dumbledore morreu em 30 de junho de 1997¹⁷.
                </p>
            </div>           
    </div>
    `;
});

var bookhogwarts = document.getElementById('bookhogwarts');
var historiahogwarts = document.getElementById('historiahogwarts');

$(bookhogwarts).add(historiahogwarts).on('click', function() {
    div.innerHTML = `
    <div id="veja">
            <h1>HISTÓRIA DE HOGWARTS</h1>
        </div>
        <div id="restou">
            <img src="/images/hogwarts.png">
            <div>
                <h2>Resumo</h2>
                <p>
                A Escola de Magia e Bruxaria de Hogwarts, conhecida como Hogwarts, é um prestigiado internato britânico de magia para bruxos e bruxas com idades entre onze e dezessete anos²¹. Foi fundada durante o século 10, por volta de 993 d.C., por quatro bruxos notáveis: Godrico Gryffindor, Salazar Slytherin, Helga Hufflepuff e Rowena Ravenclaw²². Cada um deles fundou uma casa na escola, que leva seu nome. A escola está localizada nas Altas Terras escocesas e aceita estudantes da Grã-Bretanha e da Irlanda²¹. A instituição é financiada pelo Ministério da Magia Britânico²¹. O lema da escola é "Draco Dormiens Nunquam Titillandus", que significa "nunca cutuque um dragão adormecido"²².
                </p>
            </div>           
    </div>
    `;
});