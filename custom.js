function CreateCounterBox(valueNumber) {
    const mainNode = document.createElement("div");
    mainNode.classList.add('col-md-3');
    mainNode.classList.add('col-sm-6');
    mainNode.classList.add('col-12');

    const cardNode = document.createElement("div");
    cardNode.classList.add("card")
    cardNode.classList.add("text-dark")
    cardNode.classList.add("border-dark")
    cardNode.classList.add("mb-3")
    cardNode.classList.add("text-center")

    const cartHeader = document.createElement("div");
    cartHeader.classList.add("card-header");
    cartHeader.append("step " + valueNumber)

    const cartbody = document.createElement("div");
    cartbody.classList.add("card-body");

    const cartText = document.createElement("h5");
    cartText.classList.add("card-text");

    const textId = "counter-" + valueNumber;
    cartText.append(valueNumber);
    cartText.setAttribute("id", textId);


    const buttonNode = document.createElement("button");
    buttonNode.classList.add("btn");
    buttonNode.classList.add("btn-success");
    buttonNode.append("RUN");
    buttonNode.onclick = () => run(valueNumber, valueNumber, textId);


    cartbody.appendChild(cartText);
    cartbody.appendChild(buttonNode);

    cardNode.appendChild(cartHeader);
    cardNode.appendChild(cartbody);

    mainNode.appendChild(cardNode);

    return mainNode;
}

function onAddCounter() {
    const inputNumber = document.getElementById('numberInput');
    const container = document.getElementById('counterContainer');
    container.appendChild(CreateCounterBox(inputNumber.value));
    inputNumber.value = 0;
}
function run(value, step, id) {
    
    const newValue = parseFloat(value) + parseFloat(step)
    var text = document.getElementById(id);
    text.innerHTML = newValue;
    var btn = text.parentNode.childNodes[1];
    btn.onclick = () => run(newValue, step, id);
}
