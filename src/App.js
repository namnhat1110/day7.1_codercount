import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar'

function App() {
  const countState = useSelector((state) => state.count);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <NavigationBar />
      <Container className="pt-2">
        <Row>
          <Col className="bg-success p-3" >
            <h1>{countState.count}</h1>
            <input
              onChange={(e) => dispatch({ type: "CHANGE_COLOR", payload: e.target.value })}
            ></input>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
          </Col>
        </Row>
        <Row>
          <Col>
            {Array.from(Array(countState.count)).map((c, idx) => {
              const boxColor = countState.indexColors[idx] || countState.defaultColor;
              return (
                <div
                  className="d-flex justify-content-around my-2 p-2"
                  style={{ backgroundColor: boxColor }}
                  key={idx}>

                  <h1>Box {idx + 1}</h1>

                  <input
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_BOX_COLOR",
                        payload: { color: e.target.value, index: idx, email: userState.email, },
                      })
                    }></input>


                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default App;
