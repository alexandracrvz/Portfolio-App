import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
			</Routes>
		</div>
	)
}

export default App