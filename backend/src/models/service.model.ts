import { Schema, model } from "mongoose";
export interface Service {
    id:string;
    name:string;
    price:number;
    tags:string[];
    favorite:boolean;
    stars:number;
    imageUrl:string;
    //origins:string[];
    time:string;
}

export const ServiceSchema = new Schema<Service> (
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        tags: {type: [String]},
        favorite: {type: Boolean, default: false},
        stars: {type: Number, required: true},
        imageUrl: {type: String, required: true},
        time: {type: String, required: true},

    }, {
        toJSON: {
            virtuals:true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
);

export const ServiceModel = model<Service>('service', ServiceSchema);