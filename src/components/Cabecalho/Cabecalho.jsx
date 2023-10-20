import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className='bg-gray-700 text-white h-20'>
    <nav className="flex flex-row  justify-around">
      <Link href="/">HOME</Link>
      <Link href="/produtos/mamao">MAMÃO</Link> 
      <Link href="/produtos/melao">MELÃO</Link> 
      <Link href="/produtos/manga">MANGA</Link>
    </nav>
  </header>
  )
}
