import React from 'react';
import Box from './Box';
import DemoLineChart from './LineChart';
import DemoScatterCahart from './ScatterChart';

const Layout = () => {
    const data = [
        {
            name: 'iOS Completion',
            value: 25
        },
        {
            name: 'Android Completion',
            value: 45
        },
        {
            name: 'Desktop Completion',
            value: 81
        },
    ]
    return (
        <div>
            <div class="container">
                <div class="top">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} class={`box${index + 1}`}>
                                    <Box name={item.name} value={item.value} />
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <div class="bottom">
                    <div class="box4">
                        <p className='mb-4'>
                            Completion - Line Chart
                        </p>
                        <DemoLineChart />
                    </div>
                    <div class="box5">
                        <p className='mb-4'>
                            Completion - Scatter Chart
                        </p>
                        <DemoScatterCahart />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Layout;