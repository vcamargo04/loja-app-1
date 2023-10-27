import { NextResponse } from "next/server";

export async function POST(request, response) {
  if (request.method === 'POST') {
    // Lógica para processar a requisição POST
    console.log(request.json());
    // Faça algo com os dados recebidos
    return NextResponse.redirect('http://localhost:3000/obrigado');
  } else {
    return NextResponse.error(405, { message: 'Método não permitido' });
  }
}