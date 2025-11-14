import express from "express";


const host = "0.0.0.0";
const porta = 3000;
var listaFornecedores = [];

const server = express();

server.use(express.urlencoded({ extended: true }));


server.get("/", (requisicao, resposta) => {
    //disponibilizar o menu para o usuário
    resposta.send(`
        <DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <title>Menu do Sistema</title>
            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">MENU</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cadastros
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/cadastroFornecedor">Fornecedores</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/listarFornecedor">Lista de fornecedores cadastrados</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/logout">Sair</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/login">Entrar</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </html>
    `);
});
server.get("/Login", (requisicao, resposta) => {
    resposta.send(``); 
});

server.get("/cadastrofornecedor", (requisicao, resposta) => {
    resposta.send(`
        <DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Menu do Sistema</title>
    </head>

    <body>
        <div class="container">
            <h1 class="text-center border m-3 p-3 bg-light">Cadastro de Fornecedores</h1>
            <form method="POST" action="/adicionarFornecedor" class="row g-3 m-3 p-3 bg-light">
                <div class="col-md-6">
                    <label for="cnpj" class="form-label">CNPJ</label>
                    <!-- O atributo 'id' identifica um elemento HTML na página para o navegador -->
                    <!-- O atributo 'name' rotula o conteúdo que esse elemento armazena para o destinatário-->

                    <input type="text" class="form-control" id="cnpj" name="cnpj">
                </div>
                <div class="col-md-6">
                    <label for="razao" class="form-label">Razão Social</label>
                    <input type="text" class="form-control" id="razao" name="razao">
                </div>
                <div class="col-md-12">
                    <label for="nomef" class="form-label">Nome Fantasia</label>
                    <div class="input-group has-validation">

                        <input type="text" class="form-control" id="nomef" name="nomef">
                    </div>
                </div>

                <h4>Endereço</h4>
                <hr>
                <div class="col-md-3">
                    <label for="cep" class="form-label">CEP</label>
                    <input type="text" class="form-control" id="cep" name="cep">
                </div>
                                <div class="col-md-3">
                    <label for="uf" class="form-label">UF</label>
                    <select class="form-select" id="uf" name="uf">
                        <option selected disabled value="">Escolha um estado...</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>
                
                <div class="col-md-6">
                    <label for="cidade" class="form-label">Cidade</label>
                    <input type="text" class="form-control" id="cidade" name="cidade">
                </div>

                
                <div class="col-md-4">
                    <label for="rua" class="form-label">Rua</label>
                    <input type="text" class="form-control" id="rua" name="rua">
                </div>
                <div class="col-md-3">
                    <label for="bairro" class="form-label">Bairro</label>
                    <input type="text" class="form-control" id="bairro" name="bairro">
                </div>
                <div class="col-md-2">
                    <label for="numero" class="form-label">Número</label>
                    <input type="text" class="form-control" id="numero" name="numero">
                </div>
                <div class="col-md-3">
                    <label for="complemento" class="form-label">Complemento</label>
                    <input type="text" class="form-control" id="complemento" name="complemento">
                </div>
            
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Cadastrar</button>
                    <a class="btn btn-secondary" href="/">Voltar</a>
                </div>
            </form>
        </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    </html>

    `);
})

