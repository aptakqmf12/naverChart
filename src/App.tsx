import styled from "styled-components";
//components
import Inputs from "./components/Inputs";
import Chart from "./components/Chart";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Inputs />
      <Chart />
    </Wrapper>
  );
}

export default App;
