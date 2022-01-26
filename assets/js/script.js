const countdown = () => {
    const countDate = new Date('June 27, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //calcular tempo
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calcular gap entre datas
    const textDay = Math.floor (gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // inserir cálculos nas divs
    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;
};

// Se a função apenas for chamada 'countdown()' a contagem só continua se a página for
// recarregada, para corrigir esse problema vamos usar o setInterval()

setInterval(countdown, 1000);