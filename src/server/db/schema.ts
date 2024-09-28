// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index, 
  pgTableCreator,
  serial,
  timestamp,
  text,
  varchar,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `t3_gallery_${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    post: varchar("post", { length: 256*4 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  }
);

// Create a pgTable that maps to a table in your DB
export const users = createTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    image: text('image').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  },
);
// Create a pgTable that maps to a table in your DB
export const images = createTable(
  'images',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    image_url: text('image').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

