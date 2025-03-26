export function getUserIP(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0];
  }

  const ip = req.headers.get("x-real-ip") || req.connection.remoteAddress;
  if (ip === "::1") return "127.0.0.1";

  return ip;
}
