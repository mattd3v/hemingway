import { assert } from "https://deno.land/std@0.53.0/testing/asserts.ts";

Deno.test('GET - /api/users', async () => {
  const response = await fetch("http://app:8000");
  const isOk = response.ok;

  assert(isOk);

  if (response.body)
    response.body.cancel();
});
