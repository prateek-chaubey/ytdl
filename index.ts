import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import * as ytdl from "https://deno.land/x/ytdl_core@v0.1.2/mod.ts";

const handler = async function(req: Request){

var url=new URL(req.url);
console.log(url.pathname)

if(url.pathname.indexOf("/vid") > -1) {
let id=url.searchParams.get("id");
if(ytdl.validateID(id)){

let yt =await ytdl.getInfo(id); 

return new Response(`{"video":${JSON.stringify(yt.player_response.videoDetails)},"stream":${JSON.stringify(yt.player_response.streamingData)}}`, { 
status: 200,
headers: {
"content-type": "application/json; charset=utf-8",
"Access-Control-Allow-Origin":"*",
} 
});
}else{
return new Response(`{"error":true}`, { 
status: 404,
headers: {
"Content-Type": "application/json; charset=utf-8",
"Access-Control-Allow-Origin":"*",
} 
});
}  
}
else if(url.pathname=="/"){
let index=await Deno.readTextFile("./index.html");
  
const body = new TextEncoder().encode(index);
return new Response(body, { 
status: 200,
headers: {
"content-type": "text/html; charset=utf-8",
} 
});
}else{
return new Response(`<h1>404 NOT FOUND BRUH 🤣🤣🤣🤣`, { 
status: 404,
headers: {
"content-type": "text/html; charset=utf-8",
} 
});
}
  
};

serve(handler);
