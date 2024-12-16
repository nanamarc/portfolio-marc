import {
    buildWispClient,
    GetPostsResult,
    GetPostResult,
  } from "@wisp-cms/client";
  
  export const wisp = buildWispClient({
    blogId: "cm4ldz2rz00009jox3o5iop28",
  });
  
  export type { GetPostsResult, GetPostResult };
  