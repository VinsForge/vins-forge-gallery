import { createRoot } from 'react-dom/client'
import App from './App'  // or route.tsx if that file is your entry point
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
