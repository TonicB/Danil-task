import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
import { store } from '../storeRedax'
import { Provider, useSelector } from 'react-redux';
import Create from '../pages/Create';
import Products from '../pages/Products';
import Cart from '../pages/Cart';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route  path="/create" element={<Create />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    // </Provider>
  )
}

export default AppRouter






















// const AppRouter = () => {
//   const user= store
//   const isAuth = useSelector((state: { isAuth: boolean }) => state.isAuth);
//   console.log(isAuth)
//   return (
//     <Provider store={store}>
//     <Routes>
//       {isAuth && authRoutes.map(({ path, Component }) =>
//         <Route key={path} path={path} element={<Component />} />
//       )}
//       {publicRoutes.map(({ path, Component }) =>
//         <Route key={path} path={path} element={<Component />} />
//       )}
//       <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
//     </Routes>
//     </Provider>
//   )
// }

// export default AppRouter
