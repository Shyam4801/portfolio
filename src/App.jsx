import React, { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';

function App() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<div className="bg-white dark:bg-black text-stone-900 dark:text-stone-300 min-h-screen font-inter">
			<div className="max-w-5xl w-11/12 mx-auto">
					<Header />
					<Banner />
					<Portfolio />
					<Timeline />
					<Contact />
					<Footer />
			</div>
		</div>
	)
}

export default App;
