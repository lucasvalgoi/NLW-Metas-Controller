const { select, input, checkbox } = require('@inquirer/prompts')

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
        console.log("A meta não pode ser vazia!")
        return
    }

    metas.push({ value: meta, checked: false }) //
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar para outra meta, o espeço para marcar ou desmarcar e o Enter para encerrar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    if (respostas.length == 0) {
        console.log("Nenhuma meta foi selecionada!")
        return
    }

    //desmarcando TODAS as metas
    metas.forEach((m) => {
        m.checked = false
    })

    //marcando as metas que são selecionadas
    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log("Meta(s) marcadas como concluída(s)")
}

const metasRealizadas = async () => {
    const realizadas= metas.filter((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0) {
        console.log("Não há nenhuma meta realizada!")
        return
    }

    await select({
        message: "Metas Realizadas:",
        choices: [...realizadas]
    })

    console.log(realizadas)
}

// O uso da Async function é de grande importânica para informar ao computador que ao invés de sair rodando todo o laço While enquanto a condição for True, será necessário esperar o usuário selecionar alguma das opções 
const start = async () => {
    
    while (true) {

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
                    name: "Sair",
                    value: "sair",
                }
            ]
        })


        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break;
            case "listar":
                await listarMetas()
                console.log(metas)
                break;
            case "realizadas":
                await metasRealizadas()
                break;
            case "abertas":
                await metasAbertas()
                console.log(metas)
                break;
            case "sair":
                console.log("Até mais!")
                return
        }
    }
}
start()
