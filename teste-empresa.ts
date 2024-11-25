import { Empresa, Funcionario } from "./empresa";

// Criando a empresa
const empresa = new Empresa();

// Adicionando funcionários
empresa.adicionarFuncionario(new Funcionario(1, "Alice", "Desenvolvedora", 5000));
empresa.adicionarFuncionario(new Funcionario(2, "Bob", "Designer", 4000));
empresa.adicionarFuncionario(new Funcionario(3, "Carlos", "Gerente", 8000));

// Consultando funcionário
console.log(empresa.consultarFuncionario(1)); // Exibe informações de Alice

// Atualizando salário
empresa.atualizarSalario(1, 5500);
console.log(empresa.consultarFuncionario(1)); // Salário atualizado

// Consultando funcionário inexistente
console.log(empresa.consultarFuncionario(99)); // undefined
