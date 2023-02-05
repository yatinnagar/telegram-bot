const { Telegraf } = require('telegraf')
const { axios} = require('axios');
const fetch =require('isomorphic-fetch')

// const puppeteer = require('puppeteer');
// const fs=require("fs/promises")

require('dotenv').config()




const bot = new Telegraf(process.env.BOT_TOKEN)


bot.start((ctx) => {
    let message = ` Please use the /fact command to receive a new fact`
    // ctx.reply(message)
  message=`use the /uselessfacts command to know an useless fact `
  ctx.reply(message)
  message=`use the /lol command to receive a random joke`
  ctx.reply(message)
  message=`use the /score command to get live score of a cricket match`
  ctx.reply(message)
   message=`use the /quote command to get a quote `
  ctx.reply(message)
  message=`use the /about command to know owner info`
  ctx.reply(message)
  

})
const fetchMydata =(fetchurl) =>{

    return fetch(fetchurl,{
        method:'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));

};


bot.command('fact',async(ctx)=>{
  try {
        
    
      
       const fetchurl=`https://useless-facts.sameerkumar.website/api`;
       

       const parsedData=await fetchMydata(fetchurl);
      
     await ctx.reply(parsedData.data);
     
       
    }
  catch (error) {
        console.log('error', error)
        ctx.reply('error')
    }
  ctx.answerCbQuery()
})

bot.command('about', async (ctx) => {
    try {
        ctx.reply('made by YN')
     
    } catch (error) {
        console.log('error', error)
        ctx.reply('error')
    }
})

// bot.command('fact', async (ctx) => {
//     try {
//         ctx.reply('Generating image, Please wait !!!')
//         let imagePath = `./temp/${uuidV4()}.jpg`
//         await factGenerator.generateImage(imagePath)
//         await ctx.replyWithPhoto({ source: imagePath })
//         factGenerator.deleteImage(imagePath)
//     } catch (error) {
//         console.log('error', error)
//         ctx.reply('error sending image')
//     }
// })

bot.command('quote', async (ctx) => {
    try {
        
    
      
       const fetchurl=`https://api-quote-yn.vercel.app/`;
       
       const parsedData=await fetchMydata(fetchurl);
      
      
      
     await ctx.reply(`"${parsedData.quoteText}" \n - ${parsedData.personName}`);
    
    }
  catch (error) {
        console.log('error', error)
        ctx.reply('error')
    }
})
bot.command('uselessfacts', async (ctx) => {
    try {
        
      
       const fetchurl=`https://useless-facts.sameerkumar.website/api`;

  const parsedData=await fetchMydata(fetchurl);
      
     await ctx.reply(parsedData.data);
      
      
     
       
    }
  catch (error) {
        console.log('error', error)
        ctx.reply('error')
    }
})


bot.command('score', async (ctx) => {
    try {
        //www.cricbuzz.com/live-cricket-scores/41731/`;
      
      // let cbUrl=temp;
     let temp='https://www.cricbuzz.com/live-cricket-scores/46532/sl-vs-aus-4th-odi-australia-tour-of-sri-lanka-2022';
       let fetchurl=`https://cricket-api.vercel.app/cri.php?url=${temp}`;
       

     const parsedData=await fetchMydata(fetchurl);
      
     
      const {title,current,batsman,batsmanrun,ballsfaced,batsmantwo,batsmantworun,batsmantwoballsfaced,lastwicket,bowler,bowlerover,bowlerruns,bowlerwickets}= parsedData.livescore;
      const {bowlertwo,bowletworover,bowlertworuns,bowlertwowickets}=parsedData.livescore;
     
     await ctx.reply('parsedData.livescore')
      
  //   await ctx.reply('........................\n\n'+`${title}\n\n ${current}\n\n ${batsman}  ${batsmanrun} ${ballsfaced} \n ${batsmantwo}  ${batsmantworun} ${batsmantwoballsfaced}\n 
  // ${bowler} O:${bowlerover} R:${bowlerruns} W:${bowlerwickets} \nlast Wkt: ${lastwicket}\n`+
  //     '\n........................')
    }
  catch (error) {
        console.log('error', error)
        ctx.reply('error ')
    }
})

bot.launch()
