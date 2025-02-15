import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/React-Product-site",
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 20000,
            maxSize: 500000,
        },
    },
    build: {
        chunkSizeWarningLimit: 1000, // limit dalam kilobytes (KB)
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                },
            },
        },
    },
});
