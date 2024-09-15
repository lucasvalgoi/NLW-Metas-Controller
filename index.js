const start = () => {
    
    while (true) {
        let opcao = "cadastrar"
        switch (opcao) {
            case "cadastrar":
                console.log("Bora Cadastrar")
                break;
            case "listar":
                console.log("Bora Listar")
                break;
            case "sair":
                return
        }
    }
}
start()
