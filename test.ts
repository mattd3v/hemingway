import { assert } from "https://deno.land/std@0.53.0/testing/asserts.ts";

Deno.test("GET - /", async () => {
  const response = await fetch("http://app:8000/");

  assert(response.ok);

  if (response.body)
    response.body.cancel();
});

Deno.test("POST - /", async () => {
  const TEST_USER = {
    email: "user@example.com",
    password: "password"
  }

  const response = await fetch("http://app:8000/", {
    method: "POST",
    body: JSON.stringify(TEST_USER)
  });

  assert(!response.ok);

  if (response.body)
    response.body.cancel();
});

