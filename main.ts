import { listenAndServe, ServerRequest } from "./deps.ts";

const options = { port: 8000 },
  reqHandler = (req: ServerRequest) => req.respond({});

listenAndServe(options, reqHandler);
