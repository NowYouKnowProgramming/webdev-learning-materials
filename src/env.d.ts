/// <reference types="astro/client" />
declare module '*.css'
declare module '*.scss'

interface ImportMetaEnv {
  readonly PUBLIC_APP_ID: string
  readonly PUBLIC_API_KEY: string
  readonly PUBLIC_INDEX_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
