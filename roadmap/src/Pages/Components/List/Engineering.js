import STC from "../STC"

export default [
    {
        id: '1',
        message: 'What field in Engineering do you want to know about?',
        trigger: 'engineer',
    },
    {
        id:"engineer",
        options: [
            { value: 1, label: 'Computer Science/IT', trigger: 'CS-IT' },
            { value: 2, label: 'Electrical', trigger: 'ECE' },
            { value: 3, label: 'Mechanial', trigger: 'ME' },
            { value: 4, label: 'Civil', trigger: 'CL' },
          ],
    },
    {
        id: 'CS-IT',
        component:
        <STC
        id="CS-IT"
        Name="CS-IT"
        />,
        trigger:'1'
    },
    {
        id: 'ECE',
        component:
        <STC
        id="ECE"
        Name="ECE"
        />,
        trigger:'1'
    },
    {
        id: 'ME',
        component:
        <STC
        id="ME"
        Name="ME"
        />,
        trigger:'1'
    },
    {
        id: 'CL',
        component:
        <STC
        id="CL"
        Name="CL"
        />,
        trigger:'1'
    },
]