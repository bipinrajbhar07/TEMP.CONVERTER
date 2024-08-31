function temperatureConverter() {
    let tempreture = document.getElementById("temperature").value;

    document.getElementById("answer").innerHTML = tempreture * (9 / 5) + 32;

    return false;
}