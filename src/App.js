import React from 'react';


function App() {

  const [flag, setFlag] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const onClickMinus = () => {
    setCount(count - 1);
    if (flag === true) {
      return;
    }else if (count <= -100) {
      document.body.style.backgroundColor = 'rgb(255, 255, 255)';
      document.body.style.color = 'rgb(0, 0, 0)';
      setFlag(!flag);
    }
  };
  const onClickPlus = () => {
    setCount(count + 1);
    if (flag === false) {
      return;
    } else if (count >= 100) {
      document.body.style.backgroundColor = 'rgb(36, 36, 36)';
      document.body.style.color = 'rgb(255, 255, 255)';
      setFlag(!flag);
    }
  };

  return (
    <div className="center">
      <h1>{count}</h1>
      <div>
        <button onClick={onClickMinus} className="minus">
          -
        </button>
        <button onClick={onClickPlus} className="plus">
          +
        </button>
      </div>
      <p>{flag ? 'Ну давай попробуй набить больше 100 :)' : 'Хм а теперь -100 ? :)'}</p>
    </div>
  );
}

export default App;
