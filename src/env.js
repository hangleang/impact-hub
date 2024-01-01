import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z
      .string()
      .url()
      .refine(
        (str) => !str.includes("YOUR_MYSQL_URL_HERE"),
        "You forgot to change the default URL",
      ),
    PINATA_JWT: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    NEXT_PUBLIC_SPEC_GRAPHQL: z
      .string()
      .url()
      .refine(
        (str) => !str.includes("YOUR_SPEC_GRAPHQL_URL_HERE"),
        "You forgot to change the default URL",
      ),
    NEXT_PUBLIC_IPFS_WRITE_GATEWAY: z.string().url(),
    NEXT_PUBLIC_IPFS_READ_GATEWAY: z.string().url(),
    NEXT_PUBLIC_INFURA_ID: z.string(),
    NEXT_PUBLIC_ALCHEMY_ID: z.string(),
    NEXT_PUBLIC_PROJECT_ID: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
    PINATA_JWT: process.env.PINATA_JWT,
    NEXT_PUBLIC_SPEC_GRAPHQL: process.env.NEXT_PUBLIC_SPEC_GRAPHQL,
    NEXT_PUBLIC_IPFS_READ_GATEWAY: process.env.NEXT_PUBLIC_IPFS_READ_GATEWAY,
    NEXT_PUBLIC_IPFS_WRITE_GATEWAY: process.env.NEXT_PUBLIC_IPFS_WRITE_GATEWAY,
    NEXT_PUBLIC_INFURA_ID: process.env.NEXT_PUBLIC_INFURA_ID,
    NEXT_PUBLIC_ALCHEMY_ID: process.env.NEXT_PUBLIC_ALCHEMY_ID,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
