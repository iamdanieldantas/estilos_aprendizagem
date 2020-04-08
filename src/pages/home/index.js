import React, { Component } from 'react';
import FontSizeChange from '../../components/FontSizeChange';
import './style.css';

// import img_01 from '../../assets/images/ER1.png';

export default class Home extends Component {

    render() {

        return (
            <div className="conteudo-container">
                <div className="target-font-size">
                    <div className="container">
                        <FontSizeChange />
                        <header className="article-title">
                            <h1>Article Title</h1>
                        </header>
                        <div className="article-conteudo">
                            <article>
                                <h2>Python</h2>

                                <p>
                                    Vamos começar definindo esse número secreto (mais à frente vamos ver como gerar um número aleatório):
                            </p>
                                <p>Print("Bem vindo ao jogo de Adivinhação!")</p>
                                <p>numero_secreto = 42</p>

                            </article>

                            <section>
                                <h2>Capturando a entrada do usuário</h2>

                                <p>
                                    Agora, para que o usuário possa digitar o número, vamos utilizar a função input, ela trava o programa até que o usuário digite algo e tecle ENTER. Ela recebe por parâmetro a mensagem que será exibida no console e nos retorna o que o usuário digitou, logo vamos guardar esse resultado em uma variável, que chamaremos de chute:
                            </p>

                                <p>Print("Bem vindo ao jogo de Adivinhação!")</p>
                                <p>numero_secreto = 42</p>
                                <p>chute = input("Digite o seu número: ")</p>

                                <p>Para testar, vamos ao final do programa imprimir o conteúdo da variável chute, para mostrar realmente que o seu conteúdo será o que o usuário digitou:</p>

                                <p>Print("Bem vindo ao jogo de Adivinhação!")</p>
                                <p>numero_secreto = 42</p>
                                <p>chute = input("Digite o seu número: ")</p>
                                <p>print("Você digitou: ", chute)</p>

                                <p>Podemos rodar o programa e ver que realmente é impresso o valor que digitarmos.</p>

                            </section>
                        </div>

                        <div className="article-conteudo">
                            <article>
                                <h2>Comparando valores</h2>

                                <p>Agora que conseguimos capturar o que o usuário digitou, precisamos comparar esse valor com o número secreto, para poder dizer ao usuário se ele digitou o número correto ou não. Bom, já sabemos o número secreto que o chute do usuário, então vamos comparar os dois, algo como:</p>

                                <p>se numero_secreto igual chute</p>
                                <p>print("Você acertou!")</p>
                                <p>senão</p>
                                <p>print("Você errou!")</p>

                                <p>Só que as palavras se, senão e igual não funcionam no mundo Python, temos que respeitar a sua sintaxe. O se em Python é if, o igual é a comparação == e o senão é else. Então, resumindo a sintaxe do Python é:</p>

                                <p>if (condição):</p>
                                <p>    executa código caso a condição seja verdadeira</p>
                                <p>else:</p>
                                <p>    executa código caso a condição seja falsa</p>

                                <p>Mas precisamos prestar atenção a alguns detalhes. É uma recomendação que a condição fique dentro de parênteses (apesar de também funcionar sem); para marcar o fim da instrução e início de um bloco (o código que será executado caso a condição seja verdadeira ou falsa), é utilizado dois pontos (:), e esse bloco obrigatoriamente deve estar 4 espaços (ou um TAB) mais à direita. Então o código ficará assim:</p>

                                <p>if (numero_secreto == chute):</p>
                                <p>print("Você acertou!")</p>
                                <p>else:</p>
                                <p>print("Você errou!")</p>

                                <p>Podemos rodar o programa e verificar que mesmo se digitarmos o número certo, recebemos a mensagem Você errou. Porque?</p>
                            </article>

                            <section>
                                <h2>Convertendo uma string para número inteiro</h2>

                                <p>Isso acontece porque a função input nos retorna uma string, pois qualquer coisa pode ser digitada, não é garantido que o usuário irá digitar um número. Como não há essa garantia, o retorno é uma string.</p>
                                <p>Já a variável numero_secreto é um número! Logo, do tipo inteiro. Então estamos testando a igualdade de um inteiro com uma string, logo essa comparação sempre será falsa, apesar da string representar um número inteiro. Para resolver isso precisamos mudar o tipo da variável, convertendo uma string em número inteiro.</p>
                                <p>Para isso, o Python possui a função int, que recebe um valor e o converte para inteiro, justamente o que queremos. Logo, vamos utilizá-la no nosso código:</p>

                                <p>print("Bem vindo ao jogo de Adivinhação!")</p>
                                <p>numero_secreto = 42</p>
                                <p>chute_str = input("Digite o seu número: ")</p>
                                <p>print("Você digitou: ", chute_str)</p>
                                <p>chute = int(chute_str)</p>
                                <p>if (numero_secreto == chute):</p>
                                <p>print("Você acertou!")</p>
                                <p>else:</p>
                                <p>print("Você errou!")</p>

                                <p>Agora a comparação é feita corretamente! Para sair do bloco do else, basta escrevermos algo depois dele, sem a indentação de 4 espaços:</p>

                                <p>print("Bem vindo ao jogo de Adivinhação!")</p>
                                <p>numero_secreto = 42</p>
                                <p>chute_str = input("Digite o seu número: ")</p>
                                <p>print("Você digitou: ", chute_str)</p>
                                <p>chute = int(chute_str)</p>
                                <p>if (numero_secreto == chute):</p>
                                <p>print("Você acertou!")</p>
                                <p>else:</p>
                                <p>print("Você errou!")</p>
                                <p>print("Fim do jogo")</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}