server.post('/adicionarFornecedor', (requisicao, resposta) => {
    const cnpj = requisicao.body.cnpj;
    const razao = requisicao.body.razao;
    const nomef = requisicao.body.nomef;
    const cep = requisicao.body.cep;
    const cidade = requisicao.body.cidade;
    const uf = requisicao.body.uf;
    const rua = requisicao.body.rua;
    const bairro = requisicao.body.bairro;
    const numero = requisicao.body.numero;
    const complemento = requisicao.body.complemento;


    if (cnpj && razao && nomef && cep && cidade && uf && rua && bairro && numero) {

        listaFornecedores.push({ cnpj, razao, nomef, cep, cidade, uf, rua, bairro, numero, complemento });
        resposta.redirect("/listarFornecedor");
    }
    else {

        let conteudo = `
        
        <DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <title>Menu do Sistema</title>
            </head>
            <body>
                <div class="container">
                    <h1 class="text-center border m-3 p-3 bg-light">Cadastro de Fornecedores</h1>
                    <form method="POST" action="/adicionarFornecedor" class="row g-3 m-3 p-3 bg-light">
                            <div class="col-md-6">
                                <label for="cnpj" class="form-label">CNPJ</label>
                                <!-- O atributo 'id' identifica um elemento HTML na página para o navegador -->
                                <!-- O atributo 'name' rotula o conteúdo que esse elemento armazena para o destinatário-->

                                <input type="text" class="form-control" id="cnpj" name="cnpj" value="${cnpj}">
                            `;
        if (!cnpj) {
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe o nome do CNPJ</p>
            </div>
        `
        }

        conteudo += `</div>
                            <div class="col-md-6">
                                <label for="razao" class="form-label">Razão Social</label>
                                <input type="text" class="form-control" id="razao" name="razao" value="${razao}">
                            `
        if (!razao) {

            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe o Razão Social</p>
            </div>
        `;
        }

        conteudo += `</div>
                            <div class="col-md-12">
                                <label for="nomef" class="form-label">Nome Fantasia</label>
                                <div class="input-group has-validation">
                                <input type="text" class="form-control" id="nomef" name="nomef" aria-describedby="inputGroupPrepend" value="${nomef}">
                                </div>
                            `;
        if (!nomef) {

            conteudo += `
                <div>
                    <p class="text-danger">Por favor, informe o nome de nomef</p>
                </div>
            `;
        }
        conteudo += `
                                            <h4>Endereço</h4>
                <hr>
                </div>
                            <div class="col-md-3">
                                <label for="cep" class="form-label">Cep</label>
                                <input type="text" class="form-control" id="cep" name="cep" value="${cep}">
                              
                             `;

        if (!cep) {
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe a CEP do fornecedor</p>
            </div>`
        }





        conteudo += `</div>
                            <div class="col-md-3">
                                <label for="uf" class="form-label">UF</label>
                                <select class="form-select" id="uf" name="uf" value="${uf}">
                                    <option selected disabled value="">Escolha um estado...</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            `;
        if (!uf) {
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe a uf do fornecedor</p>
            </div>`
        }

        conteudo += `</div>
                            <div class="col-md-6">
                                <label for="cidade" class="form-label">Cidade</label>
                                <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}">
                            `;

        if (!cidade) {
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe a cidade do usuário</p>
            </div>`
        }

        conteudo += `</div>
                            <div class="col-md-4">
                                <label for="rua" class="form-label">Rua</label>
                                <input type="text" class="form-control" id="rua" name="rua" value="${rua}">
                            `;

        if (!rua) {
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe a Rua do fornecedor</p>
            </div>`
        }


        conteudo += `</div>
                            <div class="col-md-3">
                                <label for="bairro" class="form-label">Bairro</label>
                                <input type="text" class="form-control" id="bairro" name="bairro" value="${bairro}">
                            `;

        if (!bairro) {
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe a bairro do fornecedor</p>
            </div>`
        }

        conteudo += `</div>
                            <div class="col-md-2">
                                <label for="numero" class="form-label">Numero</label>
                                <input type="text" class="form-control" id="numero" name="numero" value="${numero}">
                            `;

        if (!numero) {
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe a numero do fornecedor</p>
            </div>`
        }

        conteudo += `</div>
                            <div class="col-md-3">
                                <label for="complemento" class="form-label">Complemento</label>
                                <input type="text" class="form-control" id="complemento" name="complemento" value="${complemento}">
                            `;

        if (!complemento) {
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe a complemento do fornecedor</p>
            </div>`
        }

    conteudo += `</div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Cadastrar</button>
                                <a class="btn btn-secondary" href="/">Voltar</a>
                            </div>
                    </form>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </html>
        
        `;


        resposta.send(conteudo);

    }

});

server.get("/listarFornecedor", (requisicao, resposta) => {
    let conteudo = `
        <DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <title>Lista de Fornecedores no Sistema</title>
            </head>
            <body>
                <div class="container">
                    <h1 class="text-center border m-3 p-3 bg-light">Lista de Usuários</h1>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>CNPJ</th>
                                <th>Razão Social</th>
                                <th>Nome Fantasia</th>
                                <th>Cidade</th>
                                <th>UF</th>
                                <th>CEP</th>
                                <th>Rua</th>
                                <th>Bairro</th>
                                <th>Número</th>
                                <th>Complemento</th>

                            </tr>
                        </thead>
                        <tbody>`;
    for (let i = 0; i < listaFornecedores.length; i++) {
        conteudo += `
            <tr>
                <td>${listaFornecedores[i].cnpj}</td>
                <td>${listaFornecedores[i].razao}</td>
                <td>${listaFornecedores[i].nomef}</td>
                <td>${listaFornecedores[i].cidade}</td>
                <td>${listaFornecedores[i].uf}</td>
                <td>${listaFornecedores[i].cep}</td>
                <td>${listaFornecedores[i].rua}</td>
                <td>${listaFornecedores[i].bairro}</td>
                <td>${listaFornecedores[i].numero}</td>
                <td>${listaFornecedores[i].complemento}</td>
            </tr>
        `;
    }
    conteudo += `
                        </tbody>
                    </table>
                    <a class="btn btn-secondary" href="/cadastroFornecedor">Voltar</a>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </html>
    `
    resposta.send(conteudo);
});

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
});