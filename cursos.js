// Dados dos cursos
const cursosData = {
    "apache-airflow": {
        title: "Apache Airflow: Orquestrando seu primeiro pipeline de dados",
        pdf: "/certificados_pdf/Apache Airflow orquestrando seu primeiro pipeline de dados.pdf"
    },
    "arquitetura-css": {
        title: "Arquitetura CSS: Descomplicando os problemas",
        pdf: "/certificados_pdf/Arquitetura CSS descomplicando os problemas.pdf"
    },
    "clusterizacao": {
        title: "Clusterização: Lidando com dados sem rótulo",
        pdf: "/certificados_pdf/Clusterizacao lidando com dados sem rotulo.pdf"
    },
    "css-grid": {
        title: "CSS Grid: Simplificando layouts",
        pdf: "/certificados_pdf/CSS Grid simplificando layouts.pdf"
    },
    "ds-series-temporais": {
        title: "Data Science: Analisando e prevendo séries temporais",
        pdf: "/certificados_pdf/Data Science analisando e prevendo séries temporais.pdf"
    },
    "ds-explorando": {
        title: "Data Science: Explorando e analisando dados",
        pdf: "/certificados_pdf/Data Science explorando e analisando dados.pdf"
    },
    "ds-hipotese": {
        title: "Data Science: Testando hipótese",
        pdf: "/certificados_pdf/Data Science testando hipótese.pdf"
    },
    "ds-regressao": {
        title: "Data Science: Testando relações com Regressão Linear",
        pdf: "/certificados_pdf/Data Science testando relações com Regressão Linear.pdf"
    },
    "data-viz": {
        title: "Data Visualization: Criando gráficos com bibliotecas Python",
        pdf: "/certificados_pdf/Data Visualization criando gráficos com bibliotecas Python.pdf"
    },
    "flexbox": {
        title: "Flexbox: Posicione elementos na tela",
        pdf: "/certificados_pdf/Flexbox posicione elementos na tela.pdf"
    },
    "foco": {
        title: "Foco: Trazendo mais resultados para o dia a dia",
        pdf: "/certificados_pdf/Foco trazendo mais resultados para o dia a dia.pdf"
    },
    "git-github": {
        title: "Git e Github: Controle e compartilhe seu código",
        pdf: "/certificados_pdf/Git e Github controle e compartilhe seu código.pdf"
    },
    "html-css1": {
        title: "HTML5 e CSS3 parte 1: Crie uma página da Web",
        pdf: "/certificados_pdf/HTML5 e CSS3 parte 1 crie uma página da Web.pdf"
    },
    "html-css2": {
        title: "HTML5 e CSS3 parte 2: Posicionamento, listas e navegação",
        pdf: "/certificados_pdf/HTML5 e CSS3 parte 2 posicionamento, listas e navegação.pdf"
    },
    "html-css3": {
        title: "HTML5 e CSS3 parte 3: Trabalhando com formulários e tabelas",
        pdf: "/certificados_pdf/HTML5 e CSS3 parte 3 trabalhando com formulários e tabelas.pdf"
    },
    "html-css4": {
        title: "HTML5 e CSS3 parte 4: Avançando no CSS",
        pdf: "/certificados_pdf/HTML5 e CSS3 parte 4 avançando no CSS.pdf"
    },
    "habitos": {
        title: "Hábitos: Da produtividade às metas pessoais",
        pdf: "/certificados_pdf/Hábitos da produtividade às metas pessoais.pdf"
    },
    "java-collections": {
        title: "Java Collections: Dominando Listas, Sets e Mapas",
        pdf: "/certificados_pdf/Java Collections Dominando Listas, Sets e Mapas.pdf"
    },
    "java-object-string": {
        title: "Java e java.lang: Programe com a classe Object e String",
        pdf: "/certificados_pdf/Java e java.lang programe com a classe Object e String.pdf"
    },
    "java-util": {
        title: "Java e java.util: Coleções, Wrappers e Lambda expressions",
        pdf: "/certificados_pdf/Java e java.util Coleções, Wrappers e Lambda expressions.pdf"
    },
    "java-jdbc": {
        title: "Java e JDBC: Trabalhando com um banco de dados",
        pdf: "/certificados_pdf/Java e JDBC trabalhando com um banco de dados.pdf"
    },
    "java-excecoes": {
        title: "Java Exceções: Aprenda a criar, lançar e controlar exceções",
        pdf: "/certificados_pdf/Java Exceções aprenda a criar, lançar e controlar exceções.pdf"
    },
    "java-jre-jdk": {
        title: "Java JRE e JDK: Compile e execute o seu programa",
        pdf: "/certificados_pdf/Java JRE e JDK compile e execute o seu programa.pdf"
    },
    "java-oo": {
        title: "Java OO: Entendendo a Orientação a Objetos",
        pdf: "/certificados_pdf/Java OO entendendo a Orientação a Objetos.pdf"
    },
    "java-polimorfismo": {
        title: "Java Polimorfismo: Entenda herança e interfaces",
        pdf: "/certificados_pdf/Java Polimorfismo entenda herança e interfaces.pdf"
    },
    "js-logica1": {
        title: "JavaScript e HTML: Desenvolva um jogo e pratique lógica de programação",
        pdf: "/certificados_pdf/JavaScript e HTML desenvolva um jogo e pratique lógica de programação.pdf"
    },
    "js-logica2": {
        title: "JavaScript e HTML: Pratique lógica com desenhos, animações e um jogo",
        pdf: "/certificados_pdf/JavaScript e HTML pratique lógica com desenhos, animações e um jogo.pdf"
    },
    "js-linguagem": {
        title: "JavaScript: Explorando a linguagem",
        pdf: "/certificados_pdf/JavaScript explorando a linguagem.pdf"
    },
    "js-interfaces": {
        title: "JavaScript: Interfaces e Herança em Orientação a Objetos",
        pdf: "/certificados_pdf/JavaScript interfaces e Herança em Orientação a Objetos.pdf"
    },
    "js-dom": {
        title: "JavaScript na Web: Manipule o DOM com JavaScript",
        pdf: "/certificados_pdf/JavaScript na Web manipule o DOM com JavaScript.pdf"
    },
    "js-formularios": {
        title: "JavaScript na Web: Validação de Formulários e HTML5",
        pdf: "/certificados_pdf/JavaScript na Web validação de Formulários e HTML5.pdf"
    },
    "js-poo": {
        title: "JavaScript: Programando a Orientação a Objetos",
        pdf: "/certificados_pdf/JavaScript programando a Orientação a Objetos.pdf"
    },
    "js-storage": {
        title: "JS na Web: Armazenando dados no navegador",
        pdf: "/certificados_pdf/JS na Web Armazenando dados no navegador.pdf"
    },
    "js-crud": {
        title: "JS na Web: CRUD com JavaScript assíncrono",
        pdf: "/certificados_pdf/JS na web CRUD com JavaScript assíncrono.pdf"
    },
    "layouts-responsivos": {
        title: "Layouts Responsivos: Trabalhando com layouts mobile",
        pdf: "/certificados_pdf/Layouts Responsivos trabalhando com layouts mobile.pdf"
    },
    "linkedin": {
        title: "LinkedIn: Como fazer o seu perfil trabalhar para você",
        pdf: "/certificados_pdf/LinkedIn Como fazer o seu perfil trabalhar para você.pdf"
    },
    "ml-classificacao": {
        title: "Machine Learning: Classificação com SKLearn",
        pdf: "/certificados_pdf/Machine Learning classificação com SKLearn.pdf"
    },
    "modelagem-sql": {
        title: "Modelagem de banco de dados relacional: Entendendo SQL",
        pdf: "/certificados_pdf/Modelagem de banco de dados relacional entendendo SQL.pdf"
    },
    "mongodb": {
        title: "MongoDB: Conhecendo um banco de dados NoSQL",
        pdf: "/certificados_pdf/MongoDB conhecendo um banco de dados NoSQL.pdf"
    },
    "pipeline-python-poo": {
        title: "Pipeline de dados: Combinando Python e orientação a objeto",
        pdf: "/certificados_pdf/Pipeline de dados combinando Python e orientação a objeto.pdf"
    },
    "pipeline-mongo-mysql": {
        title: "Pipeline de dados: Integrando Python com MongoDB e MySQL",
        pdf: "/certificados_pdf/Pipeline de dados integrando Python com MongoDB e MySQL.pdf"
    },
    "produtividade": {
        title: "Produtividade parte 1: Estratégias para o dia a dia",
        pdf: "/certificados_pdf/Produtividade parte 1 estratégias para o dia a dia.pdf"
    },
    "python-avancado": {
        title: "Python Avançado",
        pdf: "/certificados_pdf/Python avançado.pdf"
    },
    "python-basico": {
        title: "Python Básico",
        pdf: "/certificados_pdf/python basico.pdf"
    },
    "python-requests": {
        title: "Python e APIs: Conhecendo a biblioteca Requests",
        pdf: "/certificados_pdf/Python e APIs conhecendo a biblioteca Requests.pdf"
    },
    "python-intermediario": {
        title: "Python Intermediário",
        pdf: "/certificados_pdf/python intermediario.pdf"
    },
    "python-ds1": {
        title: "Python para Data Science: Primeiros passos",
        pdf: "/certificados_pdf/Python para Data Science primeiros passos.pdf"
    },
    "python-ds2": {
        title: "Python para Data Science: Trabalhando com funções, estruturas de dados e exceções",
        pdf: "/certificados_pdf/Python para Data Science trabalhando com funções, estruturas de dados e exceções.pdf"
    },
    "sql-joins": {
        title: "Realizando consultas com SQL: Joins, Views e transações",
        pdf: "/certificados_pdf/Realizando consultas com SQL Joins, Views e transações.pdf"
    },
    "sql-mysql": {
        title: "SQL com MySQL: Manipule e consulte dados",
        pdf: "/certificados_pdf/SQL com MySQL manipule e consulte dados.pdf"
    },
    "sqlite-analise": {
        title: "SQLite Online: Análise de dados com SQL",
        pdf: "/certificados_pdf/SQLite online análise de dados com SQL.pdf"
    },
    "sqlite-instrucoes": {
        title: "SQLite Online: Conhecendo instruções SQL",
        pdf: "/certificados_pdf/SQLite online conhecendo instruções SQL.pdf"
    },
    "sqlite-consultas": {
        title: "SQLite Online: Executando consultas SQL",
        pdf: "/certificados_pdf/SQLite Online executando consultas SQL.pdf"
    }
};

// Funções para controlar o modal
function openModal(cursoId) {
    const curso = cursosData[cursoId];
    if (curso) {
        // Altera o src do iframe para o caminho do PDF
        document.getElementById('modal-pdf-viewer').src = curso.pdf;
        document.getElementById('modal-title').textContent = curso.title;
        document.getElementById('download-link').href = curso.pdf;
        document.getElementById('curso-modal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('curso-modal').style.display = 'none';
    // Opcional: Limpar o iframe para liberar recursos
    document.getElementById('modal-pdf-viewer').src = '';
}

// Fechar o modal clicando fora dele
window.onclick = function(event) {
    const modal = document.getElementById('curso-modal');
    if (event.target == modal) {
        closeModal();
    }
}