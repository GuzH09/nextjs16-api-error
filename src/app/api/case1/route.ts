import type {NextRequest} from "next/server";

export function GET(request: NextRequest) {
  try {
    const tag = request.nextUrl.searchParams.get("tag");

    if (!tag) {
      return Response.json({error: "Tag is required"}, {status: 400});
    }
  } catch (error) {
    console.error("Error", error);

    return Response.json({error: "Internal server error"}, {status: 500});
  }

  return Response.json({message: "Revalidated"});
}
