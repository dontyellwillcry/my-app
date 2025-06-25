import pool from "@/utils/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const result = await pool.query(`SELECT * FROM "user";`);
    if (result.status < 200 || result.status >= 300) {
      throw new Error("Network response was not ok");
    }
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error with query", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
