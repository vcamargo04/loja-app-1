import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const response = await fetch("https://api.github.com/users");
    const result = await response.json();
    return NextResponse.json(result);
}

//Criar um método GET para recuperar todos os usuários do Github através da api utilizando fetch.