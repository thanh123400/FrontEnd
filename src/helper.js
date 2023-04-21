// TODO: MUST HAVE, ADD THIS TO YOUR JS DIR
export const host = `http://127.0.0.1:8000`
export function checkAuth() {
    if (getCookie("sessionId") != "" && getCookie("username") != "") {
        let url = host + `/login/auth/`;
        let data = {
            sessionId: getCookie("sessionId"),
            username: getCookie("username")
        }

        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                if (ifLogin(data.message)) {
                    return data
                }
            }).catch((e) => {
                console.log(e)
                // Hiển thị lỗi
                return 0
            })
    }
    return new Promise((resolve) => {
        resolve(0)
    });
}

export function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function ifLogin(message) {
    if (message == 'Already logged in') {
        return true;
    }
    return false;
}

export function fetchDataPOST(url, data) {
    return new Promise((resolve, reject) => {
        function fetchNow(resolve, url, data) {
            const response = fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify(data)
            });
            resolve(response);
        }
        fetchNow(resolve, url, data);
    })
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((e) => {
            console.log(e)
            // Hiển thị lỗi
        })
}

export function fetchDataGET(url) {
    return new Promise((resolve) => {
        function fetchNow(resolve, url) {
            const response = fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                },
                redirect: 'follow'
            });
            resolve(response);
        }
        fetchNow(resolve, url)
    })
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((e) => {
            console.log(e)
            // Hiển thị lỗi
        })
}