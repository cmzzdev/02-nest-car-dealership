import { v4 as uuid } from 'uuid';
import { Car } from "src/cars/interfaces/car.interface";

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee'
    },
    {
        id: uuid(),
        brand: 'Volkswagen',
        model: 'Tiguan'
    },
    {
        id: uuid(),
        brand: 'Seat',
        model: 'Ibiza'
    },
]