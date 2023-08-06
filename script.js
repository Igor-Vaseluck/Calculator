const input1 = document.getElementById('value1')
const input2 = document.getElementById('value2')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const del = document.getElementById('del')
const pow = document.getElementById('pow')
const sqrt = document.getElementById('sqrt')
const answer = document.getElementById('answer')
const calculate = document.getElementById('calc')

let action = '+'
function actionSign(type){
        if(type === '+'){
            answer.innerHTML = Number(input1.value) + Number(input2.value)
        } else if(type == '-') {
            answer.innerHTML = Number(input1.value) - Number(input2.value)
        } else if(type == '*') {
            answer.innerHTML = Number(input1.value) * Number(input2.value)
        } else if(type == '/') {
            answer.innerHTML = Number(input1.value) / Number(input2.value)
        } else if(type === '**') {
            answer.innerHTML = Math.pow(Number(input1.value), Number(input2.value))
        } else if(type == 'sqrt') {
            answer.innerHTML = Math.sqrt(Number(input1.value)) 
            alert('Квадратный корень первого значения '+Math.sqrt(Number(input1.value)))
        }
} 


plus.onclick = function(){       
    return action = '+'
}

minus.onclick = function(){       
    return action = '-'
}
multiply.onclick = function(){       
    return action = '*'
}
del.onclick = function(){       
    return action = '/'
}
pow.onclick = function(){       
    return action = '**'
}
sqrt.onclick = function(){       
    return action = 'sqrt'
}

calculate.onclick = function(){
    actionSign(action)
}