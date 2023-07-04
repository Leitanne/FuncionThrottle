const throttle = (delay, functionPromised) => {
    var check = true;
    return function (...args) {
        if (check) {
            check = false;
            functionPromised(...args);
            setTimeout(() => {
                check = true;
            }, delay);
        }
    };
};

const respuesta = document.getElementById('response');

document.getElementById('invocar')?.addEventListener('click', throttle(1000, () => {
        respuesta.innerHTML += 'Soy el mensaje invocado desde el Throttle ';
    }), false)

