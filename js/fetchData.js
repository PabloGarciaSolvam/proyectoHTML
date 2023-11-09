const CLASES = {
    'len': './html/ejercicios/lenguaje_marcas'
}

const fetchData = (num, clase) => {
    fetch(CLASES[clase] + `/Ejer${num}.html`)
    .then((res) => res.text())
    .then((text) => {
      console.log(text);
     })
    .catch((e) => console.error(e));
}

const checkSiEjercicio = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const data = urlParams.get('ejer');
    const clase = urlParams.get('clase');
    if (data != null && clase != null) {
        await fetchData(data, clase);
    }
}

checkSiEjercicio();