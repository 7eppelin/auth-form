import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

const REPO_NAME = "auth-form";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: `/${REPO_NAME}/`,
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src"),
        },
    },
});
