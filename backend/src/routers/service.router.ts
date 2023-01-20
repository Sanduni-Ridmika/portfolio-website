import { Router } from "express";
import { sample_services, sample_tags } from "../data";
import asyncHandler from 'express-async-handler';
import { ServiceModel } from "../models/service.model";
const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const servicesCount = await ServiceModel.countDocuments();
        if(servicesCount>0) {
            res.send("Seed is already done!");
            return;
        }
        await ServiceModel.create(sample_services);
        res.send("Seed is Done!");
    }
))

router.get("/", asyncHandler (
    async (req, res) => {
        const services = await ServiceModel.find();
        res.send(services);
    }
))
router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        const searchRegx = new RegExp(req.params.searchTerm, 'i');
        const services = await ServiceModel.find({name: {$regex:searchRegx}})
        res.send(services);
    }
))

router.get("/tags", asyncHandler(
    async (req, res) => {
        const tags = await ServiceModel.aggregate([
            {
                $unwind:'$tags'
            },
            {
                $group: {
                    _id: '$tags',
                    count: {$sum: 1}
                }
            },
            {
                $project:{
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({count: -1});

        const all = {
            name: 'All',
            count: await ServiceModel.countDocuments()
        }
        tags.unshift(all);
        res.send(tags);
    }
))

router.get("/tag/:tagName", asyncHandler(
    async (req, res) => {
        const services = await ServiceModel.find({tags: req.params.tagName})
        res.send(services);
    }
))

router.get("/:serviceId", asyncHandler(
    async (req, res) => {
        const service = await ServiceModel.findById(req.params.serviceId);
        res.send(service);
    }
))

export default router;