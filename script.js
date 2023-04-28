const countdown = () => {
    //especificar a data que finalizará a contangem
    const countDate = new Date("Jan 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();

    //calculando o tempo 
    const remainingTime = countDate - now

    //trabalhando nos tempos
    const second = 1000;
    const minute = second * 60
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);

    //atualizando no html
    //checando se passou de zero
    document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".seconds").innerText = textSecond > 0 ? textSecond : 0;

}

//executando o countdown a cada 500ms
setInterval(countdown, 500)


//-----------------------------------------------------------------
//alert

const alerta = document.querySelector('.alert')
 
alerta.addEventListener('click', clicked)

function clicked(){
    alert('você está inscrito. Confia :)')
    return alert
}

