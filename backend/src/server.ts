import express from "express";
import cors from "cors";
import { sample_services, sample_tags } from "./data";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/services", (req, res) => {
    res.send(sample_services);
})
app.get("/api/services/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const services = sample_services.filter(service => service.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(services);

})

app.get("/api/services/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/services/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const services = sample_services.filter(service => service.tags?.includes(tagName));
    res.send(services);
})

app.get("/api/services/:serviceId", (req, res) => {
    const serviceId = req.params.serviceId;
    const service = sample_services.find(service => service.id == serviceId);
    res.send(service);
})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})