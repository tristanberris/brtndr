import express from "express";
import BaseController from "../utils/BaseController";
import { ingredientsService } from "../services/IngredientsService";
import _store from "../../clientsrc/src/store/index.js"
// import auth0Provider from "@bcwdev/auth0provider";



export class IngredientsController extends BaseController {
  constructor() {
    super("api/ingredients");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      // .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
  }
  async getAll(req, res, next) {
    try {
        let data = await ingredientsService.getAll()
        return res.send(data)
    } catch (error) {
        next(error);
    }
}

  // async create(req, res, next) {
  //   try {
  //     // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
  //     // req.body.creatorEmail = req.userInfo.email;
  //     let data = await ingredientsService.create(req.body)
  //     res.send(req.body);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  
  //beginning of reference code
  async create(req, res,next){
    try {
      let data  = await ingredientsService.create(req.body)
      res.send(req.body)
    } catch (error) {
      next(error)
    }
  }
}
