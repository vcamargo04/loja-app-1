import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

export async function GET(request, { params }) {

  console.log('request', Request.url);
    const file = await fs.readFile(process.cwd() + '/src/app/base/db.json', 'utf8');
    return NextResponse.json(JSON.parse(file));
  }

//Recuperando todos os produtos do arquivo JSON em /app/base/db.json;
