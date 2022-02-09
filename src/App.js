import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TabHolder from "./components/TabHolder/TabHolder";
function App() {
  return (
    <div>
      <Header />
      <ErrorBoundary>
      <TabHolder/> 
      </ErrorBoundary>
      <Footer/>
    </div>
  );
}
export default App;
