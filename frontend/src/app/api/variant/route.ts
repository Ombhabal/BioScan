export async function POST(req: Request) {
  const body = await req.json();

  const modalRes = await fetch(
    process.env.NEXT_PUBLIC_ANALYZE_SINGLE_VARIANT_BASE_URL!,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  if (!modalRes.ok) {
    const err = await modalRes.text();
    return new Response(err, { status: modalRes.status });
  }

  const data = await modalRes.json();
  return Response.json(data);
}
