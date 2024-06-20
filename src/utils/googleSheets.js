'use server'
function editLista(contato) {
    if (contato.includes(',')) {
        const list_contato = contato.split(',')
        return list_contato
    }
    return contato
}

function alignData(sheet, data) {
    var row = {}
    switch (sheet) {
        case 'produtos':
            row.id = data[0];
            row.nome = data[1];
            row.descricao = data[2];
            row.imagem = data[3];
            row.tabela_preco = JSON.parse(data[4]);
            break;

        case 'perguntas':
            row.id = data[0];
            row.questao = data[1];
            row.resposta = data[2];
            break;

        case 'contato':
            row.id = data[0];
            row.nome_loja = data[1];
            row.endereco = data[2];
            row.contato = editLista(data[3]);
            row.funcionamento = editLista(data[4]);
            row.link_facebook = data[5];
            row.link_instagram = data[6];
            break;
    }
    return row
}

async function GetDataSheet(sheet) {
    // METODO PARA BUSCAR TODOS OS DADOS DE CADA PÁGINA
    try {
        const sheet_url = process.env.SHEET_URL
        const sheet_id = process.env.SHEET_ID
        const ulr = sheet_url.replace('::ID', sheet_id)

        const response = await fetch(`${ulr}?sheet=${sheet}`);
        const values = await response.json();
        const data = []
        values.jsonData.forEach(element => {
            data.push(alignData(sheet, element))
        });
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function GetAllData() {
    try {
        const [getProdutos, getFaq, getContact] = await Promise.all([
            GetDataSheet('produtos'),
            GetDataSheet('perguntas'),
            GetDataSheet('contato')
        ]);

        const data = [
            { sheet: "produtos", data: getProdutos },
            { sheet: "perguntas", data: getFaq },
            { sheet: "contato", data: getContact }
        ]

        return data

    } catch (error) {
        return { result: false, erro: error }
    }
    return []
}