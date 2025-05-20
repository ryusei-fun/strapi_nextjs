import axios from "axios";
import Cookie from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://localhost:1337"

// 新しいユーザを登録
export const registerUser = async (username, email, password) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${API_URL}/auth/local/register`, {
                username,
                email,
                password,
            })
            .then((res) => {
                Cookie.set("token", res.data.jwt, { expires: 7 });
                resolve(res);
                window.location.href = "/";
            })
            .catch((err) => {
                reject(err);
                console.log(err);
            });
    });
}

// ログイン
export const login = async (identifier, password) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${API_URL}/auth/local`, {
                identifier,
                password,
            })
            .then((res) => {
                Cookie.set("token", res.data.jwt, { expires: 7 });
                resolve(res);
                // window.location.href = "/";
            })
            .catch((err) => {
                reject(err);
                console.log(err);
            });
    })
}