const text = document.querySelector("#text");
const delay = document.querySelector("#delay");
const btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
    let data = text.value;
    let delayTime = parseInt(delay.value, 10) || 0; 

    let result = await new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, delayTime);
    });

    document.body.innerHTML = `${result}`;
});