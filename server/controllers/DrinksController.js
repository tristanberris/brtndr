import express from "express";
import BaseController from "../utils/BaseController";
import { drinksService } from "../services/DrinksService";
// import auth0Provider from "@bcwdev/auth0provider";

export class DrinksController extends BaseController {
  constructor() {
    super("api/drinks");
    this.router
      .get("", this.getAll)
      .get("/matching", this.findMatching)
      .post("", this.create)
  }
  async getAll(req, res, next) {
    try {
      let data = await drinksService.getAll()
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async findMatching(req,res,next){
  try {
    let data = await drinksService.findMatching()
    return res.send(data)
    } catch (error) {
    next(error)
  }
}
  // async getActive(req, res, next) {
  //   try {
  //     let data = await drinksService.getActive()
  //     return res.send(data)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      // req.body.creatorEmail = req.userInfo.email;
      let data = await drinksService.create(req.body)
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
