
const Login = async (username, password) => {
    try {
        const response = await api.post('/auth/login', { username, password });
        const { token } = response.data; 
        localStorage.setItem('token', token);
    } catch (error) {
        console.error("Error al iniciar sesi�n", error);
    }
};

export default Login;
