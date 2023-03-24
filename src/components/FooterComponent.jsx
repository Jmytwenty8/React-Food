/* eslint-disable react/react-in-jsx-scope */
const FooterComponent = () => {
    // console.log("Outside is called");
    return (
        
        <div>
            {/* {console.log("Inside is called")} */}
                <h4>Footer</h4>
                {/* <button onClick={() => {
                    console.log("Hey");
                }}>Hey!!</button> */}
        </div>
    )
        

}
    

export default FooterComponent;

// import React from "react";

// class FooterComponent extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         };
//     }
//     render() {
//         const { count } = this.state;
//         return (
//             <div> 
//                 <h4>Footer</h4>
//                 <h3>Count : {count}</h3>
//                 <button onClick={() => {
//                     this.setState({
//                         count:1,
//                     })
//                 }}>
//                     SetCount
//                 </button>
//             </div>
//         )
//     }
// }

// export default FooterComponent;