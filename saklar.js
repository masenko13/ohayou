function saklar(action, lamp) {
    let toggle =  document.getElementById("default-toggle");


    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (toggle.checked) {
        lampu2.src = "asest/image/lampuhidup.png"
    } else {
        lampu2.src = "asest/image/lampumati.png";
    }

    if(action == "on"){
      if (lamp == "1"){
        lampu1.src = "asest/image/lampuhidup.png";
        }
    if (lamp == "3"){
        lampu3.src = "asest/image/lampuhidup.png";
        }
    }

    if(action == "off"){
        if (lamp == "1"){
            lampu1.src = "asest/image/lampumati.png";
            }
        if (lamp == "3"){
            lampu3.src = "asest/image/lampumati.png";
            }
        }
}