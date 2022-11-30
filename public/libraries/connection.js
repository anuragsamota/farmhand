const getRequest = async (endpoint)=>{
    const res = await fetch(endpoint,{
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response=>{
        return response.json();
    }).then(data=>{
        return data;
    });
    return res;
};



const postRequest = async (endpoint,data={})=>{
    const res = await fetch(endpoint,{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response=>{
        return response.json();
    }).then(data=>{
        return data;
    });
    return res;
};




const putRequest = async (endpoint,data={})=>{
    const res = await fetch(endpoint,{
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response=>{
        return response.json();
    }).then(data=>{
        return data;
    });
    return res;
};



const deleteRequest = async (endpoint)=>{
    const res = await fetch(endpoint,{
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response=>{
        return response.json();
    }).then(data=>{
        return data;
    });
    return res;
};