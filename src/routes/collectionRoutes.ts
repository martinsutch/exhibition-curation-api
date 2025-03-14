import express from "express";
import supabase from "../services/supabaseClient";
import { authenticateUser } from "../middleware/authMiddleware";

const router = express.Router();

// GET: Get all collections for the user
router.get("/", authenticateUser, async (req, res) => {
  const { userEmail } = req.body;
  const { data, error } = await supabase
    .from("collections")
    .select("*")
    .eq("user.email", userEmail);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json(data);
});

// POST: Create a new collection
router.post("/", authenticateUser, async (req, res) => {
  const { title, userEmail } = req.body;
  const { data, error } = await supabase
    .from("collections")
    .insert([{ title, user_email: userEmail }])
    .select();
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json(data);
});

// PATCH: Update collection title
router.patch("/", authenticateUser, async (req, res) => {
  const { id, title } = req.body;
  const { data, error } = await supabase
    .from("collections")
    .update({ title })
    .eq("id", id)
    .select();
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json(data);
});

// DELETE: Remove a collection
router.delete("/", authenticateUser, async (req, res) => {
  const { id } = req.body;
  const { error } = await supabase.from("collections").delete().eq("id", id);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json({ message: "Collection deleted successfully" });
});

export default router;
