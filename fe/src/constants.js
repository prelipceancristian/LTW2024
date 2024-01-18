const host = "http://localhost:5009";
export const API = `${host}/api`;
export const FileAPI = `${API}/files`;
export const LoginURL = `${host}/login`;
export const RegisterURL = `${host}/register`;
export const GetUserNotesURL = `${host}/`

export const countLines = (inputString) => {
    if (!inputString.trim()) {
        return 0;
    }

    const lines = inputString.split(/\r\n|\r|\n/);
    return lines.length;
}

export const AddNotePage = 0;
export const CheckNotePage = 1;
export const SeeAllNotesPage = 2;
export const LoginPage = 3;
export const RegisterPage = 4;