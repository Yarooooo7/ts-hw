// 1 callback
function fetchData(url,callback) {
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
        const data = {id:1, name:'Sample Data'};
        callback(data);
        console.log(`Data from ${url} .`);
    }, 2000);
    
}

fetchData('https://api.example.com/data', function (data) {
    console.log('Received data:', data);
    return data;
    
})


// 2 Promise
function fetchDataPromise(url) {
    return new Promise((resolve,reject) =>{
        if (!url) {
            reject('Invalid URL');
            return;
        } 
        console.log(`Fetching data from ${url}...`);
        setTimeout(() =>{
        const data = {id :1, name: 'BOB'};
        resolve(`Data from ${url} ${data}`);

            },2000)

    });
}

fetchDataPromise('https://api.example.com/data')
.then(data => {
    console.log(data);
    

    return data;
})
.catch(error => {
    console.error('Error:', error);
});

// 3 async/await
async function fetchDataAsync(url) {
    try{
        const data = await fetchDataPromise(url);
        // console.log('1');
        return data;
    } catch (error) {
        console.error('Error:', error);
    }

}

fetchDataAsync('https://api.example.com/data');
// 如果 Promise 被 resolve，await 表达式会返回 resolve 的值。
// 如果 Promise 被 reject，await 会抛出异常，被 try...catch 捕获。