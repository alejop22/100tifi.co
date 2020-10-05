import router from './routes/index';

window.addEventListener('load',router);//Con esta api del navegador en este caso escuchamos si el navegador ya cargo
window.addEventListener('hashchange', router);//Acá escuchamos cuando el hash cambio