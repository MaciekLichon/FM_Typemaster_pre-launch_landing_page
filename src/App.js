import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <main className="overflow-hidden">
            <Container>
                <Header/>
                <Hero/>
                <About />
                <List />
                <Footer />
            </Container>
        </main>
    );
};

export default App;
