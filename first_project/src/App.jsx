import { useState } from "react";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import Query from "./components/Query";
import Upload from "./components/Upload";

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
      <Upload></Upload>
      <Query></Query>
      {/* <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main> */}
    </>
  );
}

export default App;
