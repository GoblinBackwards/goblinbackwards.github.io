const RF_VALUES = new Map();

RF_VALUES.set("AM", 1/20);
RF_VALUES.set("RF", 20/20);
RF_VALUES.set("J", 125/20);
RF_VALUES.set("EU", 5/20);
RF_VALUES.set("gJ", 32/20);
RF_VALUES.set("MJ", 2/20);
RF_VALUES.set("AE", 1/2);
RF_VALUES.set("W", 11256/2);
RF_VALUES.set("uI", 10/20);

setInterval(convert, 100);

function convert() {
    let input_value = document.getElementById("input_val").value;
    let input_type = document.getElementById("input_type").value;
    let output_type = document.getElementById("output_type").value;

    let rf = to_rf(input_value, input_type);
    let output_value = from_rf(rf, output_type);
    document.getElementById("output_val").value = output_value;
}

function to_rf(value, type) {
    return value / RF_VALUES.get(type);
}

function from_rf(value, type) {
    return value * RF_VALUES.get(type);
}