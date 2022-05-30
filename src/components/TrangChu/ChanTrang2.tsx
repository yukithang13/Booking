
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
function ChanTrang2 () {
  const dataFamily = {
    labels: undefined,
    datasets: [
      {
        label: undefined,
        data: [60, 50],
        backgroundColor: ["#FF8A48", "#4F75FF"],
        
      },
      
    ],
  };
  
  return (
    <div>
      <Doughnut data={dataFamily}/>
      

    </div>
  )

};

export default ChanTrang2
