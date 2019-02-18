(async ()=>{
    let imgsNodes = Array
        .from(document.getElementsByTagName('img'));

    for(let i=0; i < imgsNodes.length; i++) {
        await new Promise(res=>{
            imgsNodes[i].src=imgsNodes[i].dataset.src;
            imgsNodes[i].addEventListener('load',()=>res());
        })
    }
})()
//Используется data-src вместо src
