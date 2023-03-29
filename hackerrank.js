
const puppeteer=require('puppeteer');
const email="sharmarishik24@gmail.com";
const pswrd="Rishik100@";
const ansz=require('./answer');
let browseropenpromise=puppeteer.launch({
    headless:false,
    defaultViewreport:null,
    args:["--start-maximized"]
})
browseropenpromise.then(function(browser)
{
    let openbrow=browser.pages();
    return openbrow;
}) .then(function(browpages)
{
    page=browpages[0];
    let newpage=page.goto("https://www.hackerrank.com/auth/login");
    return newpage;
}).then(function(newpage)
{
    let wait=page.waitForSelector("input[type='text']",
    {visible:true}
    )
    return wait;
}).then(function(){
    let emailid=page.type("input[id='input-1']",email, {delay:50});
    return emailid;
}).then(function(){
    let pswrdd=page.type("input[id='input-2']",pswrd, {delay:50});
    return pswrdd;
}).then(function(){
    let keysend=page.keyboard.press("Enter");
    return keysend;
}).then(function()
{
  let alg= WaitandClick('.topic-card a[data-attr1="algorithms"]',page);
  return alg;
}).then(function()
{
    let wup=WaitandClick('input[value="warmup"]',page)
    return wup;
}).then(function()
{
    let wwait=page.waitForTimeout(1000);
    return wwait;
}).then(function()
{
    let nums=page.$$(".content--list_body");
    return nums;
}).then(function(numbs){
    console.log("No of items",numbs.length);
    let questionclicked=quesSolver(page,numbs[0],ansz.answers[0]);
    return questionclicked;
})



function WaitandClick(selector,cpage)
{
return new Promise(function(resolve,reject)
{
    let waittfs=cpage.waitForSelector(selector)
    waittfs.then(function()
    {
        let clickf=cpage.click(selector);
        return clickf;
    }).then(function()
    {
        resolve();
    }).catch(function(err)
    {
        reject();
    })
})
}

function quesSolver(page,ques,answer)
{ 
    return new Promise(function(resolve,reject)
    {
        let questionwillclicked=ques.click();
        questionwillclicked.then(function()
        {
           let textpad=WaitandClick('.monaco-editor.no-user-select.vs',page)
           return textpad;
        }
        ).then(function()
        {
            let checkbox=WaitandClick('.checkbox-input',page)
            return checkbox;
        }).then(function()
        {
            return page.type('.input.text-area',answer,{delay:10})
        }).then(function()
        {
            let ctrlall=page.keyboard.down('Control');
            return ctrlall;
        }).then(function()
        {
            let call=page.keyboard.press('A',{delay:100});
            return call;
        }).then(function()
        {
            let cX=page.keyboard.press('X',{delay:100});
            return cX;
        }).then(function()
        {
            let textse=WaitandClick('.monaco-editor.no-user-select.vs',page);
            return textse;
        }).then(function()
        {
            let ctrlall=page.keyboard.down('Control');
            return ctrlall;
        }).then(function()
        {
            let call=page.keyboard.press('A',{delay:100});
            return call;
        }).then(function()
        {
            let caltl=page.keyboard.press('V',{delay:100});
            return caltl;  
        }).then(function()
        {

            let ctrlall=page.keyboard.up('Control');
            return ctrlall;
        }).then(function(){
            let textse=WaitandClick('.ui-btn.ui-btn-normal.ui-btn-primary',page);
            return textse;
        }).then(function()
        {
            resolve();
        }).catch(function(err)
        {
            reject();
        })        
    })
}