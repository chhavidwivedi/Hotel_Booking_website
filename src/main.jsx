import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";


// Must be prefixed with VITE_ in Vite env files
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Helpful dev-time messaging but avoid printing secrets in console
if (!PUBLISHABLE_KEY) {
  throw new Error(
    'Missing Clerk publishable key. Add VITE_CLERK_PUBLISHABLE_KEY to your .env (e.g. .env.local) and restart the dev server.'
  );
}

// Ensure root exists
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element with id 'root' not found in index.html");
}

createRoot(container).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
