import { pgTable,serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData'),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(), 
    createdAt: varchar('createdAt'),
    createdBy: varchar('createdBy'),

})