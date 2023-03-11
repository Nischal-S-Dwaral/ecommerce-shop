import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDc0YjcwMzliZTAxOGIyMjg3N2M2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODE5OTcyNiwiZXhwIjoxNjc4NDU4OTI2fQ.X_UFsuuX4zqqd6UEbZDiTlZ6X74h_pRvN7qr9ogUEck";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    }
});