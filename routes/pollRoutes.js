import { Router } from "express";
export const pollRouter = Router();

import {
  createPoll,
  getSinglePoll,
  getAllPolls,
  getRandomPoll,
  updatePoll,
  deletePoll,
  votePoll,
} from "../controllers/pollController.js";

pollRouter.route("/").get(getAllPolls).post(createPoll);
pollRouter.route("/random").get(getRandomPoll);
pollRouter.route("/vote").patch(votePoll);
pollRouter
  .route("/:id")
  .get(getSinglePoll)
  .patch(updatePoll)
  .delete(deletePoll);
