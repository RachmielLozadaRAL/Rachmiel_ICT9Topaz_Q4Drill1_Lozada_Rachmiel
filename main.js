// Electricity Consumption Classifier
function kWh_classifier() {
    let consumption = Number(document.getElementById('kWh').value);
    let classification = '';

    if (consumption >= 0 && consumption <= 100) {
        window.alert('Low Consumption');
    } else if (consumption > 100 && consumption <= 200) {
        window.alert('Medium Consumption');
    } else if (consumption > 200) {
        window.alert('High Consumption');
    } else {
        window.alert('Invalid Input');
    }
}