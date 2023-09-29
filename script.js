async function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        let lastSwappedIndex = 0;

        for (let i = 0; i < len - 1; i++) {
            app.children[i].style.backgroundColor = '#F24405';
            app.children[i + 1].style.backgroundColor = '#F24405';

            await new Promise(resolve => setTimeout(resolve, 1000));

            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                app.children[i].textContent = arr[i];
                app.children[i + 1].textContent = arr[i + 1];
                app.children[i].style.backgroundColor = '#049DD9';
                app.children[i + 1].style.backgroundColor = '#76BF2C';
                swapped = true;
                lastSwappedIndex = i;
            } else {
                app.children[i].style.backgroundColor = '#049DD9';
                app.children[i + 1].style.backgroundColor = '#76BF2C';
            }
        }
        
        for (let i = len - 1; i > lastSwappedIndex; i--) {
            app.children[i].style.backgroundColor = '#76BF2C';
        }
        
        len = lastSwappedIndex + 1;
    } while (swapped);
    
    for (let i = 0; i < arr.length; i++) {
        app.children[i].style.backgroundColor = '#ADB8BD';
    }
}

function startVisualization() {
    const inputArray = document.getElementById('inputArray').value;
    const inputArrayParsed = inputArray.split(',').map(Number);

    app.innerHTML = '';

    for (let i = 0; i < inputArrayParsed.length; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = inputArrayParsed[i];
        app.appendChild(box);
    }

    bubbleSort(inputArrayParsed);
}
