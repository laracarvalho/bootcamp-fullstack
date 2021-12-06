# Guia: Preparando a máquina

Para iniciar nossos projetos, precisaremos dos seguintes programas:

- [VS Code](https://code.visualstudio.com/) (recomendado) ou o editor da sua preferência;
- Última versão do [NodeJS](https://nodejs.org/en/)
- Última versão do [Git](https://git-scm.com/downloads)
- Uma conta no [Github](https://github.com/) (para deploy)


## Instalando NodeJS & NPM
- Abra o [site do NodeJS](https://nodejs.org/en/);
- Baixe a última versão LTS
- Faça a instalação de acordo com a sua preferência
- Rode `node -v` no seu terminal para checar se a instalação foi correta

**Erro Windows: "node não é reconhecido"/"não é possível rodar esse script"**:

> Significa que o Node e NPM não foram adicionados ao PATH do Windows.

- Em Painel de Controle, acesse Propriedades de Sistema > Variáveis de Ambiente;
- Em Variáveis do Sistema, encontre Path e edite.
- Adicione `C:\Program Files\nodejs\` ou o seu caminho para a instalação do NodeJS
- Logo _abaixo_, adicione `C:\Users\{Usuário}\AppData\Roaming\npm` ou seu caminho para a instalação do NPM
- Feche e abra novamente o seu terminal e digite `node -v` novamente.
- Rode `npm install -g npm` para fazer update da versão do NPM (caso haja)

## Instalando Typescript

Geralmente Typescript precisa ser instalado globalmente antes de utilizarmos em um projeto.

- Digite `npm install -g typescript`
- Caso o comando `tsc` não funcione para você, realize o tutorial da seção _Permitindo execução de scripts_.

## Permitindo execução de scripts

- Abra `Windows Powershell` como **Administrador**
- Digite `get-executionpolicy`
- Caso retorne Restricted, digite `set-executionpolicy unrestricted`
- Pode digitar `get-executionpolicy` para confirmar mudanças


## Instalando Git

- Abra o [Git](https://git-scm.com/downloads);
- Baixe a última versão LTS
- Faça a instalação de acordo com a sua preferência
    - Instale o Git Bash e o Git GUI
    - Adicione seu editor favorito ou deixe alguma escolha padrão
    - Para as branchs: escolha **Overrride**: `main`
    - Para o PATH, escolha: **Git from command line AND third party**
    - Escolha OpenSSH nas duas opções
    - Para formatação de linhas, escolha a primeira opção caso esteja no Windows
    - Escolha MinTTY
    - Para o `git pull` escolha Default
    - Escolha o Credential Helper padrão
    - Ignore outras configs a não ser que saiba o que está fazendo
- No seu terminal, configure suas credenciais:
    - `git config --global user.name "github_username"`
    - `git config --global user.email "github_email"`