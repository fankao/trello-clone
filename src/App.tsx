import React from 'react';
import AddNewItem from "./AddNewItem";
import Column from "./Column";
import { addList } from "./state/action";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";

function App() {
  const { lists, dispatch } = useAppState();
  return (
    <AppContainer>
      {
        lists.map(item => (
          <Column id={item.id} text={item.text} key={item.id} />))
      }
      <AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch(addList(text))} />
    </AppContainer >
  );
}
export default App;
