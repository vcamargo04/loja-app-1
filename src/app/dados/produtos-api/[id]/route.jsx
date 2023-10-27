import { NextResponse } from "next/server";

const produtos = [
  { id: 1, nome: "Mamão", tipo: "Fruta laranja", desc: "Rica em vitamina E" },
  { id: 2, nome: "Melão", tipo: "Fruta verde", desc: "Rico em vitamina A" },
  { id: 3, nome: "Manga", tipo: "Fruta Amarela", desc: "Rica em vitamina C" },
];

export async function GET(request, { params }) {
  //Pegando o id da rota
  const id = params.id;
    if (id > 0) {
    const produto = produtos.find((produto) => produto.id == id);
    //Retornando o produto encontrado
    console.log(produto);
    return NextResponse.json(produto);
  } else {
    //Retornando todos os produtos
    return NextResponse.json(produtos);
  }
}

//Criando um novo produto
export async function POST(request) {
  const body = JSON.parse(request.json());
  const produto = {
    id: (produtos[produtos.length-1].id + 1),
    nome: body.nome,
    tipo: body.tipo,
    desc: body.desc,
  };
  produtos.push(produto);
  return NextResponse.redirect("/dados/produto-api/" + produto.id);
}