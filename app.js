function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // Se o campoPesquisa vazio for uma string sem nada
    if (!campoPesquisa) {
     section.innerHTML = "Nenhum resultado foi encontrado"
      return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) { 
      titulo = dado.titulo.toLowerCase()
      descricao = dado.titulo.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()
     // se titulo includes campoPesquisa
     if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || 
     tags.includes(campoPesquisa))  {
      // cria um novo elemento
      resultados += `<div class="item-resultado">
      <h2>${dado.titulo}</h2>
      <p class="descricao-meta">${dado.lancamento}</p>
      <p class="descricao-meta">${dado.genero}</p>
      <p class="descricao-meta">${dado.descricao}</p>
      <p class="descricao-meta">${dado.classificacao}</p>                        
      <a href=${dado.link} target="_blank">Mais informações</a>
    </div>`;}
      
      dado.titulo.includes(campoPesquisa)               
     
    }

    if (!resultados) {
      resultados = "<p>Nenhum resultado foi encontrado</p>"
    }
  
    // Atribui o HTML completo dos resultados à seção
    section.innerHTML = resultados;
  }

