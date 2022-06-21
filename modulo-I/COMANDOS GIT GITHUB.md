# COMANDOS GIT / GITHUB

|                Comando                 |                          Descrição                           |
| :------------------------------------: | :----------------------------------------------------------: |
|                git init                |                     Inicia o repositório                     |
|               git add .                |          Leva todos os arquivos para a área staged           |
|        git commit -m "mensagem"        |              Submete as alterações (unmodified)              |
|    git remote add origin <link_SSH>    |   Linka o ambiente de desenvolvimento ao servidor (GitHub)   |
|         git push origin master         | "Empurra" os arquivos do ambiente de desenvolvimento para o servidor (GitHub) |
|         git pull origin master         | "Puxa" os arquivos do servidor para o ambiente de desenvolvimento (GitHub) |
| git pull --rebase=merges origin master |       Executa um pull, mesclando commits conflituosos        |
|    git pull --rebase origin master     | Executa um pull, removendo nosso commit do servidor local, adicionando os commits do servidor remoto, para finalmente adicionar novamente nosso commit |
|                                        |                                                              |
|               git status               |               Verifica o status do repositório               |
|             git remote -v              |               Verifica o repositório "origin"                |

