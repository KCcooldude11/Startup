async function loadElement(){
    let elements = [];
    try{
        const response = await fetch('/api/elements');
        scores = await response.json();
        localStorage.setItem('elements', JSON.stringify(elements));
    }
    catch{
        const elementsText = localStorage.getItem('elements');
        if(elementsText){
            elements = JSON.parse(elementText);
        }
    }
    displayElement(elements);
}
function displayElement(elements){
    const tableBodyEl = document.querySelector('#elements');
    if(element.length){
        for(const [i,element] of elements.entries()){
            const nameTdEl = document.createElement('td');
            const elementTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');

            nameTdEl.textContent = element.name;
            elementTdEl.textContent = element.elemental;
            dateTdEl.textContent = element.date;
            const rowEl = document.createElement('tr');
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(elementTdEl);
            rowEl.appendChild(dateTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    }
    else{
        tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first Sorted!</td></tr>';
    }
}