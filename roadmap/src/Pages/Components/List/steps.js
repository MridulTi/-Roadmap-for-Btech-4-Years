import {Link} from "react-router-dom"
import React,{Component} from "react"
let information;
function handleinformation(value){
    if((value=='CS')||(value=='Coding')){
        return(
            <div>
                <h2><a href="#">Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
            </div>
        )
    }else if((value=='Design')||(value=='Graphics')){
        return(
            <div>
                <h2><a href="#">Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
            </div>
        )
    }
    else if((value=='')||(value=='')){
        return(
            <div>
                <h2><a href="#">Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
            </div>
        )
    }
    else{
        return(
            <div>
                <h2>Sorry ! I do't have any info about anything like that !</h2>
                <h3> Though here is a link to Tech twitter you can ask people out there.
                    <br/><a href="https://twitter.com/i/communities/1472105760389668865">Tech Twitter</a>
                </h3>
            </div>
        )
    }
}
function handleinternship(value){
    if((value=='CS')||(value=='Coding')){
        return(
            <div>
                <h2><a href="#">Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
            </div>
        )
    }else if((value=='Design')||(value=='Graphics')){
        return(
            <div>
                <h2><a href="#">Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
            </div>
        )
    }
    else if((value=='')||(value=='')){
        return(
            <div>
                <h2><a href="#">Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
                <h2><a>Kunal Kushwaha</a></h2>
            </div>
        )
    }
    else{
        return(
            <div>
                <h2>Sorry ! I do't have any info about anything like that !</h2>
                <h3> Though here is a link to Tech twitter you can ask people out there.
                    <br/><a href="https://twitter.com/i/communities/1472105760389668865">Tech Twitter</a>
                </h3>
            </div>
        )
    }
}
class Info extends Component {
    componentDidMount() {
      const { previousStep } = this.props;
      
      information=handleinformation(previousStep.value);
    //   this.props.triggerNextStep({ trigger: '11'});
    }
  
    render() {
      return (
        <div>
            <h3>Here are few people you can contact on various platforms for guidance</h3>
            {information}
        </div>
      );
    }
  }
  class Check extends Component {
    componentDidMount() {
      const { previousStep } = this.props;
      const q= previousStep.value;
      let url=`https://serpapi.com/search.json?engine=google&q=${q}`;
        fetch(url)
            .then(res => res.json())
            .then(data =>{
                information=data;
            })
            // .catch(err=>{`error ${err}`});
    //   information=handleinternship(previousStep.value);
    //   this.props.triggerNextStep({ trigger: '11'});
    }
  
    render() {
      return (
        <div>
            {information}
        </div>
      );
    }
  }
export default [
    {
        id: '1',
        message: "Hello ,What's your name",
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
            { value: 4, label: 'Guidance', trigger: '9' },
          ],
    },
    {
        id:'5',
        message:"Ok then,Bye!",
        trigger:"end-cov"
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
        options: [
            { value: 1, label: 'Engineering', trigger: '8.1' },
            { value: 2, label: 'Doctorate', trigger: '8.2' },
            { value: 3, label: 'Lawyer', trigger: '8.3' },
            { value: 4, label: 'Designing', trigger: '8.4' },
            { value: 5, label: 'Something Else?', trigger: '7.1' },
          ],
    },
    {
        id:'7.1',
        user:true,
        // trigger:'check'
    },
    // {
    //     id: 'check',
    //     component:<Check/>,
    // },
    
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
        component:<Info/>,
        trigger:'11'
    },
    {
        id: '9',
        message:"Mention the field you want in Person Guidance",
        trigger:'9.1'
    },
    {
        id:'9.1',
        user:true,
        placeholder:'Enter Field Name',
        trigger:'10'
    },
    {
        id: '11',
        message: 'Anything more?',
        trigger:'4'
    },
    {
        id: '12',
        message: 'Anything more?',
        trigger:'4'
    }
    ,{
        id:'end-cov',
        user:true,
        trigger:'3.1'
    }
    
]