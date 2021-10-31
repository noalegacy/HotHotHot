var mydata = JSON.parse(data);

document.addEventListener("DOMContentLoaded", function () {//quand le document est prêt 
    changerTemperature.addEventListener('click', event => {
        inputtemp();
    });
});

function fillHistoriqueList() {
    historique.innerHTML = mydata.map(e => "<li>" + e.date + " Exterieur :" + e.tempExt + " Interieur :" + e.tempInt + "</li>")
}

function inputtemp() {
    const ext = prompt("temperature exterieur?");
    const int = prompt("temperature interieure?");
    let emi = 20;
    let ema = 20;
    let imi = 20;
    let ima = 20;
    changetemp("ex", ext);
    changetemp("in", int);
    if (ext < emi) {
        changetemp("emi", ext);
        emi = ext;
    }
    if (ext > ema) {
        changetemp("ema", ext);
        ema = ext;
    }
    if (int < imi) {
        changetemp("imi", int);
        imi = int;
    }
    if (int > ima) {
        changetemp("ima", int);
        ima = int;
    }
    mydata.push({ "tempExt": ext, "tempInt": int, "date": formatted_date()});
    fillHistoriqueList();
}
function changetemp(pos, temp) {
    switch (pos) {
        case 'emi':
            const extmin = document.querySelector("#tempExtMin")
            extmin.innerHTML = temp + "°C"
            break;
        case 'ema':
            const extmax = document.querySelector("#tempExtMax")
            extmax.innerHTML = temp + "°C"
            break;
        case 'ex':
            const extnow = document.querySelector("#tempExt")
            extnow.innerHTML = temp + "°C"
            if (temp < 0) {
                alert("HOTHOTHOT");
            }
            if (temp > 35) {
                alert("Banquise en vue");
            }
            break;
        case 'imi':
            const intmin = document.querySelector("#tempIntMin")
            intmin.innerHTML = temp + "°C"
            break;
        case 'ima':
            const intmax = document.querySelector("#tempIntMax")
            intmax.innerHTML = temp + "°C"
            break;
        case 'im':
            const intnow = document.querySelector("#tempInt")
            intnow.innerHTML = temp + "°C"
            if (temp > 22) {
                alert("Baissez le chauffage ");
            }
            if (temp > 50) {
                alert("Appelez les pompiers ou arrêtez votre barbecue ");
            }
            if (temp < 12) {
                alert("montez le chauffage ou mettez un gros pull ");
            }
            if (temp < 0) {
                alert("canalisations gelées, appelez SOS plombier - et mettez un bonnet ");
            }
            break;
    }
}
function formatted_date()
{
   var result="";
   var d = new Date();
   result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() + 
             " "+ d.getHours()+":"+d.getMinutes()+":"+
             d.getSeconds();
   return result;
}
