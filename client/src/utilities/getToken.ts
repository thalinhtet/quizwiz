export default function getToken() {
    return localStorage.getItem('jwt') || sessionStorage.getItem('jwt')
}