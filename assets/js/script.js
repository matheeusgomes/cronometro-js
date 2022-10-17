let hora = 0;
        let min = 0;
        let sec = 0;
        let ms = 0;

        let tempo = 10;
        let cron;

        function iniciar() {
            cron = setInterval(timer, tempo);
        }

        function parar() {
            clearInterval(cron);
        }

        function limpar() {
            clearInterval(cron);
            hora = 00;
            min = 00;
            sec = 00;
            ms = 000;

            let hora_limpa = hora + '0:' + min + '0:' + sec + '0:' + ms + '00';
            document.querySelector('.counter').innerHTML = hora_limpa
        }

        function timer() {
            ms++;

            if (ms == 100) {
                ms = 0;
                sec++;
            }
            if (sec == 60) {
                sec = 0;
                min++;
            }
            if (min == 60) {
                min = 0;
                hora++;
            }
            if (hora == 12) {
                hora = 1;
                hora++;
            }

            let format = (hora < 10 ? '0' + hora : hora) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' +
                sec : sec) + ':' + ((ms < 10 ? '00' + ms : ms) && (ms < 100 ? '0' + ms : ms));
            document.querySelector('.counter').innerHTML = format;
        }
