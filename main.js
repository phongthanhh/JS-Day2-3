// Custom Input

let getInputMain = document.querySelectorAll('input');

function validate(input) {
    if (input.value) {
        input.classList.add('fill-bg');
    } else {
        input.classList.remove('fill-bg');
    }
}
getInputMain.forEach((input) => {
    input.oninput = function() {
        validate(input)
    }
})


function showResultTrue(message, result, mess = '', result2 = '', mess2 = '') {
    message.classList.remove('false');
    message.classList.add('true');
    message.innerHTML = `Kết quả : ${mess} <b>${result}</b>  ${mess2} <b>${result2}</b>`;

}

function showResultFalse(message, result, mess = '', result2 = '', mess2 = '') {
    message.classList.remove('true');
    message.classList.add('false');
    message.innerHTML = `Thông báo : ${mess} <b>${result}</b>  ${mess2} <b>${result2}</b>`;
}


// Exercise

// EXE1
function bt1() {
    const getDays = +document.getElementById('exe1-num1').value;
    const getPay = +document.getElementById('exe1-num2').value;
    const errorMessage = document.getElementById('errorMessage')
    if (getDays && getPay) {
        let sum = getDays * getPay;
        sum = sum.toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND'
        });
        showResultTrue(errorMessage, sum, 'Tiền lương: ')
    } else {
        showResultFalse(errorMessage, '', 'Nhập thiếu dữ liệu !')

    }
}

// EXE2

function bt2() {
    let getNum = document.querySelectorAll('.exe2-num');
    const errorMessage2 = document.getElementById('errorMessage2')

    let sum = 0;
    getNum.forEach(num => {
        sum += +num.value
    })
    const TB = sum / getNum.length
    showResultTrue(errorMessage2, TB, 'Trung bình: ')
}

// EXE3
function bt3() {
    const getNum = +document.getElementById('exe3-num1').value;

    const errorMessage3 = document.getElementById('errorMessage3')

    if (getNum) {
        let change = getNum * 23500;
        change = change.toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND'
        });
        showResultTrue(errorMessage3, change)
    } else {
        showResultFalse(errorMessage3, '', 'Nhập USD vào đi má !')
    }

}

// EXE4
function bt4() {
    const errorMessage4 = document.getElementById('errorMessage4')

    const getLength = +document.getElementById('exe4-num1').value;
    const getWidth = +document.getElementById('exe4-num2').value;

    if (getLength && getWidth) {
        const S = getLength * getWidth;
        const C = (getLength + getWidth) / 2;
        showResultTrue(errorMessage4, S, 'Diện tích = ', C, 'Chu vi = ')
    } else {
        showResultFalse(errorMessage4, '', 'Nhập thiếu dữ liệu !')
    }
}

// EXE5
function bt5() {
    const errorMessage5 = document.getElementById('errorMessage5');
    const getNum = +document.getElementById('exe5-num1').value;
    if (getNum) {
        if (getNum > 9 && getNum < 100) {
            let getDV = getNum % 10;
            let getC = parseInt(getNum / 10);
            let sum = getC + getDV;
            showResultTrue(errorMessage5, sum, 'Tổng 2 kí số = ')
        } else {
            showResultFalse(errorMessage5, '', ' Phải là số có 2 chữ số!')
        }
    } else {
        showResultFalse(errorMessage5, '', ' Nhập thiếu dữ liệu!')

    }


}