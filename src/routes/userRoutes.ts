import express from "express";
import supabase from "../services/supabaseClient";
import { authenticateUser } from "../middleware/authMiddleware";

const userRoutes = express.Router();

userRoutes.post("/", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json(data);
});

userRoutes.get("/", authenticateUser, async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(400).json({ error: "Token is missing" });
    return;
  }
  const { data, error } = await supabase.auth.getUser(token);

  if (error) {
    res.status(401).json({ error: "Invalid or expired token" });
    return;
  }

  res.status(200).json({ message: "Token is valid", user: data });
  return;
});

userRoutes.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json(data);
});

userRoutes.post("/signOut", async (req, res) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json({ message: "Signed out successfully" });
});

userRoutes.patch("/", authenticateUser, async (req, res) => {
  const { userEmail, newEmail } = req.body;
  const { data, error } = await supabase.auth.updateUser({ email: newEmail });
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json(data);
});

userRoutes.delete("/", authenticateUser, async (req, res) => {
  const { userEmail } = req.body;
  const { error } = await supabase.auth.admin.deleteUser(userEmail);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json({ message: "User deleted successfully" });
});

export default userRoutes;
