import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultLayout from '~/layouts/DefaultLayout';
import logo from './logo.png';

import { publicRoutes } from './routes';

function App() {
    console.log(publicRoutes)
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
