import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import LoginBtn from "./LoginTools/loginBtn";
import LogoutBtn from './LoginTools/logoutBtn'
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "로켓단이되",
  description: "로켓단이 되어서 우리의 밥줄 포켓몬을 암거래하자!",
};

export default async function RootLayout({ children }) {

  let session = await getServerSession(authOptions);

  return (
    <html lang="ko">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={inter.className} style={{background:'#eee'}}>
        <nav className="navbar bg-body-tertiary mb-5" data-bs-theme="dark">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <img src="/images/icon.png" alt="pokemon" width="30"/>
            </Link>
            <Link href='/' className="Link-none-deco">마이페이지</Link>
            <Link href='/pokedex' className="Link-none-deco">도감</Link>
            <Link href='/trip' className="Link-none-deco">여행</Link>
            {
              session !== null?
              <div>
                <LogoutBtn/>
              </div>:
              <LoginBtn/>
            }
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
