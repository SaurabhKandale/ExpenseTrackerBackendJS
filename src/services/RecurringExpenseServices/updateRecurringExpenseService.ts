import { Request, Response } from "express";    
import prisma from "../../lib/prisma";
import { getRouteParam } from "../../utils/routeParams";

const updateRecurringExpenseService=async (req:Request, res:Response)=>{

    const recurringExpenseId = getRouteParam(req.params.recurringExpenseId);
    const {recurringExpenseTitle, recurringExpenseCategory, recurringExpenseAccountId, recurringExpenseAmount, userId}=req.body;

    try{
        const updatedRecurringExpense=await prisma.recurringExpense.update({
            where:{
                recurringExpenseId
            },
            data:{
                recurringExpenseAccountId,
                recurringExpenseAmount,
                recurringExpenseCategory,
                recurringExpenseTitle,
                userId
            }
        })
        return res.status(200).json(updatedRecurringExpense);
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal server error"}); 
    }
    
}

export default updateRecurringExpenseService;