export const docPessoal = [
  {
    type: "text",
    id: "name",
    name: "Nome",
    label: "Nome",
    placeholder: "Nome Completo",
    required: true
  },
  {
    type: "text",
    id: "cpf",
    name: "CPF",
    label: "CPF",
    placeholder: "000.000.000-00",
    required: true
  },
  {
    type: "text",
    id: "celular",
    name: "Celular",
    label: "Celular",
    placeholder: "(xx) xxxxx-xxxx",
    required: true
  },
  {
    type: "text",
    id: "telefone",
    name: "Telefone",
    label: "Telefone",
    placeholder: "(xx) xxxxx-xxxx",
    required: false
  },
  {
    type: "email",
    id: "email",
    name: "Email",
    label: "Email",
    placeholder: "endereco@dominio.com.br",
    required: false
  },
]

export const estadoCivil = [
  {
    type: "text",
    id: "nameConjuge",
    name: "Nome Conjuge",
    label: "Nome completo do esposo(a)",
    placeholder: "",
    required: false
  },
  {
    type: "text",
    id: "dataConjuge",
    name: "Nascimento Conjuge",
    label: "Data de nascimento do esposo(a)",
    placeholder: "dd/mm/aaaa",
    required: false
  },
]

export const endereco = [
  {
    type: "text",
    id: "cep",
    name: "CEP",
    label: "CEP",
    placeholder: "",
    required: false
  },
  {
    type: "text",
    id: "endereco",
    name: "Endereço",
    label: "Endereço",
    placeholder: "",
    required: false
  },
  {
    type: "text",
    id: "bairro",
    name: "Bairro",
    label: "Bairro",
    placeholder: "",
    required: false
  },
  {
    type: "text",
    id: "city",
    name: "Cidade",
    label: "Cidade",
    placeholder: "",
    required: false
  },
  {
    type: "text",
    id: "estado",
    name: "Estado",
    label: "Estado",
    placeholder: "",
    required: false
  },
]

export const empresa = [
  {
    type: "text",
    id: "empresa",
    name: "Empresa",
    label: "Nome da Empresa atual ou profisão",
    placeholder: "Informe a empresa que você trabalha, em caso de autonomo, informe sua profissão",
    required: false
  },
  {
    type: "text",
    id: "telefoneComercial",
    name: "Telefone Comercial",
    label: "Telefone Comercial",
    placeholder: "(xx) xxxxx-xxxx",
    required: false
  },
  {
    type: "text",
    id: "dataAdmissao",
    name: "Data de admissão",
    label: "Data de admissão",
    placeholder: "dd/mm/aaaa",
    required: false
  },
  {
    type: "text",
    id: "salario",
    name: "Salario",
    label: "Salario",
    placeholder: "R$0,00",
    required: true
  },
]

export const referencias = [
  {
    type: "text",
    id: "referencia1",
    name: "Referencia Pessoal 1",
    label: "Nome de Referência 1",
    placeholder: "",
    required: true
  },
  {
    type: "text",
    id: "foneReferencia1",
    name: "Telefone refencia 1",
    label: "Telefone de Referência 1",
    placeholder: "(xx) xxxxx-xxxx",
    required: true
  },
  {
    type: "text",
    id: "referencia2",
    name: "Referencia Pessoal 2",
    label: "Nome de Referência 2",
    placeholder: "",
    required: true
  },
  {
    type: "text",
    id: "foneReferenci2",
    name: "Telefone de Referência 2",
    label: "Telefone de Referência 2",
    placeholder: "(xx) xxxxx-xxxx",
    required: true
  },
]

export const banco = [
  {
    type: "text",
    id: "banco",
    name: "Nome do banco",
    label: "Nome do Banco",
    placeholder: "",
    required: false
  },
  {
    type: "text",
    id: "agencia",
    name: "Agência",
    label: "Agência",
    placeholder: "",
    required: false
  },
  {
    type: "text",
    id: "conta",
    name: "Conta",
    label: "Conta",
    placeholder: "",
    required: false
  },
]