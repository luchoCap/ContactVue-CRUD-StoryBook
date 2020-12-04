class contactProvider{

    createContact(name,phone,state){
        return new Promise((resolve,reject) => {
            axios.post()
        })
    }
}

axios.get(process.env.REACT_APP_BACK_URL+'/api/users/avatar',
        {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.error(error);
                reject(error)
                //@TODO Implementar manejo de error
            })