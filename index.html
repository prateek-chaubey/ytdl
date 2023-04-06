<!DOCTYPE html>
<html>
<head>
<title>Youtube Downloader - By Prateek Chaubey</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="UTF-8" />
</head>
<style type="text/css">
*{
padding:0;
margin:0;
outline:0;
font-family:Verdana,Arial,sans-serif;
}
body{
background:#001;
}
.header{
position:fixed;
top:0;
left:0;
background:rgba(255,0,0,.7);
width:100%;
height:50px;
text-align:center;
line-height:50px;
color:white;
font-size:18px;
backdrop-filter:blur(5px);
}
.input{
width:90%;
margin:auto;
margin-top:80px;
left:0;
background:linear-gradient(90deg,#f00,#f0f);
height:50px;
line-height:50px;
border-radius:30px;
display:flex;
justify-content:center;
align-items:center;
}
input::placeholder{
color:white;
}
input{
width:calc(68% - 10px);
height:30px;
background:black;
border:0;
padding:5px;
color:white;
font-size:16px;
border-radius:20px 0 0 20px;
}
.input button{
width:28%;
height:40px;
padding:5px;
background:black;
border:0;
margin-left:1px;
border-radius:0px 20px 20px 0px;
}
svg{
height:20px;
width:20px;
}


.formats{
width:100%;
margin-top:50px;
text-align:center;
color:white;
}
.formats iframe{
height:200px;
border:0;
border-radius:10px;
box-shadow:0px 0px 10px white;
width:90%;
}
.down{
height:40px;
width:auto;
margin:auto;
display:flex;
justify-content:center;
align-items:center;
}
.down button{
background:transparent;
box-shadow:0px 0px 8px  #0fd;
border:0;
height:40px;
width:100px;
border-radius:5px;
color:white;
display:flex;
justify-content:center;
align-items:center;
}
.down button:nth-child(2){
margin-left:20px;
}
.down button svg{
margin-right:10px;
}
.formats h3{
font-size:18px;
color:grey;
}
table{
width:95%;
border-collapse:separate; 
border-spacing: 0 1em;
margin:auto;
}
table th{
border-bottom:1px solid silver;
padding-bottom:10px;
}
.v{
color:#0f9;
text-shadow:0px 0px 5px #0f9;
}
.a{
color:#09f;
text-shadow:0px 0px 5px #09f;
}
.ad{
color:#f09;
text-shadow:0px 0px 5px #f09;
}
.w{
color:#f90;
text-shadow:0px 0px 5px #f90;
}
.m{
color:#ff0;
text-shadow:0px 0px 5px #ff0;
}
table button{
background:transparent;
padding:5px;
border:0;
}
td img{
height:90px;
width:160px;
border-radius:10px;
}
.loading{
height:50px;
width:50px;
border:2px solid transparent;
border-bottom:2px solid #0fd;
box-shadow:0px 0px 10px #0fd;
border-radius:50%;
margin:auto;
animation:animate 2s ease-in-out infinite;
}
@keyframes animate{
100%{
transform:rotate(360deg);
}
}
.credits{
width:100%;
margin:auto;
font-size:17px;
color:#0fa;
display:flex;
justify-content:center;
align-items:center;
}
.credits svg{
fill:red;
margin-left:10px;
margin-right:10px;
}
@media screen and (min-width: 760px){
.input{
width:60%;
}
.formats{
display: flex;
justify-content:center;
}
.formats iframe{
height:400px;
}
.d1,.d2{
width: 48%;
}

}
</style>

<body>
<div class="header" >Youtube Downloader</div>

<div class="input" >
<input type="text" value=""   placeholder="Enter Your URL"  id="url"  />
<button onclick="download()">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
</button>
</div>

<div class="formats" >

</div>
<br><br>
<div class="credits" >
Made With <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> By Th30neand0nly
</div>
<br><br><br><br>
<a href="#" id="link" download=""  style="display:none"   ></a>
<script type="text/javascript">

function formatFileSize(x){
var s=parseInt(x);
let ss = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
for (var i=0; s > 1024; i++) s /= 1024;
return `${s.toFixed(1)} ${ss[i]}`;
}


async function download(){
var url="",id="";
var u=document.getElementById("url").value;
try{
url=new URL(u);
}catch{
alert("Enter a Valid URL");
return;
}
if((url.hostname.indexOf("youtube.com") > -1) || (url.hostname.indexOf("youtu.be") > -1) ){
if(url.pathname.indexOf("shorts") > -1){
id=url.pathname.substr(8,url.pathname.length);
}
else if(url.pathname.indexOf("watch") > -1){
id=url.searchParams.get("v");
}else if(url.hostname.indexOf("youtu.be") > -1){
id=id=url.pathname.substr(1,url.pathname.length);
}

document.getElementsByClassName("formats")[0].innerHTML=`<div class="loading" ></div>`;

var info=await fetch(`./vid?id=${id}`);
info=await info.json();

var vTable=`<table>
<tr>
<th>Format</th>
<th>Quality</th>
<th>Size</th>
<th>Download</th>
</tr>`;

var tTable=`<table>
<tr>
<th>Thumbnail</th>
<th>Resolution</th>
<th>Download</th>
</tr>`;

var btn="";


var thumbs=info.video.thumbnail?.thumbnails;
var vids=info.stream.formats;
var avids=info.stream.adaptiveFormats;

for(var x in thumbs){
tTable+=`
<tr>
<td><img src="${thumbs[x].url}"></td>
<td>${thumbs[x].height}x${thumbs[x].width}</td>
<td><button onclick="down('${thumbs[x].url}')">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
</button></td>
</tr>
`;
}

for(var x in vids){
vTable+=`<tr>
<td class="v" >Video</td>
<td>${vids[x].qualityLabel}</td>
<td></td>
<td><button onclick="down('${vids[x].url}')">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
</button></td>
</tr>
`;

btn+=`
<button onclick="down('${vids[x].url}')">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg> ${vids[x].qualityLabel}
</button>
`;


}

for(var x in avids){
vTable+=`<tr>
${(avids[x].qualityLabel == undefined)?'<td class="a" >Audio</td>':'<td class="ad" >Adaptive</td>'}
<td>${(avids[x].qualityLabel == undefined)?'':avids[x].qualityLabel}</td>
<td>${formatFileSize(avids[x].contentLength)}</td>
<td><button onclick="down('${avids[x].url}')">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
</button></td>
</tr>
`;
}


tTable+="</table>";
vTable+="</table>";

document.getElementsByClassName("formats")[0].innerHTML=`<div class="d1"><iframe src="https://www.youtube.com/embed/${id}">
</iframe>
<br><br>
<div class="down" >
${btn}
</div>
</div>
<div class="d2">
<br>
<h3>Other Formats</h3>
<br>
${vTable}
<br>
<h3>Thumbnails</h3>
${tTable}
</div>`;
}
else{
alert("Enter a Valid URL");
}
}


function down(x){
document.getElementById("link").href=x;
document.getElementById("link").click();
}
</script>
</body>
</html>
