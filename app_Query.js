const express = require('express');
const app_Query = express();
const PORT = 3000;
//1) REQ PARAMETERS
app_Query.get(`/prams/:param1/two/:param2`, (req, res,next) =>
{
    //NOT REQUIRED; as NULL params are even accepted
   /* if(!(req.params.param1 && req.params.param1))
    {
        console.log('Provide one and two paramters in the request');
        res.status(400).json(
            {
                Error:'bad request',
                message:'Provide input parameters to add'
            });
        //return;
    }
    else
    {*/ 
        const first = parseInt(req.params.param1);
        const second =parseInt(req.params.param2);
    //  let add = parseInt(first+second);    

        console.log(first+second);//console.log(add) also works
        
        /*res.send(
            'msg :Hello'+ add    );*/ //ERROR : Json not defined
        //res.send('Hello the sum = '+add);//Works without json
        //res.send(`Hello the sum = ${add}`);//Works with tilde not single quote
        //res.status(200).json({msg:'Hello the sum = '+add});//Works with single quote and +
        res.status(200).json({'message':`Hello the sum = ${first+second}`});//${} Works with tilde not single quote
        //`message`- tilde doesnt work whereas ['message':] and [message:] works
        //return;
   // }
    //console.log(req.query);
});
//2)REQ QUERY PARAMETERS
app_Query.get(`/Query`, (req, res,next) =>
{
    if(!(req.query.one && req.query.two && req.query.three))
    {
        console.log('Provide one and two and three query paramters in the request');
        res.status(400).json(
            {
                Error:'bad request',
                message:'Provide Query parameters to add'
            });
        //return;
    }
    else
    {
        console.log(req.query);
        const add = parseInt(req.query.one)+parseInt(req.query.two)+parseInt(req.query.three);
        res.status(200).json({'Query Total':` ${add}`});//${} Works with tilde not single quote
        //`message`- tilde doesnt work whereas ['message':] and [message:] works
        //return; 
    }
});
/*QUERY:
http://127.0.0.1:3000/query?name=&age=&language=&

RESPONSE:
{
    "Error": "bad request",
    "message": "Provide Query parameters to add"
}

QUERY:
http://127.0.0.1:3000/Query?one=1&two=2&three=5

RESPONSE:
1)Console:
Server is up and listening at port = 3000
{ one: '1', two: '2', three: '5' }
2)Postman
{
    "Query Total": " 8"
}
*/
//3)REQ HEADERS
app_Query.get('/Headers',(req,res,next)=>
{
    console.log('req.headers =', req.headers);
    res.status(200).json({'Headers':req.headers});//correct response
                                //`${req.headers}`});//res : headers:[object,object]
}
);
/*QUERY
http://127.0.0.1:3000/Headers

RESONSE:
{
    "Headers": {
        "name": "Thivya",
        "user-agent": "PostmanRuntime/7.29.4",
        "accept": " ",
        "postman-token": "4e32886a-be87-4519-922d-0c1b2448e356",
        "host": "127.0.0.1:3000",
        "accept-encoding": "gzip, deflate, br",
        "connection": "keep-alive"
    }
}*/
//REQ BODY
//CASE 1: JSON
app_Query.use(express.json());//to convert the body part to JSON format else it doesnt appear
app_Query.get('/Body',(req,res,next)=>
{
    console.log('req.body =',req.body);
    res.status(200).json({'BODY':req.body});//not "req.body"
}
);
/*QUERY
http://127.0.0.1:3000/Body
{"HINT":"Firstly put Hint and body content in double quotes then We need to provide the body portion in postman else empty curly braces will appear.Also choose raw,JSON from the above drop down"}

RESPONSE:
1)Console
req.body = {
  HINT: 'We need to provide the body portion in postman else empty curly braces will appear.Also choose raw,JSON from the above drop down'
}
req.body = {
  HINT: 'Firstly put Hint and body content in double quotes then We need to provide the body portion in postman else empty curly braces will appear.Also choose raw,JSON from the above drop down'
}
2)Postman
{
    "BODY": {
        "HINT": "Firstly put Hint and body content in double quotes then We need to provide the body portion in postman else empty curly braces will appear.Also choose raw,JSON from the above drop down"
    }
}*/

//REQ BODY
//CASE 2: TEXT
app_Query.use(express.text());//to convert the body part to JSON format else it doesnt appear
app_Query.get('/BodyText',(req,res,next)=>
{
    console.log('req.body =',req.body);
    res.status(200).json({'BODY':req.body});//not "req.body"
}
);
/*QUERY
http://127.0.0.1:3000/BodyText
"Firstly put Hint and body content in double quotes then We need to provide the body portion in postman else empty curly braces will appear.Also choose raw,TEXT from the above drop down"

RESPONSE:
1)Console
Server is up and listening at port = 3000
req.body = "Firstly put Hint and body content in double quotes then We need to provide the body portion in postman else empty curly braces will appear.Also choose raw,TEXT from the above drop down"
2)Postman
{
    {
    "BODY": "\"Firstly put Hint and body content in double quotes then We need to provide the body portion in postman else empty curly braces will appear.Also choose raw,TEXT from the above drop down\""
    }
}*/


app_Query.listen(PORT,()=>
{console.log("Server is up and listening at port = "+PORT);}
);
