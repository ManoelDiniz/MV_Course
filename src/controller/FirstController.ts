import { Request, Response } from "express";

class FirstController {
    public home(req:Request, res: Response){
        res.json(
            {
                message:"Hello Word",
            }
        )
    }
};

export const firstController = new FirstController();