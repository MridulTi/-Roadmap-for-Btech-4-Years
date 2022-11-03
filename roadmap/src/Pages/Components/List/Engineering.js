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
            { value: 5, label: 'Internships', trigger: 'interns' },
          ],
    },
    {
        id: 'CS-IT',
        component:
        <STC
        id="CS-IT"
        Name="CS-IT"
        />,
        trigger:'11'
    },
    {
        id: 'ECE',
        component:
        <STC
        id="ECE"
        Name="ECE"
        />,
        trigger:'11'
    },
    {
        id: 'ME',
        component:
        <STC
        id="ME"
        Name="ME"
        />,
        trigger:'11'
    },
    {
        id: 'CL',
        component:
        <STC
        id="CL"
        Name="CL"
        />,
        trigger:'11'
    },
    {
        id: '11',
        message: 'Anything more?',
        trigger:'engineer'
    },
    {
        id: 'interns',
        message: 'Choose the field you want?',
        trigger:'intern-options'
    },
    {
        id:"intern-options",
        options: [
            { value: 1, label: 'Computer Science/IT', trigger: 'CS-intern' },
            { value: 2, label: 'Electrical', trigger: 'EC-intern' },
            { value: 3, label: 'Mechanial', trigger: 'ME-intern' },
            { value: 4, label: 'Civil', trigger: 'CL-intern' },
          ],
    },
    {
        id: 'CS-intern',
        component:
        <STC
        id="CS-intern"
        Name="CS-IT"
        />,
        trigger:'11'
    },
    {
        id: 'EC-intern',
        component:
        <STC
        id="ECE-intern"
        Name="ECE"
        />,
        trigger:'11'
    },
    {
        id: 'ME-intern',
        component:
        <STC
        id="ME-intern"
        Name="ME"
        />,
        trigger:'11'
    },
    {
        id: 'CL-intern',
        component:
        <STC
        id="CL-intern"
        Name="CL"
        />,
        trigger:'11'
    },
]