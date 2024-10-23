import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Listcategorie from "./components/categories/Listcategorie"
import Insertcategorie from "./components/categories/Insertcategorie"
import Editcategorie from "./components/categories/Editcategorie"
import Viewcategorie from "./components/categories/Viewcategorie"

import Listscategorie from "./components/scategories/Listscategorie"
import Insertscategorie from "./components/scategories/Insertscategorie"
import Editscategorie from "./components/scategories/Editscategorie"
import Viewscategorie from "./components/scategories/Viewscategorie"

import Listarticles from "./components/articles/Listarticles"
import Editarticles from "./components/articles/Editarticle"
import Insertarticles from "./components/articles/Insertarticle"
import Viewarticles from "./components/articles/Viewarticle"

import Menu from "./components/Menu"


function App() {

  return (
    <>
      <Router>
        <Menu/>
        <Routes>

          <Route path="/articles" element={<Listarticles/>}/>
          <Route path="/articles/add" element={<Insertarticles/>}/>
          <Route path="/articles/edit/:id" element={<Editarticles/>}/>
          <Route path="/articles/view/:id" element={<Viewarticles/>}/>

          <Route path="/categories" element={<Listcategorie/>}/>
          <Route path="/categories/add" element={<Insertcategorie/>}/>
          <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
          <Route path="/categories/view/:id" element={<Viewcategorie/>}/>

          <Route path="/scategories" element={<Listscategorie/>}/>
          <Route path="/scategories/add" element={<Insertscategorie/>}/>
          <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
          <Route path="/scategories/view/:id" element={<Viewscategorie/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
