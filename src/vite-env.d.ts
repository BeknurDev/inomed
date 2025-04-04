/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_OPENAI_API_KEY: string;
    readonly VITE_UZBEKVOICE_API_KEY: string;
    readonly VITE_UZBEKVOICE_URL: string
    // add other environment variables here...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}