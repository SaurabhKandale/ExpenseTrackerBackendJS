import {Request, Response} from "express";
import { Account } from "../../types";
import prisma from "../../lib/prisma";
import { getRouteParam } from "../../utils/routeParams";

const updateAccountService=async (request:Request, response: Response)=>{
    const accountId = getRouteParam(request.params.accountId);
    const {accountName, monthlyIncome} = request.body;
    try{
        const account:Account= await prisma.account.update({
            where:{
                accountId
            },
            data:{
                accountName,
                monthlyIncome:parseFloat(monthlyIncome),
            }
        })

        return response.status(200).json(account);
    }catch(error){
        console.log(error);
        return response.status(500).json({message:"Internal server error"});
    }

    
}

export default updateAccountService;