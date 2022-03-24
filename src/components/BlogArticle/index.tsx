import React from "react";
import Header from "../Header";

import './style.css';

export default function BlogArticle() {
    return(
        <div className="blogarticle-wrapper">
            <Header/>

            <h1>Como executar um shell script ao iniciar o sistema[Ubuntu]</h1>
            <p>
            Muitas vezes precisamos executar scripts para fazer alguma função essencial para nosso setup, mas e quando precisamos executar toda vez ? Veja como rodar seus scripts ao iniciar o sistema operacional.
            </p>

            <p>No meu caso, eu havia comprado um mini teclado pela internet, e ele por ser de tamanho reduzido não tinha nativamente os caracteres de pipe '|' e barra invertida '\'.</p>
            <p>Então usando o xmodmap eu remapiei meu teclado e consegui meus caracteres, porém, toda vez que eu desligava o computador ele perdia a configuração, então eu tinha que rodar o comando toda vez.</p>
            <p>Para resolver isso criei um arquivo .sh com o comando, e inicio ele toda vez que o sistema é iniciado. Veja como:</p>
                <code>$ cd ../..<br/>
                      $ cd usr/bin<br/>
                      $ sudo vim @filename.sh
                </code>

            <p>Apos acessar o diretorio que esta localizado seu arquivo, você precisa dar permissões para executar o script:</p>

                <code>
                $ chmod +x @filename.sh
                </code>

            <p>ATENÇÃO !!! Se você não tem um SSD, e for rodar scrips que necessitem que o desktop esteja totalmente carregado, como alterar o mapeamento do teclado, você tem que definir um tempo apos a inicialização do sistema para rodar o script, senão ele pode quebrar. </p>

            <code> $ chmod +x @filename.sh</code>
            <h4>Para rodar o script apos 30s de inicialização do sistema.</h4>
            <code>sleep 30 && @script...</code>

            <p>Agora os últimos passos: </p>
            <ol>
                
            <li>Abra o “Startup applications” do Ubuntu</li>
            <li>Clique em “Add”</li>
            <li>Dê um nome a configuração, como “Remap key [número da key que você mudou]”</li>
            <li>Na parte do “Command”, digite a localização do script do comando, no meu exemplo: /usr/bin/remap27.sh </li>
            <li>Salve </li>
            <li>Fecha a janela e reinicie o computador </li>

            </ol>
Pronto. Toda vez que você ligar seu pc ele irá inicializar automaticamente com essa configuração de teclado remapeado. 

        </div>
    )
}