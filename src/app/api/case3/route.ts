import type {NextRequest} from "next/server";

export function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (!tag) {
    return Response.json({error: "Tag is required"}, {status: 400});
  }

  return Response.json({message: "Revalidated"});
}
