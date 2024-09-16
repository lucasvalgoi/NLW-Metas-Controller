const { select, input } = require('@inquirer/prompts')

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
                console.log("Bora Listar")
                break;
            case "sair":
                console.log("Até mais!")
                return
        }
    }
}
start()
