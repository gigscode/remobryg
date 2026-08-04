import handler from "../dist/server/server.js";

export default async function (req, res) {
  const url = new URL(req.url, `https://${req.headers.host}`);
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: ["GET", "HEAD"].includes(req.method) ? undefined : req,
  });

  const response = await handler.fetch(request, {}, {});

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));
  const body = await response.arrayBuffer();
  res.end(Buffer.from(body));
}
