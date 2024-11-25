// Classe que representa um Funcionário da empresa
export class Funcionario {
    constructor(
        public matricula: number, // Identificador único do funcionário
        public nome: string, // Nome do funcionário
        public cargo: string, // Cargo ocupado pelo funcionário
        public salario: number // Salário do funcionário
    ) {}
}

// Classe que gerencia os funcionários da empresa
export class Empresa {
    private funcionarios: Funcionario[] = []; // Lista de funcionários cadastrados

    // Método para adicionar um novo funcionário à empresa
    public adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    // Método para atualizar o salário de um funcionário existente
    public atualizarSalario(matricula: number, salario: number): void {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);
        if (funcionario) {
            funcionario.salario = salario; // Atualiza o salário
        } else {
            console.error("Funcionário não encontrado.");
        }
    }

    // Método para consultar informações de um funcionário específico
    public consultarFuncionario(matricula: number): Funcionario | undefined {
        return this.funcionarios.find(f => f.matricula === matricula);
    }
}


