const apiRequest = async (url, options) => {
    console.log(url);
    console.log(options);
    let errMsg = null;
    try {
        const response = await fetch(url,options);
        console.log(response);
        if(!response.ok) throw new Error('Something went Wrong Reload App Please');
    } catch(Error) {
        errMsg = Error.message;
    }
    
    return errMsg;
}

export default apiRequest;