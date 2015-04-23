var table;
(function () {
    table = document.getElementsByClassName('demo')[0];
    doInject();

})();

function doInject() {
    var isDiv = document.getElementById('injected');
    if (isDiv) {
        return;
    }
    var div = document.createElement('div');
    div.setAttribute('id', 'injected');
    document.body.appendChild(div);
    startGetPc();
    setInterval(function () {
        startGetPc();
    }, 4500);
}


function startGetPc() {
    getLianxiang();
    doGet(getLianxiang2, 500);
    doGet(getLianxiang3, 1500);
    doGet(getLianxiang4, 2000);
    doGet(getLianxiang5, 2500);
    doGet(getLianxiang6, 3000);
    doGet(getLianxiang7, 3500);
    doGet(getLianxiang8, 4000);
    doGet(getLianxiang9, 4500);
}
function doGet(func, times) {
    setTimeout(function () {
        func();
    }, times);
}

function getMacMini1() {
    try {
        var input = table.querySelectorAll('tbody tr')[1].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('m1 waiting')
        input.click();
    } catch (e) {
        console.log('m1 error')
    }
}

function getMacMini2() {
    try {
        var input = table.querySelectorAll('tbody tr')[8].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('m2 waiting')
        input.click();
    } catch (e) {
        console.log('m2 error')
    }

}

function getMacMini3() {
    try {
        var input = table.querySelectorAll('tbody tr')[2].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('m3 waiting')
        input.click();
    } catch (e) {
        console.log('m3 error')
    }

}

function getMacMini4() {
    try {
        var input = table.querySelectorAll('tbody tr')[3].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('m4 waiting')
        input.click();
    } catch (e) {
        console.log('m4 error')
    }
}

function getMacMini5() {
    try {
        var input = table.querySelectorAll('tbody tr')[4].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('m5 waiting')
        input.click();
    } catch (e) {
        console.log('m5 error')
    }

}

function getMacMini6() {
    try {
        var input = table.querySelectorAll('tbody tr')[6].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('m6 waiting')
        input.click();
    } catch (e) {
        console.log('m6 error')
    }

}

function getLianxiang() {
    try {
        var input = table.querySelectorAll('tbody tr')[34].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('liangxiang waiting')
        input.click();
    } catch (e) {
        console.log('liangxiang error')
    }

}

function getLianxiang2() {
    try {
        var input = table.querySelectorAll('tbody tr')[74].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('Lianxiang2 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang2 error')
    }

}

function getLianxiang3() {
    try {
        var input = table.querySelectorAll('tbody tr')[69].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('Lianxiang3 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang3 error')
    }
}

function getLianxiang4() {
    try {
        var input = table.querySelectorAll('tbody tr')[68].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('Lianxiang4 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang4 error')
    }
}

function getLianxiang5() {
    try {
        var input = table.querySelectorAll('tbody tr')[67].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('Lianxiang5 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang5 error')
    }
}

function getLianxiang6() {
    try {
        var input = table.querySelectorAll('tbody tr')[62].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('Lianxiang6 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang6 error')
    }
}

function getLianxiang7() {
    try {
        var input = table.querySelectorAll('tbody tr')[56].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('Lianxiang7 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang7 error')
    }
}

function getLianxiang8() {
    try {
        var input = table.querySelectorAll('tbody tr')[66].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('Lianxiang8 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang8 error')
    }
}

function getLianxiang9() {
    try {
        var input = table.querySelectorAll('tbody tr')[65].querySelectorAll('td')[7].querySelectorAll('input')[0];
        console.log('Lianxiang9 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang9 error')
    }
}