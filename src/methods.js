var methods = {
    postData(data) {
        return new Promise(
            (resolve, reject) => {
                var formData = new FormData();
                for (var [key, value] of Object.entries(data)) formData.append(key, value);
                fetch("http://localhost/titan_dev/src/inc/php_request.php", {
                    method: "POST",
                    body: formData
                })
                    .then(res => {
                        if (!res.ok) reject(res)
                        return res.text();
                    })
                    .then(resp => {
                        // alert(resp)
                        if (resp.split("|")[0] == "0")
                            resolve(resp);
                        else
                        reject(resp);

                    })
                    .catch(error => reject(error))
            }
        )

    }
}

export default methods;