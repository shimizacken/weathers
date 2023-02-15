import {BrowserRouter} from 'react-router-dom';
import {MainLayout} from './components/pages/MainLayout.page';

function App() {
    return (
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    );
}

export default App;
