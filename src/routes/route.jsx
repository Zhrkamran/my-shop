import { Route, Routes } from 'react-router'
import { routes } from './route.constant'

function AppRoutes() {
    return (
        <Routes>
            {
                routes.map(item => (
                    <Route key={item.path} path={item.path} element={item.element} />
                ))
            }
        </Routes>
    )
}

export default AppRoutes