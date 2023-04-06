import express from "https://esm.sh/express@4.18.2";
import * as ytdl from "https://deno.land/x/ytdl_core@v0.1.2/mod.ts";
const app=express();

app.get("/",(req,res)=>{
res.sendFile("index.html",{ root: '.' });
})

app.get("/vid",async (req:any,res:any)=>{
let id=req.query.id;
if(ytdl.validateID(id)){

let yt =await ytdl.getInfo(id); 
res.json({"video":yt.player_response.videoDetails,"stream":yt.player_response.streamingData});
}else{
res.json({"error":true});
}
});





app.listen(8000); 
