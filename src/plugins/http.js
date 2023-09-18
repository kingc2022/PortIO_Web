import axios from "axios";
import router from "./router";
import user from './stores/user'

// 实例
let instance = axios.create({
    baseURL: 'https://muhanfrp.cn/api',
    timeout: 10000,
});

instance.interceptors.request.use(
    (config) => {
        if (config.headers === undefined) {
            config.headers = {};
        }

        config.headers['Accept'] = 'application/json'
        config.headers['Authorization'] = 'Bearer ' + user.state.token

        return Promise.resolve(config)
    },
    (error) => {
        console.error(error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return Promise.resolve(res);
    },
    (error) => {
        console.error("axios error", error);

        let data = [];

        if (error.response.data.data) {
            data = error.response.data.data;
        }

        if (error.response.data.message) {
            data = error.response.data.message;
        }

        if (error.response.data.error) {
            data = error.response.data.error.message;
        }

        if (error.response.status === 429) {
            alert("请求次数过多");
        } else if (error.response.status === 401) {
            router.push({name: "login"});
        } else if (error.response.status === 404) {
            router.push({name: "index"});
        } else {
            if (data.length !== 0) {
                alert(data);
            }
        }

        return Promise.reject(error);
    }
);

export default instance;
