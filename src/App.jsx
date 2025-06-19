import { Outlet } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {
	return (
		<div className="app">
			<Header logoSrc="/logo.svg" />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
