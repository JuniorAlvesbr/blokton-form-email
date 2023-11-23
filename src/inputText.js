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
    required: true,
    mask: (e) => {
      let cpf = e.target.value;

      cpf = cpf.replace(/\D/g, "")
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

      e.target.value = cpf;
    }
  },
  {
    type: "text",
    id: "cidadeNasc",
    name: "cidadeNasc",
    label: "Cidade de Nascimento",
    placeholder: "Cidade de Nascimento",
    required: true
  },
  {
    type: "text",
    id: "celular",
    name: "Celular",
    label: "Celular",
    placeholder: "(xx) xxxxx-xxxx",
    required: true,
    mask: (e) => {
      let tel = e.target.value;

      tel = tel.replace(/\D/g, "");
      tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2");

      e.target.value = tel;
    }
  },
  {
    type: "text",
    id: "telefone",
    name: "Telefone",
    label: "Telefone",
    placeholder: "(xx) xxxxx-xxxx",
    required: false,
    mask: (e) => {
      let tel = e.target.value;

      tel = tel.replace(/\D/g, "");
      tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2");

      e.target.value = tel;
    }
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

export const estadoCivil = ["Solteiro", "Casado", "Separado", "Viuvo"]

export const conjugeInfo = [
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
    required: false,
    mask: (e) => {
      let data = e.target.value;

      data = data.replace(/\D/g, "")
      data = data.replace(/(\d{2})(\d)/, "$1/$2");
      data = data.replace(/(\d{2})(\d)/, "$1/$2");

      e.target.value = data;
    }
  },
]

export const endereco = [
  {
    type: "text",
    id: "cep",
    name: "CEP",
    label: "CEP",
    placeholder: "",
    required: false,
    mask: (e) => {
      let cep = e.target.value;

      cep = cep.replace(/\D/g, "")
      cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");

      e.target.value = cep;
    }
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

export const tempoResidencia = ["menos de 1 ano", "1 a 3 anos", "3 a 5 anos", "acima de 5 anos"]

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
    required: false,
    mask: (e) => {
      let tel = e.target.value;

      tel = tel.replace(/\D/g, "");
      tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2");

      e.target.value = tel;
    }
  },
  {
    type: "text",
    id: "dataAdmissao",
    name: "Data de admissão",
    label: "Data de admissão",
    placeholder: "dd/mm/aaaa",
    required: false,
    mask: (e) => {
      let data = e.target.value;

      data = data.replace(/\D/g, "")
      data = data.replace(/(\d{2})(\d)/, "$1/$2");
      data = data.replace(/(\d{2})(\d)/, "$1/$2");

      e.target.value = data;
    }
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
    required: false
  },
  {
    type: "text",
    id: "foneReferencia1",
    name: "Telefone refencia 1",
    label: "Telefone de Referência 1",
    placeholder: "(xx) xxxxx-xxxx",
    required: false,
    mask: (e) => {
      let tel = e.target.value;

      tel = tel.replace(/\D/g, "");
      tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2");

      e.target.value = tel;
    }
  },
  {
    type: "text",
    id: "referencia2",
    name: "Referencia Pessoal 2",
    label: "Nome de Referência 2",
    placeholder: "",
    required: false
  },
  {
    type: "text",
    id: "foneReferenci2",
    name: "Telefone de Referência 2",
    label: "Telefone de Referência 2",
    placeholder: "(xx) xxxxx-xxxx",
    required: false,
    mask: (e) => {
      let tel = e.target.value;

      tel = tel.replace(/\D/g, "");
      tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2");

      e.target.value = tel;
    }
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