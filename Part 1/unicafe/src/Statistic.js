import StatisticLine from "./StatisticLine";





const Statistic=({good ,neutral,bad,all,average,positive})=>
{

    


    return(
        <>
            <h1>statistics</h1>
            <StatisticLine text={'good'} value={good}/>
            <StatisticLine text={'neutral'} value={neutral}/>
            <StatisticLine text={'bad'} value={bad}/>
            <StatisticLine text={'all'} value={all}/>
            <StatisticLine text={'average'} value={average}/>
            <StatisticLine text={'positive'} value={positive}/>
            
        </>
    )
}
export default Statistic;