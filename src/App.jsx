import { useState } from "react";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModelIsVisible] = useState(false);
  function showModalHandler() {
    setModelIsVisible(true);
  }
  function hideModalHandler() {
    setModelIsVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
