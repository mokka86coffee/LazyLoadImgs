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

(async ()=>{
    for (let node of document.getElementsByTagName('img')) {
        await new Promise(res=>{
            node.src=node.dataset.src;
            node.onload = ()=>res();
        })
    }
})()
//Используется data-src вместо src
