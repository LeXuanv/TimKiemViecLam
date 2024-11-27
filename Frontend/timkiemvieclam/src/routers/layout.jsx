import React from "react";
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import Login from "../pages/Login/login";
import { PATH_PAGE } from "../utils/constant";
import SignIn from "../pages/SignIn/signin";
import CV from "../pages/CV/cv";
import DsCongTy from "../pages/DSCongTy/dscongty";
import DsCongViec from "../pages/DSCongViec/dscongviec";
import DtCongViec from "../pages/DTCongViec/dtcongviec";
import QlBaiDang from "../pages/QLBaiDang/qlbaidang";
import QlNguoiDung from "../pages/QLNguoiDung/qlnguoidung";
import ChiTietCongViec from "../pages/DSCongViec/ChitietCongviec/chitietcongviec";
import ChiTietCongty from "../pages/DSCongTy/thongtincongty/thongtinchitiet";
import DangBai from "../pages/QLBaiDang/baidang/dangbai";
import Profile from "../pages/Profile/profile";
import Protected from "./protected";
import { isAuthen } from "./isAuthen";

const router =  createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<DsCongViec />} />
                <Route path={PATH_PAGE.chitietcongviec} element={<ChiTietCongViec />}>
            </Route>
            {/* <Route path={PATH_PAGE.dscongty} element={<DsCongTy />} /> */}
            <Route path={PATH_PAGE.dscongty} element={<DsCongTy />} />
                <Route path={PATH_PAGE.chitietcongty} element={<ChiTietCongty/>}>
            </Route>
            {/* <Route path={`${PATH_PAGE.dscongty}${PATH_PAGE.chitietcongty}`} element={<ChiTietCongty/>} /> */}
            <Route element={<Protected />}>
                <Route path={PATH_PAGE.cv} element={<CV />} />
                <Route path={PATH_PAGE.dtcongviec} element={<DtCongViec />} />
                <Route path={PATH_PAGE.qlbaidang} element={<QlBaiDang />} />
                <Route path={PATH_PAGE.dangbai} element={<DangBai />} />
                <Route path={PATH_PAGE.qlnguoidung} element={<QlNguoiDung />} />
                <Route path={PATH_PAGE.profile} element={<Profile />} />

            </Route>
            <Route loader={async () => await isAuthen()}>
                <Route path={PATH_PAGE.login} element={<Login />} />
                <Route path={PATH_PAGE.singin} element={<SignIn />} />
            </Route>
            <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
    )
)

const Layout = () => {
    return <RouterProvider router={router} />
}

export default Layout;