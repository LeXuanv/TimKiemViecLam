import React from "react";
// import {
//   createBrowserRouter,
//   Route,
//   createRoutesFromElements,
//   RouterProvider,
//   Routes,
// } from "react-router-dom";
import Login from "../pages/Login/login";
import { PATH_PAGE } from "../utils/constant";
import SignIn from "../pages/SignIn/signin";
import CV from "../pages/CV/cv";
import DsCongTy from "../pages/DSCongTy/dscongty";
import DsCongViec from "../pages/DSCongViec/dscongviec";
import DtCongViec from "../pages/DTCongViec/dtcongviec";
import QlBaiDang from "../pages/QLBaiDang/qlbaidang";
import QlNguoiDung from "../pages/QLNguoiDung/qlnguoidung";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../pages/mainLayout";

// const router =  createBrowserRouter(
//     createRoutesFromElements(
//         <>
//             <Route index element={<DsCongViec />} />
//             <Route path={PATH_PAGE.login} element={<Login />} />
//             <Route path={PATH_PAGE.singin} element={<SignIn />} />
//             <Route path={PATH_PAGE.dscongty} element={<DsCongTy />} />
//             <Route path={PATH_PAGE.cv} element={<CV />} />
//             <Route path={PATH_PAGE.dtcongviec} element={<DtCongViec />} />
//             <Route path={PATH_PAGE.qlbaidang} element={<QlBaiDang />} />
//             <Route path={PATH_PAGE.qlnguoidung} element={<QlNguoiDung />} />
//         </>
//     )
// )

// const Layout = () => {
//     return <RouterProvider router={router} />
// }

const Layout = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<DsCongViec />} />
                <Route path={PATH_PAGE.dscongty} element={<DsCongTy />} />
                <Route path={PATH_PAGE.cv} element={<CV />} />
                <Route path={PATH_PAGE.dtcongviec} element={<DtCongViec />} />
                <Route path={PATH_PAGE.qlbaidang} element={<QlBaiDang />} />
                <Route path={PATH_PAGE.qlnguoidung} element={<QlNguoiDung />} />
                <Route path={PATH_PAGE.login} element={<Login />} />
                <Route path={PATH_PAGE.singin} element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout;