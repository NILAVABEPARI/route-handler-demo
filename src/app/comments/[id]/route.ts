import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    if (parseInt(id) > comments.length) redirect("/comments");
    const comment = comments.find(comment => comment.id === parseInt(id));

    if (comment)
        return Response.json(comment);
    else return Response.json({});
}