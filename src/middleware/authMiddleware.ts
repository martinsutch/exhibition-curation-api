import { Request, Response, NextFunction } from "express";
import supabase from "../services/supabaseClient";

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const { data, error } = await supabase.auth.getUser(token);
    if (error) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }

    req.body.userEmail = data.user.email;
    next();
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
