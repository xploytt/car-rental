import Audi from "../assets/car-models/audi-box.png"
import Benz from "../assets/car-models/benz-box.png"
import Bmw from "../assets/car-models/bmw-box.png"
import Golf from "../assets/car-models/golf6-box.png"
import Passat from "../assets/car-models/passat-box.png"
import Toyota from "../assets/car-models/toyota-box.png"
import ReserveAudi from "../assets/reserve/audia.jpg"
import ReserveToyotaCamry from "../assets/reserve/toyotacamry.jpg"
import ReserveBMW from "../assets/reserve/bmw320.jpg"
import ReserveBenz from "../assets/reserve/benz.jpg"
import ReserveGolf from "../assets/reserve/golf6.jpg"
import ReservePassatCC from "../assets/reserve/passatcc.jpg"



export const models = [
    {
        dailyPrice: 45,
        starRating: 5,
        manual: true,
        diesel: true,
        brand: "Audi A1",
        carName: "Audi",
        carImage: Audi,
        reserve: ReserveAudi,
        fullName: "Audi A1 S-Line",
        mark: "A1",
        year: 2012,
        fuel: "Gasoline",
        transmission: "Maunual",
        AC: "Yes",
        doors: "4/5"
    },

    {
        dailyPrice: 37,
        starRating: 5,
        manual: true,
        diesel: true,
        brand: "Golf 6",
        carName: "VW",
        carImage: Golf,
        reserve: ReserveGolf,
        fullName: "VW Golf 6",
        mark: "Volkswagen",
        year: 2008,
        fuel: "Diesel",
        transmission: "Maunual",
        AC: "Yes",
        doors: "4/5"
    },

    {
        dailyPrice: 50,
        starRating: 5,
        manual: true,
        diesel: true,
        brand: "Mercedes-Benz",
        carName: "GLK",
        carImage: Benz,
        reserve: ReserveBenz,
        fullName: "Mercedes-Benz GLK",
        mark: "Mercedes",
        year:2006,
        fuel: "Diesel",
        transmission: "Manual",
        AC: "Yes",
        doors: "4/5"
    },

    {
        dailyPrice: 25,
        starRating: 5,
        manual: true,
        diesel: true,
        brand: "VW Passat",
        carName: "CC",
        carImage: Passat,
        reserve: ReservePassatCC,
        fullName: "VW Passat CC",
        mark: "Volkswagen",
        year: 2008,
        fuel: "Gasoline",
        transmission: "Automatic",
        AC: "Yes",
        doors: "4/5"
    },

    {
        dailyPrice: 30,
        starRating: 5,
        manual: true,
        diesel: true,
        brand: "Toyota",
        carName: "Camry",
        carImage: Toyota,
        reserve: ReserveToyotaCamry,
        fullName: "Toyota Camry",
        mark: "Toyota",
        year: 2006,
        fuel: "Hybrid",
        transmission: "Automatic",
        AC: "Yes",
        doors: "4/5"
    },

    {   
        dailyPrice: 35,
        starRating: 5,
        manual: true,
        diesel: true,
        brand: "BMW 320",
        carName: "Modernline",
        carImage: Bmw,
        reserve: ReserveBMW,
        fullName: "BMW 320 ModernLine",
        mark: "BMW",
        year: 2012,
        fuel: "Diesel",
        transmission: "Manual",
        AC: "Yes",
        doors: "4/5"
        
    }
]
let brand = []

models.forEach((model)=>{
    brand.push(`${model.brand} ${model.carName}`)
})

export {brand}

