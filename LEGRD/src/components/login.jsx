
const Login = async (username, password) => {
    try {
        const response = await api.post('/auth/login', { username, password });
        const { token } = response.data; 
        localStorage.setItem('token', token);
    } catch (error) {
        console.error("Error al iniciar sesión", error);
    }
};

export default Login;
