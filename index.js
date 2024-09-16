const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value: "Correr 3km",
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta: "})

    if(meta.length == 0) {
        console.log("A meta não pode ser vazia")
        return
    }

    metas.push({ value: meta, checked: false })
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

    //desmarcando todas as metas
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
            case "sair":
                console.log("Até mais!")
                return
        }
    }
}
start()
