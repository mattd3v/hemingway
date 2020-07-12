import {
  listenAndServe,
  ServerRequest,
  Status
} from "https://deno.land/std/http/mod.ts";

type RequestHandler = (req: ServerRequest) => void;
type RouteHandler = Map<string, RequestHandler>;
type Router = Map<string, RouteHandler>;

const root: RouteHandler = new Map([
  [ "GET", (req: ServerRequest) => req.respond({}) ]
]);

const router: Router = new Map([ [ "/", root ] ]);

function route(req: ServerRequest) {
  // Extract the URL and HTTP method
  // from the incoming request.
  const { url, method } = req;

  if (!router.has(url)) {
    req.respond({
      status: Status.NotFound,
      body: "Not Found"
    });
  } else {
    const handler = router.get(url) as RouteHandler;

    if (!handler.has(method)) {
      const headers = new Headers();
      headers.set("Allow", [ ...handler.keys() ].join(", "));

      req.respond({
        status: Status.MethodNotAllowed,
        body: "Method Not Allowed",
        headers
      });
    } else {
      (handler.get(method) as RequestHandler)(req);
    }
  }
}

listenAndServe({ port: 8000 }, route);
