import Header from "./header";
import Footer from "./footer";
import "./globals.css"

 
const Layout = ({children}) => {
  return (
    <html lang="en">
      <body className= "m-0 p-0 box-border bg-black min-h-screen">
    <div className="flex flex-col ">
      <header className="w-full h-48">
        <Header/>
      </header>
      <main className="">
        {children}
      </main>
      <footer className="h-15  ">
        <Footer/>
      </footer>
      
    </div>
    </body>
    </html>
);}
export default Layout
