function ButtonField({
  inputNumber,
  backspace,
  allCancel,
  switchMinus,
  simpleOperations,
  sqrt,
  equals,
}) {
  return (
    <div className="btns-field">
      <div className="btns-operations">
        <button className="btns" onClick={() => simpleOperations('+')}>
          +
        </button>
        <button className="btns" onClick={() => simpleOperations('-')}>
          -
        </button>
        <button className="btns" onClick={() => simpleOperations('*')}>
          ×
        </button>
        <button className="btns" onClick={() => simpleOperations('/')}>
          ÷
        </button>
        <button className="btns btn-equals" onClick={() => equals()}>
          =
        </button>
      </div>
      <div>
        <button className="btns" onClick={() => backspace()}>
          ←
        </button>
        <button className="btns" onClick={() => allCancel()}>
          AC
        </button>
        <button className="btns" onClick={() => sqrt()}>
          √
        </button>
        <button className="btns btn-num" onClick={() => inputNumber('7')}>
          7
        </button>
        <button className="btns btn-num" onClick={() => inputNumber('8')}>
          8
        </button>
        <button className="btns btn-num" onClick={() => inputNumber('9')}>
          9
        </button>
        <button className="btns btn-num" onClick={() => inputNumber('4')}>
          4
        </button>
        <button className="btns btn-num" onClick={() => inputNumber('5')}>
          5
        </button>
        <button className="btns btn-num" onClick={() => inputNumber('6')}>
          6
        </button>
        <button className="btns btn-num" onClick={() => inputNumber('1')}>
          1
        </button>
        <button className="btns btn-num" onClick={() => inputNumber('2')}>
          2
        </button>
        <button className="btns btn-num" onClick={() => inputNumber('3')}>
          3
        </button>
        <button className="btns btn-num" onClick={() => switchMinus()}>
          ±
        </button>
        <button className="btns btn-num" onClick={() => inputNumber('0')}>
          0
        </button>
        <button className="btns btn-num" onClick={() => inputNumber('.')}>
          .
        </button>
      </div>
    </div>
  )
}

export default ButtonField
