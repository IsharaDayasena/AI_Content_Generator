import { pgTable,serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formData: varchar('formData').default(''),  // Default empty string
    aiResponse: text('aiResponse').default(''),
    templateSlug: varchar('templateSlug').notNull(),
    createdAt: varchar('createdAt').default(''),  // Default timestamp
    createdBy: varchar('createdBy').default('system'),  // Example default
  });
  