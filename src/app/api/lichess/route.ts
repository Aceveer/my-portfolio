export async function GET(req: Request) {
  const apiKey = process.env.LICHESS_API_KEY;

  if (!apiKey) {
    return new Response("Missing API key", { status: 500 });
  }

  const accountRes = await fetch("https://lichess.org/api/account", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!accountRes.ok) {
    return new Response("Failed to fetch account data", { status: accountRes.status });
  }

  const accountData = await accountRes.json();
  return Response.json(accountData);
}
