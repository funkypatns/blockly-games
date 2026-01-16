import { NextResponse } from "next/server";

import { pool } from "@/src/db";

export async function GET() {
  await pool.query("select 1");

  return NextResponse.json({ ok: true });
}
