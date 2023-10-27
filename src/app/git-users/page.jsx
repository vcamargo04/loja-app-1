import Image from "next/image";

export default async function GitUsers({ users }) {
    
    
    const response = await fetch("http://localhost:3000/dados/git-users");
        const result = await response.json();
        
    return (
        <div>
            <h1>Git Users</h1>
            <p>Recuperar todos os usuários do Github através da api-interna http://localhost:3000/dados/git-users utilizando fetch. Apresentar apenas os campos login,avatar e url.</p>
            <div>
                <ul>
                    {result.map((user) => (
                        <li key={user.id}>
                            <Image src={user.avatar_url} alt={user.login} width={100} height={100}/>
                            <p>{user.login}</p>
                            <a href={user.html_url} target="_blank">Acessar</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


    //Recuperar todos os usuários do Github através da api-interna http://localhost:3000/dados/git-users utilizando fetch. Apresentar apenas os campos login,avatar e url.