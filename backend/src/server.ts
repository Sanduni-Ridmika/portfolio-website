import express from "express";
import cors from "cors";
import { sample_services, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";


const app = express();
app.use(express.json());
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

app.post("/api/users/login", (req,res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email &&
        user.password === password);

        if(user) {
            res.send(generateTokenResponse(user));
        }
        else {
            res.status(400).send("Username or Password is invalid!");
        }
})

const generateTokenResponse = (user:any) => {
    const token = jwt.sign ({
        email:user.email, isAdmin:user.isAdmin
    },"SomeRandomText", {
        expiresIn: "30d"
    });
    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})