function alternarTema() {
  document.body.classList.toggle('dark');
}
// 1. Função para atualizar o estilo dos botões
function atualizarBotaoTema() {
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
 
  if (document.body.classList.contains('dark')) {
    btnPrev.classList.add('claro');
    btnNext.classList.add('claro');
  } else {
    btnPrev.classList.remove('claro');
    btnNext.classList.remove('claro');
  }
}
 
// 2. Modifique a função alternarTema para chamar atualizarBotaoTema
// Função que alterna o tema dark/light e atualiza os botões
function alternarTema() {
  document.body.classList.toggle('dark');
  atualizarBotaoTema();
}
 
// Atualiza a classe dos botões do carrossel conforme o tema
function atualizarBotaoTema() {
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
 
  if (document.body.classList.contains('dark')) {
    btnPrev.classList.add('claro');
    btnNext.classList.add('claro');
  } else {
    btnPrev.classList.remove('claro');
    btnNext.classList.remove('claro');
  }
}
 
// No carregamento da página, atualize os botões para o tema atual
window.onload = () => {
  atualizarBotaoTema();
 
  // seu código existente continua aqui, por exemplo:
  filtrarArea();
 
};
 
 
function abrirModal(profissao) {
  const info = {
    "design grafico": "O designer gráfico é responsável por criar soluções visuais que comunicam ideias por meio de cores, formas, imagens e tipografias. Atua em áreas como publicidade, identidade visual, embalagens e mídias digitais.",
 
    "desenhista": "O desenhista produz ilustrações técnicas ou artísticas, podendo atuar em projetos de arquitetura, engenharia, moda, quadrinhos ou animações. Domina técnicas de desenho à mão ou digital.",
 
    "designer de exposicao": "Esse profissional planeja e organiza o espaço de exposições culturais, científicas ou comerciais. Ele cria ambientes envolventes, que facilitam a compreensão e valorização do conteúdo apresentado.",
 
    "educador de arte": "Ensina diversas formas de expressão artística como pintura, escultura, teatro e música. O educador de arte promove o desenvolvimento criativo, crítico e cultural dos estudantes.",
 
    "curador de arte": "Seleciona e organiza obras para exposições, definindo temas e contextos. Atua em museus, galerias e eventos, sendo responsável por conectar o público com a arte de forma significativa.",
 
    "fotografo": "Capta imagens que registram momentos, transmitem emoções ou promovem produtos. Pode atuar em áreas como moda, jornalismo, eventos, publicidade ou fotografia artística.",
 
    "coreografo": "Cria e interpreta movimentos para espetáculos de dança, teatro, clipes e eventos. O dançarino e o coreógrafo expressam sentimentos, ideias e culturas através do corpo.",
 
    "ator": "Dá vida a personagens em peças de teatro, filmes, novelas e séries. O ator usa a expressão corporal, a fala e a emoção para representar diferentes papéis e contar histórias ao público.",
 
    "artesao": "Trabalha com técnicas manuais para produzir peças únicas, como objetos de decoração, roupas, acessórios e utensílios. Valoriza a criatividade e a cultura local.",
 
    "ilustrador": "Cria imagens para livros, revistas, jogos, embalagens ou internet. O ilustrador transforma ideias em desenhos que complementam ou substituem textos, com estilos variados.",
 
    "maquiador profissional": "Especialista em realçar a beleza facial e corporal para diferentes ocasiões. Atua em áreas como moda, televisão, cinema, teatro e eventos, criando visuais artísticos ou naturais.",
 
    "artista plastico": "Produz obras de arte como pinturas, esculturas e instalações. Trabalha com diferentes materiais e técnicas para expressar sentimentos, ideias ou críticas sociais.",
 
    "aeronautica": "Profissionais da aeronáutica atuam na construção, manutenção ou pilotagem de aeronaves. A carreira inclui áreas como engenharia aeronáutica, aviação civil e controle de tráfego aéreo.",
 
    "marinha": "A Marinha protege as águas do país, realiza missões de resgate, pesquisa e defesa naval. Seus profissionais podem atuar no mar ou em terra, com funções técnicas, operacionais ou administrativas.",
 
    "exercito": "O Exército defende o território nacional e participa de missões de paz e apoio à população. Os militares recebem formação específica e podem atuar em áreas como engenharia, saúde e logística.",
 
    "policia militar": "A Polícia Militar trabalha com a segurança pública, patrulhamento e atendimento de ocorrências. Seu papel é proteger os cidadãos, manter a ordem e combater o crime nas ruas.",
 
    "exercito": "O Exército Brasileiro defende o território nacional e participa de ações de paz. Oferece formação e carreira militar com foco em liderança, estratégia e compromisso com o país.",
 
    "nutricionista": "Orienta sobre alimentação saudável, planejando dietas e promovendo a saúde. Pode atuar em hospitais, escolas, academias, restaurantes e consultórios.",
 
    "medicina": "O médico cuida da saúde das pessoas, diagnosticando, prevenindo e tratando doenças. Atua em diversas especialidades, como pediatria, cirurgia, cardiologia e outras.",
 
    "psicologia": "Estuda o comportamento e os processos mentais humanos. O psicólogo ajuda as pessoas a lidar com emoções, traumas e relações, promovendo o bem-estar mental e emocional.",
 
    "fisioterapia": "Previne e trata disfunções físicas causadas por acidentes, doenças ou má postura. O fisioterapeuta atua na reabilitação e melhora da qualidade de vida dos pacientes.",
 
    "enfermagem": "Cuida da saúde dos pacientes em hospitais, clínicas e postos de saúde. O enfermeiro é essencial no acompanhamento, administração de medicamentos e apoio emocional.",
 
    "veterinaria": "Cuida da saúde e bem-estar dos animais, tratando doenças, realizando cirurgias e orientando sobre cuidados. Atua em clínicas, fazendas, zoológicos e vigilância sanitária.",
 
    "direito": "O profissional do Direito atua na defesa da justiça, podendo ser advogado, juiz, promotor ou defensor público. Trabalha com leis, processos e garantias dos direitos individuais e coletivos.",
 
    "filosofia": "Estuda questões fundamentais sobre a existência, conhecimento, valores e razão. O filósofo reflete criticamente sobre o mundo, podendo atuar como professor, pesquisador ou consultor.",
 
    "jornalista": "Investiga, escreve e transmite informações com responsabilidade e ética. Trabalha em jornais, revistas, TV, rádio e internet, sendo essencial para manter a sociedade informada.",
 
    "pericia criminal": "Analisa cenas de crime e evidências para auxiliar investigações. O perito usa conhecimentos técnicos e científicos para descobrir como os crimes aconteceram, sendo fundamental para a justiça.",
 
    "astronomia": "Estuda os corpos celestes como estrelas, planetas e galáxias, buscando entender a origem e funcionamento do universo. Astrônomos podem trabalhar com pesquisa científica, observatórios e ensino.",
 
    "programacao de jogos": "Cria e desenvolve jogos digitais usando lógica, design e linguagem de programação. O programador de games trabalha com equipes criativas para transformar ideias em experiências interativas e envolventes.",
 
    "engenharia biomedica": "Une conhecimentos da engenharia com as ciências da saúde. Desenvolve equipamentos médicos, próteses, sistemas hospitalares e tecnologias para diagnóstico e tratamento de doenças.",
 
    "gastronomia": "Vai além da cozinha: o gastrônomo estuda técnicas culinárias, cultura alimentar, nutrição e gestão de alimentos. Pode atuar como chef, consultor, gestor de restaurantes ou pesquisador da área alimentícia.",
 
    "administracao": "Administração é a área responsável por planejar, organizar e coordenar os recursos de uma empresa ou organização. O administrador atua na gestão de pessoas, finanças, marketing e processos, buscando eficiência e resultados.",
 
    "marketing": "Marketing envolve estratégias para promover produtos, serviços ou marcas. O profissional da área analisa o mercado, entende o comportamento do consumidor e cria campanhas criativas para atrair e fidelizar clientes.",
 
    "logistica": "Cuida do planejamento, armazenamento e transporte de produtos e materiais. O profissional de logística garante que tudo chegue ao lugar certo, no tempo certo e com o menor custo possível."
 
 
  };
 
 
  const modal = document.getElementById('modal');
  const texto = document.getElementById('modalTexto');
 
  texto.textContent = info[profissao] || "Mais informações em breve!"; //AQUI ACÉFALO
  modal.style.display = "flex";
}
 
// Fechar modal ao clicar no X
document.getElementById('fecharModal').onclick = () => {
  document.getElementById('modal').style.display = "none";
}
 
// Fechar modal ao clicar fora da área do conteúdo
window.onclick = (event) => {
  if (event.target.id === "modal") {
    document.getElementById('modal').style.display = "none";
  }
}
 
 
function filtrarCards() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  //const cards = document.(".card");//
 
  cards.forEach(card => {
    const texto = card.innerText.toLowerCase();
    if (texto.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
 
document.getElementById('searchInput').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const cards = document.querySelectorAll('.card');
 
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
 
window.onload = () => {
  filtrarArea();
  document.getElementById('modal').style.display = 'none';
 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('mostrar');
      }
    });
  });
 
  document.querySelectorAll('.card').forEach(card => observer.observe(card));
 
  const container = document.querySelector('.card-container-horizontal');
  // Dispara no carregamento inicial para já destacar um card
  destacarCardCentral();
};
// Pega o container do carrossel
const container = document.querySelector('.card-container-horizontal');