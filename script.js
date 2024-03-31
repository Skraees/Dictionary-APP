let search=document.querySelector("button");
let box=document.querySelector("#dictionary-entries");




async function api(input){
    
    let dictionary=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
    let res= await dictionary.json();
    let key=res[0].word;
    let def=res[0].meanings[0].definitions[0].definition;
    let ex=res[0].meanings[0].definitions[0].example
    
    let syn="";
    let loop=res[0].meanings[0].synonyms;
    for (const i of loop) {
       syn+=i+",";
    }
    box.innerHTML=`<p> <strong>Word:</strong> ${key}</p> <p><strong>Defination:</strong>${def}</p><strong>Example:</strong> ${ex}</p> <p><strong>Synonyms:</strong>${syn}</P>`;
    
}
search.addEventListener("click",()=>{
        let input=document.querySelector("#search-input").value;
        api(input);
    })