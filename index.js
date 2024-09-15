const { select } = require('@inquirer/prompts')

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
                console.log("Bora Cadastrar")
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
