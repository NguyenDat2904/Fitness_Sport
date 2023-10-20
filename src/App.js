import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';
import { AppProvider } from '../src/hook/context/AppContext';
import Register from '../src/pages/Register/Form/Form';
import Signin from './pages/Signin/Signin';
import ForgotPassWord from './pages/ForgorPassword/ForgotPassWord';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
function App() {
    return (
        <AppProvider>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                          <Route path='/register' element={<Register/>}></Route>
                         <Route path='/signin' element={<Signin/>}></Route>
                         <Route path='/forgot' element={<ForgotPassWord/>}></Route>
                         <Route path='/verify' element={<VerifyEmail/>}></Route>
                        
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;
