async function loadElement(){
    let elements = [];
    try{
        const response = await fetch('/api/elements');
        elements = await response.json();
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
    for(const [i,element] of elements.entries()){
        const positionTdEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const elementTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
        positionTdEl.textContent = i+1;
        nameTdEl.textContent = element.name;
        elementTdEl.textContent = element.elemental;
        dateTdEl.textContent = element.date;
        const rowEl = document.createElement('tr');
        rowEl.appendChild(positionTdEl);
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(elementTdEl);
        rowEl.appendChild(dateTdEl);

        tableBodyEl.appendChild(rowEl);
    }
    // }
    // else{
    //     tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first Sorted!</td></tr>';
    // }
}
loadElement();