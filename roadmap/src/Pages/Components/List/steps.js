import {Link} from "react-router-dom"
const Check=""
let prevV="";
export default [
    {
        id: '1',
        message: 'Hello World',
        trigger: '2',
    },
    {
        id: '2',
        user:true,
        placeholder:'Enter you name',
        trigger: '3',
    },
    {
        id: '3',
        message: 'Hello,{previousValue} how are you doing.',
        trigger: '3.1',
    },
    {
        id:'3.1',
        message: 'What would you like to know about?.',
        trigger:'4',
    },
    {
        id: '4',
        options: [
            { value: 1, label: 'Nothing,Thanks', trigger: '5' },
            { value: 2, label: 'Studies', trigger: '5.1' },
            { value: 3, label: 'Internships', trigger: '5.2' },
            { value: 4, label: 'Guidance from Experienced one', trigger: '9' },
          ],
    },
    {
        id:'5',
        message:"Ok then,Bye!",
        end:true,
    },
    {
        id:'5.1',
        message: 'What is the a study course you want to know about?',
        trigger:"6",
    },
    {
        id:'5.2',
        message: 'In which field are you looking the intership in?',
        trigger:"7",
    },
    {
        id: '6',
        options: [
            { value: 1, label: 'Engineering', trigger: '8.1' },
            { value: 2, label: 'Doctorate', trigger: '8.2' },
            { value: 3, label: 'Lawyer', trigger: '8.3' },
            { value: 4, label: 'Designing', trigger: '8.4' },
            { value: 5, label: 'Something Else?', trigger: '12' },
          ],
    },
    {
        id: '7',
        user:true,
        trigger:'check',
    },
    {
        id: 'check',
        component:{Check}
    },
    
    {
        id: '8.1',
        component:
        <div>
            <Link to="/engineer"><button>Engineering</button></Link>
        </div>
    },
    {
        id: '8.2',
        component:
        <div>
            <Link to="/doctor"><button>Doctorate</button></Link>
        </div>
    },
    {
        id: '8.3',
        component:
        <div>
            <Link to="/lawyer"><button>Lawyer</button></Link>
        </div>
    },
    {
        id: '8.4',
        component:
        <div>
            <Link to="/designing"><button>Designing</button></Link>
        </div>
    },
    {
        id: '8.5',
        message: 'What is the a study course you want to know about?',
    },
    {
        id: '10',
        component:
        <div>
            {console.log(prevV)}
            {((prevV=='CS')||(prevV=='Computer Science')||(prevV=='Coding')) && <div>
                <h2>Here is the List of people you can talk with</h2>
                <li>Kunal Kushwaha</li>
                <li>Code with Harry</li>
                <li>Tech Twitter</li>
            </div>}
        </div>
    },
    {
        id: '9',
        message:"Mention the field you want in Person Guidance",
        trigger:'9.1'
    },
    {
        id:'9.1',
        user:true,
        trigger: ({ value, steps }) => {
            console.log(steps);

              if(value ==="Get a Quote"){
                return "4"
              }
    },
    {
        id: '11',
        message: 'What is the a study course you want to know about?',
    }
    ,{
        id:'12',
        message:"I am Sorry I don't have enough data to help you with that right now.",
        trigger:'5'
    }
    
]