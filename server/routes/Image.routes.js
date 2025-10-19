import express from "express";
import { get_images, post_image } from "../controllers/Image.controller.js";

const image_routes = express.Router();

image_routes.post("/", post_image);
image_routes.get("/", get_images);

export default image_routes;
