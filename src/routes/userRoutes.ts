import express from "express";
import supabase from "../services/supabaseClient";

const userRoutes = express.Router();

// POST: Register user
userRoutes.post("/", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json(data);
});

// PATCH: Update user
userRoutes.patch("/", async (req, res) => {
  const { userEmail, newEmail } = req.body;
  const { data, error } = await supabase.auth.updateUser({ email: newEmail });
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json(data);
});

// DELETE: Remove user
userRoutes.delete("/", async (req, res) => {
  const { userEmail } = req.body;
  const { error } = await supabase.auth.admin.deleteUser(userEmail);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json({ message: "User deleted successfully" });
});

export default userRoutes;
