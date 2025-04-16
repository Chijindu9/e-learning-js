import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}