import pool from "@/utils/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM "recipes";');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("There was a problem with the request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}





