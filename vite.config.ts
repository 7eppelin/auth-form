import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const REPO_NAME = "auth-form";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: `/${REPO_NAME}/`,
});
