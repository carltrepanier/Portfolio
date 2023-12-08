import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";
import "./i18n";

inject();
injectSpeedInsights();

const root = createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
