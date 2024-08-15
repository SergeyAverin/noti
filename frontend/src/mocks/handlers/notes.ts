import { http, HttpResponse } from "msw";

export const changeTitle = http.patch(
  "/notes/:slug",
  ({ request, params, cookies }) => {
    console.log(request.body);
    return HttpResponse.json(["Tom", "Jerry", "Spike"]);
  }
);
