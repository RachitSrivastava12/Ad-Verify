import  Router from "express"
import type {Request, Response} from "express"
import prisma from "../index"

const router = Router();

router.post('/register', async(req: Request, res: Response) =>{
   try{
    const address = req.body.address;
    if(!address)
    {
        return res.send("an address will be needed")
    }
     const newClient = await prisma.client.create({
        data:{
             address
        }})
   }
   catch(error)
   {
    console.log("a error")
   }
})

router.post('/upload/new-ad/:id', async(req: Request, res: Response) =>{
        const {title, content, url, payperad, nuOfEng } = req.body;
        const clientId = Number(req.params.id);
        if(!url)
        {
            return res.send("url is reuired");
        }
        const newAd = await prisma.ad.create({
            data:{
                title,
                content,
                url,
                payperad, 
                nuOfEng,
                clientId
            }})
            if(newAd)
            {
                res.status(200).json(
                {
                    "process" : "ad posted :)"
                }
                )}
       
})

router.get("/all-ads/:id", async(req: Request, res: Response)=>{
    const clientId = Number(req.params.id);
    const getALLads = await prisma.ad.findMany(
        {
            where :{clientId}
        })

        if(!getALLads)
        {
           return res.send("this client hasn't posted anything")
        }
        res.status(200).json({getALLads})
})

router.post("/transfer/funds/:id/:ad-id", async(req: Request, res: Response) =>{
})


export default router;