import React from 'react'

import Header from './components/Header'
import ButtonField from './components/ButtonField'
import Output from './components/Output'
import './App.css'

const operationNums = []

const App = () => {
  const [outputValue, setOutputValue] = React.useState('0')
  const [history, setHistory] = React.useState('')
  const [operation, setOperation] = React.useState('')

  const inputNumber = (num) => {
    const [number1] = operationNums
    if (num === '.' && outputValue.includes('.')) return
    if (num === 0 && outputValue === 0) return
    if (num !== '.' && outputValue === '0') return setOutputValue(num)
    if (num === '.' && outputValue === '0') return setOutputValue('0' + num)
    if (num !== 0 && outputValue === 0 && num !== '.')
      return setOutputValue(num)
    if (outputValue.length >= 15) return
    if (outputValue === number1) {
      return setOutputValue(num)
    }
    return setOutputValue(outputValue + num)
  }

  const switchMinus = () => {
    if (outputValue === '0') return
    if (!outputValue.includes('-')) return setOutputValue('-' + outputValue)
    if (outputValue.includes('-'))
      return setOutputValue(outputValue.substring(1))
  }

  const simpleOperations = (operator) => {
    operationNums.push(Number(outputValue))
    const [number1] = operationNums

    setOutputValue(number1)

    setOperation(operator)
    if (operator === '*') return setHistory(`${number1}×`)
    if (operator === '/') return setHistory(`${number1}÷`)

    return setHistory(`${number1}${operator}`)
  }

  const sqrt = () => {
    operationNums.push(Number(outputValue))
    setOutputValue('0')
    setOperation('/')
    const [number1] = operationNums
    setHistory(`√(${number1})`)
    return setOutputValue(Math.sqrt(number1))
  }

  const equals = () => {
    operationNums.push(Number(outputValue))
    const [number1, number2] = operationNums
    if (operation === '+') {
      setHistory(`${String(number1)} + ${String(number2)} =`)
      setOutputValue(number1 + number2)
      return (operationNums.length = 0)
    }
    if (operation === '-') {
      setHistory(`${String(number1)} - ${String(number2)} =`)
      setOutputValue(number1 - number2)
      return (operationNums.length = 0)
    }
    if (operation === '*') {
      setHistory(`${String(number1)} × ${String(number2)} =`)
      setOutputValue(number1 * number2)
      return (operationNums.length = 0)
    }
    if (operation === '/' && number2 !== 0) {
      setHistory(`${String(number1)} ÷ ${String(number2)} =`)
      setOutputValue(number1 / number2)
      return (operationNums.length = 0)
    }
    if (operation === '/' && number2 === 0) {
      setHistory(`${String(number1)} ÷ ${String(number2)}`)
      return setOutputValue('Cannot divide')
    }
  }

  const allCancel = () => {
    setHistory('')
    if (outputValue === '0') return
    operationNums.length = 0
    return setOutputValue('0')
  }

  const backspace = () => {
    if (outputValue.length > 1)
      setOutputValue(outputValue.slice(0, outputValue.length - 1))
    setHistory('')
    if (outputValue.length === 1) setOutputValue('0')
    setHistory('')
  }

  return (
    <div className="App">
      <Header />
      <Output outputValue={outputValue} history={history} />
      <ButtonField
        inputNumber={inputNumber}
        backspace={backspace}
        allCancel={allCancel}
        switchMinus={switchMinus}
        simpleOperations={simpleOperations}
        sqrt={sqrt}
        equals={equals}
      />
    </div>
  )
}

export default App

// так же стейт и функцию для выбора оперции(+, -, x, /), массив для хранение чисел и функцию для кнопки "Равно"
