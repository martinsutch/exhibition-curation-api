import express from "express";
import supabase from "../services/supabaseClient";
import { authenticateUser } from "../middleware/authMiddleware";

const artRoutes = express.Router();

// GET: Get all art in a collection
artRoutes.get("/:collectionId", authenticateUser, async (req, res) => {
  const { collectionId } = req.params;
  const { data, error } = await supabase
    .from("art")
    .select("*")
    .eq("collection.id", collectionId);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json(data);
});

// POST: Add an artwork to a collection
artRoutes.post("/", authenticateUser, async (req, res) => {
  const { artPath, collectionId } = req.body;
  const { data, error } = await supabase
    .from("art")
    .insert([{ artPath, collection_id: collectionId }])
    .select();
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json(data);
});

// DELETE: Remove artwork
artRoutes.delete("/", authenticateUser, async (req, res) => {
  const { id } = req.body;
  const { error } = await supabase.from("art").delete().eq("id", id);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.json({ message: "Artwork deleted successfully" });
});

export default artRoutes;
