import Image from "next/image";

export default function NotFound() {
  return (
    <div>
        <h1>!OOPSS - 404</h1>
            <div>
                <figure>
                    <Image src="https://http.cat/images/404.jpg" alt="Gato" width={750} height={600}/>
                </figure>
            </div>
        <h2>Página não encontrada!</h2>
    </div>
  )
}
