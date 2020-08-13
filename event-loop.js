
// 异步任务：宏任务（setTimeout、setInterval）和微任务（promise.then(function(){   })）
// 任务队列： 宏任务队列和微任务队列
// <script></script> script端是js的第一个宏任务

// 记住两点： 
// 1.如果宏任务和微任务是同辈关系（没有嵌套），这种情况，微任务先执行
// 2.如果宏任务内部产生了多个微任务，只有等当前宏任务中的所有的微任务执行完毕之后，在执行下一个宏任务。

setTimeout(()=>{    // 宏任务
    console.log(2);
    Promise.resolve().then(()=>{
        console.log(3); // 微任务
    });
});

new Promise((resolve,reject)=>{  
    // Promise构造函数中的代码是同步任务
    resolve(5);
}).then((data)=>{
    // 微任务
    console.log(data);

    Promise.resolve().then(()=>{
        // 微任务
        console.log(6);
    }).then(()=>{
        // 微任务
        console.log(7);

        setTimeout(()=>{ 
            // 宏任务
            console.log(8);
        },0)
    })
})

setTimeout(()=>{   
    // 宏任务
    console.log(9);
})

// 结果：  5 6 7 2 3 9 8