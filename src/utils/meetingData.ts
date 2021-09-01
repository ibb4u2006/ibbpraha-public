export interface IState {
    meetingSchedules: object[];
    sortedSchedules: object[];
    groupedSchedules: [];
    openModal: boolean;
    months: string[];
    loading: boolean;
    monthNames: {
        January: number,
        February: number,
        March: number,
        April: number,
        May: number,
        June: number,
        July: number,
        August: number,
        September: number,
        October: number,
        November: number,
        December: number,
    };
    values: {
        name: string,
        jobTitle: string,
        company: string,
        hear: string,
        why: string,
        email: string,
        phone: string,
        city: string,
        country: string,
        meetingDate: string,
        date: any,
    };
    errors: {
        name: string,
        jobTitle: string,
        hear: string,
        why: string,
        email: string,
    };
};

export const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const monthNames = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
};

export const values = {
    name: "",
    jobTitle: "",
    company: "",
    hear: "",
    why: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    meetingDate: "",
    date: "",
};

export const errors = {
    name: "",
    jobTitle: "",
    hear: "",
    why: "",
    email: "",
};