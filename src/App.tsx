import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './stores';
import MainPage from './pages/MainPage';
import QuestionDetails from './pages/QuestionDetails';
import Header from './layout/Header';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/question/:id' element={<QuestionDetails />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
