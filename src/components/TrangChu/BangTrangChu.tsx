
import { Area } from '@ant-design/plots';

export const BangTrangChu = () => {
  const DemoArea = () => {
    const data = [
        {
            "timePeriod": "Thứ 2",
            "value": 1
        },
        {
            "timePeriod": "Thứ 3",
            "value": 1.4
        },
        {
            "timePeriod": "Thứ 4",
            "value": 2
        },
        {
            "timePeriod": "Thứ 5",
            "value": 2.27
        },
        {
            "timePeriod": "Thứ 6",
            "value": 3.33
        },
        {
            "timePeriod": "Thứ 7",
            "value": 2.4
        },
        {
            "timePeriod": "CN",
            "value": 1.5
        },
    
    ];

    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
        line: {
            color: '#FF993C',
            size: 2,
            height: 400,
        },
        areaStyle: () => {
            return {
                fill: 'l(270) 0:#ffffff 0.5:rgb(255 153 60 / 79%) 1:#FF993C',
                height: 300,
            };
        },
    };

    return <Area {...config} />;
};
    return (
        <div id='container'>
          <DemoArea />
        </div>
    )
    
    
}