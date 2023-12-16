import { BrowserRouter } from "react-router-dom";
import {
	About,
	Services,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
	Footer,
} from "./components";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export default function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<BrowserRouter>
				<div className="relative z-0 bg-primary">
					<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
						<Navbar />
						<Hero />
					</div>
					<About />
					<Services />
					<Experience />
					<Tech />
					<Works />
					<Feedbacks />
					<div className="relative z-0">
						<Contact />
						<StarsCanvas />
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		</I18nextProvider>
	);
}
