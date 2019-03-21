export let csv = [
    {
        name: "ID",
        type: "ID",
        validators: [
            length(1, 4)
        ]
    },
    {
        name: "Name",
        type: "string",
        validators: [
            length(1, 18)
        ]
    },
    {
        name: "Surname",
        type: "string",
        validators: [
            length(1, 18)
        ]
    },
    {
        name: "Mail",
        type: "mail",
        validators: [
            length(6, 18)
        ]
    },
    {
        name: "Date of registration",
        type: "date",
        validators: [
            length(8, 10)
        ]
    },
    {
        name: "Phone",
        type: "phone",
        validators: [
            length(14, 16)
        ]
    },
]

function length(min: number, max: number, value?: number) {
    if (value != undefined) {
        return !(value < min || value > max);
    } else {
        return length.bind(this, min, max);
    }
}