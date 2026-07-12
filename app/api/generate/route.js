import clientPromise from "../../lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const exists = await collection.findOne({
    shorturl: body.shorturl,
  });

  if (exists) {
    return Response.json({
      success: false,
      message: "Short URL already exists!",
    });
  }

  await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
  });

  return Response.json({
    success: true,
    message: "URL Generated Successfully",
  });
}