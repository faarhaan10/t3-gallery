import postgres from "postgres";

import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.POSTGRES_URL);
if (env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(sql, { schema });


export const getAllUsers = async () => {
  return await db.select().from(schema.users);
};
export const getAllPosts = async () => {
  return await db.select().from(schema.posts);
};
export const getAllPhotos = async () => {
  return await db.query.images.findMany();
};



interface Photo {
  name: string;
  image_url: string;
}
export const addPhoto = async (imgData:Photo) => {
  return await db.insert(schema.images).values(imgData).returning()
};

