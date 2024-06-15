function search() {

    var termoBusca = document.getElementById('searchInput').value.toLowerCase();

    if (termoBusca.includes('informatica')) {
        window.location.href = 'informatica.html';
    } else {
        alert('Sem informações');
    }
}

var textoSenai = `
  <h1>SENAI Itabira CFP Pedro Martins Guerra</h1>
  Os cursos oferecidos pelo SENAI Itabira podem ser formatados para atender as empresas de acordo com a necessidade de cada uma.
  <br>
  Sempre focado no mercado, o SENAI Itabira oferece Serviços Técnicos e de Inovação sob medida para sua empresa, visando a aumentar sua competividade.
  <br>
  <h2>Produtos e serviços oferecidos<br></h2>
  <h3>Aprendzagem Industrial<br></h3>
  <a href="">
    Desenho Mecânico<br>
    Caldeiraria<br>
    Eletricista Industrial em Manutenção Eletroeletrônica<br>
    Manutenção de Sistemas Automação Industrial<br>
    Manutenção Mecânica de Máquinas Industriais<br>
    Mecânica Diesel<br>
    Processos Administrativos<br>
  </a>
  <h3>Cursos Técnicos<br></h3>
  <a href="">
    Automação Industrial<br>
    Automação Industrial (EAD)<br>
    Eletroeletrônica<br>
    Eletromecânica<br>
    Eletrotécnica<br>
    Fabricação Mecânica<br>
    Informática para Internet<br>
    Manutenção Mecânica de Máquinas Industriais<br>
    Meio Ambiente   <br>
    Mecânica<br>
    Mecatrônica<br>
    Segurança do Trabalho<br>
    Segurança do Trabalho (EAD)<br>
    Soldagem<br>
  </a>
  <h3>Aperfeiçoamento Profissional<br></h3>
  <a href="">
    Acoplamentos Flexíveis e Mecânicos<br>
    Alinhamento de Eixos e Polias Rotativos a Laser<br>
    Aplicação e Desenvolvimento em Arduíno<br>
    Autocad<br>
    Controlador Lógico Programável - CLP<br>
    Conectando Ind. 4.0<br>
    Construção e Operação de impressora 3D<br>
    Curso IIot_Internet Industrial das CoisasDesenvolvimento de Jogos e Aplicativos<br>
    Elementos de Máquinas e Fixação<br>
    Eletricidade Básica<br>
    Eletrohidropneumática<br>
    Eletrodo Revestido<br>
    Excel (Básico/Intermediário/Avançado)<br>
    Hidráulica Básica<br>
    Leitura e Interpretação de Diagramas Elétricos<br>
    Leitura e Interpretação Desenho Técnico Mecânico<br>
    Linguagem de Programação para Arduino<br>
    Liderança 4.0<br>
    Lubrificação Básica<br>
    Metrologia Básica<br>
    Montagem e Desmontagem de Rolamentos<br>
    MS Project<br>
    NR 23 – Brigada de Incêndio<br>
    NR 35 – Segurança no Trabalho em Altura<br>
    Operação de Empilhadeira<br>
    Operação de Plataforma Elevatória<br>
    Operação de Ponte Rolante<br>
    Oxicorte<br>
    Pneumática Básica<br>
    Soldagem No Processo MIG MAG<br>
    Soldagem no Processo TIG<br>
    <b>Outros cursos sob consulta<br></b>
    <br>
  </a>
  <h3>Qualificação Profissional<br></h3>
  <a href="">
    Eletricista Industrial<br>
    Eletricista Instalador Predial de Baixa Tensão<br>
    Mecânico de Manutenção de Máquinas Industriais<br>
    Mecânico de Motores a Diesel<br>
    Montador de Estruturas Metálicas<br>
    Montador de Painéis Elétricos<br>
    Operador de Máquinas de Usinagem com Comando Numérico Computadorizado<br>
    Operador de Máquinas de Usinagem Convencional<br>
    Soldador de Processo MIG-MAG<br>
    Soldador no Processo Eletrodo Revestido Aço Carbono e Aço Baixa Liga<br>
    <b>Outros cursos sob consulta<br></b>
  </a>
  <a href="">
    Especialização Técnica<br>
    <br>
    Instrumentação e Controle de Processos<br>
    <br>
    Os cursos e Serviços Técnicos e de Inovação ofertados pelo SENAI de Itabira podem ser formatados para atender à demanda das empresas, de acordo 
    <br>com a necessidade de cada uma.<br>
    <br>
    Entre em contato!<br>
    <h4>HORÁRIO DE FUNCIONAMENTO: 07h às 22h30<br></h4>
  </a>
`;

document.getElementById("textoSenai").innerHTML = textoSenai;
