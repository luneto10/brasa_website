import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Header from './components/header';
import About from './Pages/about';
import Galery from './Pages/gallery';

export default function AppRoutes() {
  return (
        <Router >
            <Header />
            <main>
                <Routes>
                <Route path="/"> 
                    <Route index element={<Home />}/>
                    <Route path="galery" element={<Galery />}/>
                    <Route path="about" element={<About />}/>
                </Route>
                </Routes>
            </main>
        </Router>
  );
}