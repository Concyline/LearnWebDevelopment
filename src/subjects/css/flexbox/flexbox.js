
function displaySelected() {
    var mySelect = document.getElementById('displaySelect');

    mySelect.addEventListener('change', function () {
        var container = document.getElementById('container');
        container.style.display = mySelect.value;
    });
}

function directionSelect() {
    var mySelect = document.getElementById('directionSelect');

    mySelect.addEventListener('change', function () {
        var container = document.getElementById('container');
        container.style.flexDirection = mySelect.value;
    });
}

function wrapSelect() {
    var mySelect = document.getElementById('wrapSelect');

    mySelect.addEventListener('change', function () {
        var container = document.getElementById('container');
        container.style.flexWrap = mySelect.value;
    });
}

function justifySelect() {
    var mySelect = document.getElementById('justifySelect');

    mySelect.addEventListener('change', function () {
        var container = document.getElementById('container');
        container.style.justifyContent = mySelect.value;
    });
}

function alignSelect() {
    var mySelect = document.getElementById('alignSelect');

    mySelect.addEventListener('change', function () {
        var container = document.getElementById('container');
        container.style.alignItems = mySelect.value;
    });
}

function alignContentSelect() {
    var mySelect = document.getElementById('alignContentSelect');

    mySelect.addEventListener('change', function () {
        var container = document.getElementById('container');
        container.style.alignContent = mySelect.value;
    });
}
