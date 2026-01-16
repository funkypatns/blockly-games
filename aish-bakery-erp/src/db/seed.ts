import "dotenv/config";

import { db, pool } from "@/src/db";
import { users } from "@/src/db/schema";

async function seed() {
  await db
    .insert(users)
    .values({
      email: "admin@aishbakery.com",
      name: "Aish Bakery Admin"
    })
    .onConflictDoNothing();
}

seed()
  .then(() => {
    console.log("Seed completed");
  })
  .catch((error) => {
    console.error("Seed failed", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
