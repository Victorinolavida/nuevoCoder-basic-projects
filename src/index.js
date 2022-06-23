const $horas = document.querySelector('#horas');
const $minutos = document.querySelector('#minutos');
const $segundos = document.querySelector('#segundos');

const $btnHorasSumar = document.querySelector('#btn-sumar-horas');
const $btnMinutosSumar = document.querySelector('#btn-sumar-minutos');
const $btnMegundosSumar = document.querySelector('#btn-sumar-segundos');


const $btnHorasRestar = document.querySelector('#btn-restar-horas');
const $btnMinutosRestar = document.querySelector('#btn-restar-minutos');
const $btnMegundosRestar = document.querySelector('#btn-restar-segundos');

const $btnPause = document.querySelector('#btn-pausa')
const $btnDetener = document.querySelector('#btn-detener')

const $buttons = document.querySelector("#buttons")
const $buttonsFunctions = document.querySelector('.container-temporizador')

const initTemporizador = () => {
  let start = false;
  let temporizador;
  let horas = +$horas.textContent
  let minutos = +$minutos.textContent
  let segundos = +$segundos.textContent

  $buttonsFunctions.addEventListener('click', ({ target }) => {
    // if (target == $btnHorasSumar) {
    //   $horas.innerText = horas++
    // }
    switch (target) {
      case $btnHorasSumar:
        horas = horas + 1
        $horas.innerText = horas
        console.log(horas)
        return
      case $btnHorasRestar:
        horas = Math.max(horas - 1, 0)
        return $horas.innerText = horas
      case $btnMinutosSumar:
        minutos = minutos + 1
        if (minutos == 60) {
          horas = horas + 1
          $horas.innerText = horas
          minutos = 0
        }
        return $minutos.innerText = minutos

      case $btnMinutosRestar:
        minutos = Math.max(minutos - 1, 0);
        $minutos.innerHTML = minutos
        return;
      case $btnMegundosSumar:
        segundos = segundos + 1;
        if (segundos === 60) {
          minutos = minutos + 1;
          $minutos.innerHTML = minutos;
          segundos = 0
        }
        return $segundos.innerText = segundos

      case $btnMegundosRestar:
        segundos = Math.max(segundos - 1, 0);
        return $segundos.innerText = segundos;

      default:

        return null
    }
  })

  $buttons.addEventListener('click', (element) => {

    if (element.target == $btnPause) start = !start
    if (element.target == $btnDetener) {
      start = false;
      clearInterval(temporizador)
      //todo reiniciar el temporizador a 0
      $horas.innerText = horas = 0
      $minutos.innerText = minutos = 0
      $segundos.innerText = segundos = 0
    }



    if (start) {
      console.log(start, 'if')
      temporizador = setInterval(() => {

        if (segundos !== 0) {
          segundos -= 1;
          $segundos.innerText = segundos

        } else {
          //los segundos son 0

          if (minutos !== 0) {

            segundos = 59;
            $segundos.innerText = segundos
            minutos -= 1
            $minutos.innerText = minutos

          } else {
            //los minutos son 0
            if (horas !== 0) {
              horas -= 1;
              $horas.innerText = horas
              minutos = 59;
              $minutos.innerText = minutos
            }
          }
        }




        if (segundos === 0 && minutos == 0 && horas === 0) {
          clearInterval(temporizador)
          alert('Temporizador finalizo')

        }

      }, 1000)
    } else {
      clearInterval(temporizador)
    }

  })



}

// initTemporizador()

const anotherTemporizador = () => {
  $btnDetener.disabled = true;

  let start = false;
  let temporizador;
  let horas = +$horas.value
  let minutos = +$minutos.value
  let segundos = +$segundos.value
  console.log(segundos, minutos, horas)
  if (segundos === 0 && minutos === 0 && horas === 0) {
    $btnPause.disabled = true;
    $btnPause.classList.add('disable')
  }
  const arr = [$minutos, $horas, $segundos];

  $buttonsFunctions.addEventListener('click', ({ target }) => {
    // if (target == $btnHorasSumar) {
    //   $horas.innerText = horas++
    // }
    switch (target) {
      case $btnHorasSumar:
        $btnPause.disabled = false;
        $btnPause.classList.remove('disable')
        horas = horas + 1
        return $horas.value = horas

      case $btnHorasRestar:
        $btnPause.disabled = false;
        $btnPause.classList.remove('disable')
        horas = Math.max(horas - 1, 0)
        return $horas.value = horas
      case $btnMinutosSumar:
        $btnPause.disabled = false;
        $btnPause.classList.remove('disable')
        minutos = minutos + 1
        if (minutos == 60) {
          horas = horas + 1
          $horas.value = horas
          minutos = 0
        }
        return $minutos.value = minutos

      case $btnMinutosRestar:
        $btnPause.disabled = false;
        $btnPause.classList.remove('disable')
        minutos = Math.max(minutos - 1, 0);
        $minutos.value = minutos
        return;
      case $btnMegundosSumar:
        $btnPause.disabled = false;
        $btnPause.classList.remove('disable')
        segundos = segundos + 1;
        if (segundos === 60) {
          minutos = minutos + 1;
          $minutos.value = minutos;
          segundos = 0
        }
        return $segundos.value = segundos

      case $btnMegundosRestar:
        $btnPause.disabled = false;
        $btnPause.classList.add('disable')
        segundos = Math.max(segundos - 1, 0);
        return $segundos.value = segundos;

      default:
        return null
    }
  })


  arr.forEach((ele, i) => ele.addEventListener('blur', function (e) {
    horas = +$horas.value
    minutos = +$minutos.value
    segundos = +$segundos.value
    minutos = minutos > 60 ? 60 : minutos
    segundos = segundos > 60 ? 60 : minutos
    if (!segundos) {
      $segundos.value = 0
    }
    if (!minutos) {
      $segundos.value = 0
    }
    if (!horas) {
      $segundos.value = 0
    }
  }))



  $buttons.addEventListener('click', (element) => {

    if (element.target == $btnPause) {

      start = !start;
      $btnDetener.classList.remove('disable')
      $btnDetener.disabled = false;

    }
    if (element.target == $btnDetener) {
      start = false;
      clearInterval(temporizador)
      //todo reiniciar el temporizador a 0
      $horas.value = horas = 0
      $minutos.value = minutos = 0
      $segundos.value = segundos = 0
    }



    if (start) {
      console.log(start, 'if')
      temporizador = setInterval(() => {

        if (segundos !== 0) {
          segundos -= 1;
          $segundos.value = segundos

        } else {
          //los segundos son 0

          if (minutos !== 0) {

            segundos = 59;
            $segundos.value = segundos
            minutos -= 1
            $minutos.value = minutos

          } else {
            //los minutos son 0
            if (horas !== 0) {
              horas -= 1;
              $horas.value = horas
              minutos = 59;
              $minutos.value = minutos
            }
          }
        }


        console.log(`${horas}:${minutos}:${segundos}`)

        if (segundos === 0 && minutos == 0 && horas === 0) {
          clearInterval(temporizador)
          alert('Temporizador finalizo')

        }

      }, 1000)
    } else {
      clearInterval(temporizador)
    }

  })



}

anotherTemporizador()