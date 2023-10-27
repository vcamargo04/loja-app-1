import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

export async function POST(request) {
//Recuperando os dados do Formulário
  const { nome, tipo, desc,img } = await request.json();

//Recuperando os dados do arquivo JSON em /app/base/db.json;
  const file = await fs.readFile(process.cwd() + '/src/app/base/db.json', 'utf8');
  const data = JSON.parse(file);

//Criando um novo produto
  const newProduto = {
    id:data.produtos[data.produtos.length-1].id + 1,
    nome,
    tipo,
    desc,
    img,
  };

//Adicionando o novo produto ao arquivo JSON em /app/base/db.json;
  data.produtos.push(newProduto);

  await fs.writeFile(process.cwd() + '/src/app/base/db.json', JSON.stringify(data));
  return NextResponse.json({ message: "Produto adicionado com sucesso!" });
}

//Recuperando todos os produtos do arquivo JSON em /app/base/db.json;
export async function GET(request, { params }) {
  const file = await fs.readFile(process.cwd() + '/src/app/base/db.json', 'utf8');
  return NextResponse.json(JSON.parse(file));
}