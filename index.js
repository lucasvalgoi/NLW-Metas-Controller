const { select, input, checkbox } = require('@inquirer/prompts')

let mensagem = "Bem vindo(a) ao Gerenciador de Metas!"

//as metas sempre começarão com o 'checked: false' pois eu ainda não concluí elas
//exemplo de meta unitária (como um objeto)
let meta = {
    value: "Correr 3km",
    checked: false,
}

// exemplo de uma meta como um array de objetos
let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta: "})

    //será anilisado se o tamanho da variável meta (o que será escrito pelo usuário) for == 0, então será emitido a mensagem e a função acabará
    if(meta.length == 0) {
        mensagem = "A meta não pode ser vazia!"
        return
    }

    metas.push({ value: meta, checked: false })

    mensagem = metas

    mensagem = "Meta cadastrada com sucesso!"
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar para outra meta, o espeço para marcar ou desmarcar e o Enter para encerrar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    //desmarcando TODAS as metas
    metas.forEach((m) => {
        m.checked = false
    })

    if (respostas.length == 0) {
        mensagem = "Nenhuma meta foi selecionada!"
        return
    }

    //marcando as metas que são selecionadas
    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    mensagem = "Meta(s) marcadas como concluída(s)"
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0) {
        mensagem = "Não há nenhuma meta realizada!"
        return
    }

    await select({
        message: "Metas Realizadas: " + realizadas.length,
        choices: [...realizadas]
    })

    mensagem = "Todas as metas foram realizadas com sucesso!"

}

//para fazer essa função, fica mais fácil pensar que ela é o "inverso" da função das metas Realizadas
const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return !meta.checked
        //fazendo uma comparação para que retorne apenas o que for DIFERENTE de True (False), tornando a comparação em verdadeira, já que nesse caso a "meta.checked" é false, o valor booleano dessa operação é invertido.
    })

    if (abertas.length == 0) {
        mensagem = "Não há nenhuma meta aberta!"
        return
    }

    await select({
        message: "Metas Abertas: " + abertas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
        return { value: meta.value, checked: false }
    })

    const deletarItem = await checkbox({
        message: "Selecione a meta que deseja deletar",
        choices: [...metasDesmarcadas],
        instructions: false,
    })

    if (deletarItem.length == 0) {
        mensagem = "Não há nenhuma meta para ser deletado!"
        return
    }

    //cria um novo array com as metas que retornaram False para a comparação dentro da função de filtragem (filter), deletando assim as metas da nossa lista que foram selecionadas
    deletarItem.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })

    mensagem = "Meta(s) deletada(s) com sucesso!"

}

const mostrarMensagemConsole = () => {
    console.clear();

    if (mensagem != "") {
        console.log(mensagem)
        console.log("")
        mensagem = ""
    }
}

// O uso da Async function é de grande importânica para informar ao computador que ao invés de sair rodando todo o laço While enquanto a condição for True, será necessário esperar o usuário selecionar alguma das opções 
const start = async () => {
    
    while (true) {
        mostrarMensagemConsole()

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar",
                },
                {
                    name: "Listar metas",
                    value: "listar",
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas",
                },
                {
                    name: "Metas abertas",
                    value: "abertas",
                },
                {
                    name: "Deletar metas",
                    value: "deletar",
                },
                {
                    name: "Sair",
                    value: "sair",
                }
            ]
        })


        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta()
                break;
            case "listar":
                await listarMetas()
                break;
            case "realizadas":
                await metasRealizadas()
                break;
            case "abertas":
                await metasAbertas()
                break;
            case "deletar":
                await deletarMetas()
                break;
            case "sair":
                console.log("Até mais!")
                return
        }
    }
}
start()
