export default function LoginPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Login</h1>
      <p>Authentication UI will be implemented in a later phase.</p>
      <form style={{ display: "grid", gap: "0.75rem", maxWidth: "320px" }}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="you@aishbakery.com"
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>
        <button type="button" style={{ padding: "0.5rem" }}>
          Sign in (stub)
        </button>
      </form>
    </main>
  );
}
