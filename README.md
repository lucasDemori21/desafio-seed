<h1>Projeto Desafio Seed & Coortex</h1>

<p>Este é um projeto ASP.NET C# desenvolvido como parte do desafio proposto pela empresa Seed & Coortex. O objetivo do projeto é criar uma API que expõe um endpoint para pesquisa em dados armazenados em arquivos JSON. A aplicação utiliza ASP.NET C# para o backend e HTML5, CSS3, JavaScript nativo e Bootstrap para o frontend.</p>

<h2>Configuração e Inicialização do Projeto</h2>

    <h3>Pré-requisitos</h3>

    <p>Certifique-se de ter o <a href="https://visualstudio.microsoft.com/">Visual Studio</a> instalado em sua máquina.</p>

    <h3>Passos para Inicialização</h3>

    <ol>
        <li>Clone o repositório para sua máquina local:
            <pre><code>git clone https://github.com/seu-usuario/desafio-seed-coortex.git</code></pre>
        </li>
        <li>Abra o projeto no Visual Studio.</li>
        <li>Certifique-se de ter as dependências instaladas. Caso necessário, use o NuGet Package Manager para restaurar as dependências.</li>
        <li>Execute o projeto pressionando F5 ou escolhendo "Iniciar" no Visual Studio.</li>
        <li>A aplicação estará disponível em <code>http://localhost:7280</code>.</li>
    </ol>

    <h3>Uso da API</h3>

    <p>A API expõe o endpoint <code>http://localhost:7280/api/data/search?searchTerm={conteudo}</code> para pesquisa. Substitua <code>{conteudo}</code> pelo termo desejado.</p>

    <p>Exemplo:
        <br>
        <code>http://localhost:7280/api/data/search?searchTerm=exemplo</code>
    </p>

    <h2>Estrutura do Projeto</h2>

    <p>A estrutura do projeto é organizada da seguinte forma:</p>

    <ul>
        <li><code>desafio-seed-coortex/</code>
            <ul>
                <li><code>src/</code>
                    <ul>
                        <li><code>DesafioSeedCoortex/</code>
                            <ul>
                                <li><code>Controllers/</code>: Contém o controlador da API.</li>
                                <li><code>Models/</code>: Contém os modelos de dados.</li>
                                <li><code>wwwroot/</code>: Contém os arquivos estáticos para o frontend.</li>
                                <li><code>Views/</code>: Contém as views da aplicação.</li>
                                <li><code>Program.cs</code>: Ponto de entrada da aplicação.</li>
                                <li><code>Startup.cs</code>: Configuração da aplicação.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

    <h2>Frontend</h2>

    <p>O frontend foi desenvolvido utilizando HTML5, CSS3, JavaScript nativo e Bootstrap. Após realizar a pesquisa, uma requisição é feita à API, que retorna os dados correspondentes. Cada bloco na interface é preenchido com as informações encontradas para o conteúdo solicitado.</p>

    <h2>Contribuições</h2>

    <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias no projeto.</p>

    <p>Aproveite explorar o desafio e boa codificação!</p>

