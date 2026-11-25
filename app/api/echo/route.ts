export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Corpo da requisição deve ser um JSON válido." },
      { status: 400 },
    );
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return Response.json(
      { error: "O corpo da requisição deve ser um objeto JSON." },
      { status: 400 },
    );
  }

  const { name, amount } = body as { name?: unknown; amount?: unknown };

  if (typeof name !== "string") {
    return Response.json(
      { error: 'O campo "name" deve ser uma string.' },
      { status: 400 },
    );
  }

  const trimmedName = name.trim();

  if (trimmedName.length === 0) {
    return Response.json(
      { error: 'O campo "name" não pode ser vazio.' },
      { status: 400 },
    );
  }

  if (typeof amount !== "number" || !Number.isFinite(amount)) {
    return Response.json(
      { error: 'O campo "amount" deve ser um número (ex: 150 ou 12.50).' },
      { status: 400 },
    );
  }

  return Response.json(
    {
      name: trimmedName,
      amount,
      receivedAt: new Date().toISOString(),
    },
    { status: 201 },
  );
}
