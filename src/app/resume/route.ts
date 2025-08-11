import { readFile } from "fs/promises"
import path from "path"

export const runtime = "nodejs"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf")
    const file = await readFile(filePath)
    return new Response(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=resume.pdf",
        "Cache-Control": "public, max-age=3600, immutable",
      },
    })
  } catch (err) {
    return new Response("Resume not found", { status: 404 })
  }
}


