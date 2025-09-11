import { parse } from "date-fns";

interface AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    printAppointment(): void;
}

class Appointment implements AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    constructor(startTime: Date, endTime: Date, description: string) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
    }

    printAppointment() {
        console.log(this.startTime);
        console.log(this.endTime);
        console.log(this.description);
    }
}

const startTime = parse("28-08-2025 10:00", "dd-MM-yyyy HH:mm", new Date());
const endTime = parse("28-08-2025 11:00", "dd-MM-yyyy HH:mm", new Date());
const a1 = new Appointment(
    startTime,
    endTime,
    "Dental Appointment"
);
a1.printAppointment();