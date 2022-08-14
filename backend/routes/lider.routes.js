import { Router } from "express";
import  {create,update,ddelete,allLiders}  from "../service/lider.service.js"

const router = Router() 


router.get("/liders", async (req,res) => {
 try{
    let liders = await allLiders()
    res.json(liders)
 }
 catch(err){
    res.status(404).send("NO NO NO")
 }
})

router.post("/liders", async (req,res) =>{
    try{
        let {name,job,age} = req.body
         await create(name,job,age)
        res.sendStatus(201)
    }
    catch(err){
        res.status(404).send("NO NO NO")
    }
})
router.put('/liders/:id', async (req,res) => {
    try{
        let {name,job,age} = req.body
        const id = req.params.id
       await update(+id,name,job,age)
        res.send("Updated")
    }
    catch(err){
        res.status(404).send("NO NO NO")
    }
})
router.delete("/liders/:id", async (req,res) =>{
    try{
        const id = req.params.id
          await ddelete(+id)
        res.send("Delete")

    }
    catch(err){
        res.status(404).send("NO NO NO")
    } 
})
export default router