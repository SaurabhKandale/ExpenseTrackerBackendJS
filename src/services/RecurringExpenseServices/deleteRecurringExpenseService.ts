import { Request, Response } from "express";
import prisma from "../../lib/prisma";
import { getRouteParam } from "../../utils/routeParams";

const deleteRecurringExpenseService = async (req: Request, res: Response) => {
  const recurringExpenseId = getRouteParam(req.params.recurringExpenseId);

  try {
    await prisma.recurringExpense.delete({
      where: {
        recurringExpenseId:recurringExpenseId
      },
    });
    return res.status(200).json({ message: "Recurring expense deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default deleteRecurringExpenseService;
