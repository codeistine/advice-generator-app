const API_LINK = "https://api.adviceslip.com/advice";

const adviceNumber = document.querySelector('.advice-number');
const adviceQoute = document.querySelector('.advice-qoute');
const btn = document.querySelector('button.advice-btn');

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = await response.json();
    return advice;
};

fetchNewAdvice();

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;
    adviceNumber.textContent = `ADVICE #${id}`;
    adviceQoute.textContent = advice;
}

const generateNewAdvice = async () => { 
    const data = await fetchNewAdvice();
    const advice = data.slip;
    console.log(advice);

    renderAdvice(advice);
}

window.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', generateNewAdvice);
})