import { Navbar, Main, Product, Footer } from "../components";

function Home() {
  return (
    <div className="w-full h-full mx-auto">
      <Navbar />
      <Main />
      <Product />
      <Footer />
    </div>
  )
}

export default Home