 


const Total=({parts})=>{

    

    const fun=(s,p)=>
    {
        console.log("hello ",s,p)
        return s+p.exercises;
    }
   const total=parts.reduce(fun,0)

     
    

   // const total=tot;

    return (<p>Number of exercises {total}</p>)
}
export default Total;