import Sidebar from "./components/sidebar/Sidebar";
import Filters from "./components/filters/Filter";
import Wrapper from "./components/wrapper/Wrapper";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Wrapper />
      <Filters />
    </div>
  );
}

export default App;
