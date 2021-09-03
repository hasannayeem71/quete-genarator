const fetchData =async ()=>{
    const res = await fetch('https://api.kanye.rest');
    const data = await res.json();
    document.getElementById('quete-text').innerText=data.quote; 
}
fetchData();