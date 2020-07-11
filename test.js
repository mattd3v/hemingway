import { assert } from "https://deno.land/std/testing/asserts.ts";

const APP_URL = Deno.env.get("APP_URL") || "http://localhost:8000";

const requests = [ { method: "GET", path: "/api/users" } ];

requests.forEach(async function ({ method, path }) {
  // Test each of the responses ok status.
  Deno.test(`${method} - ${path}`, async function () {
    assert((await fetch(`${APP_URL}${path}`, { method })).ok);
  });
});
